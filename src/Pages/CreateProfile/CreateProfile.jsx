import React, { useState } from 'react';
import axios from 'axios';

function CreateProfile({ contract }) {
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('file', image);

            setLoading(true);

            // Upload image to Pinata
            const pinataResponse = await axios.post(
                'https://api.pinata.cloud/pinning/pinFileToIPFS',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        pinata_api_key: 'f794b517e0c4aa7e4723',
                        pinata_secret_api_key: '7a110dbb66336f7943eedcc985412f484134d02c427bb846efabd93a9c08600b',
                    },
                }
            );

            const ipfsImageUrl = pinataResponse.data.IpfsHash;

            // Create profile data
            const profileData = {
                username,
                bio,
                image: ipfsImageUrl,
            };

            // Upload profile data to Pinata
            const profileUploadResponse = await axios.post(
                'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                profileData,
                {
                    headers: {
                        pinata_api_key: 'f794b517e0c4aa7e4723',
                        pinata_secret_api_key: '7a110dbb66336f7943eedcc985412f484134d02c427bb846efabd93a9c08600b',
                    },
                }
            );

            const CID = profileUploadResponse.data.IpfsHash;
            const tx = await contract.getRegister(CID);
            await tx.wait();
            console.log('Profile uploaded successfully:', profileUploadResponse.data);
        } catch (error) {
            console.error('Error uploading profile:', error);
            setLoading(false);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" onChange={handleImageChange} />
            </div>
            <div>
                <label>Bio:</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Uploading...' : 'Upload Profile'}
            </button>
        </form>
    );
}

export default CreateProfile;
