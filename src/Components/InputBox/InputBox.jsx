import React, { useState } from 'react';
import axios from 'axios';
import "./InputBox.css";

function InputBox({ contract }) {
    const [text, setText] = useState("");
    const [images, setImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files).slice(0, 3);
        setImages(selectedImages);
    };

    const handlePost = async () => {
        setUploading(true);

        try {
            const imageHashes = await Promise.all(images.map(async (image) => {
                const formData = new FormData();
                formData.append('file', image);

                const response = await axios.post(
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

                return response.data.IpfsHash;
            }));

            const pinataData = {
                text,
                images: imageHashes,
            };

            const pinataResponse = await axios.post(
                'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                pinataData,
                {
                    headers: {
                        pinata_api_key: 'f794b517e0c4aa7e4723',
                        pinata_secret_api_key: '7a110dbb66336f7943eedcc985412f484134d02c427bb846efabd93a9c08600b',
                    },
                }
            );

            console.log('Content uploaded successfully to Pinata:', pinataResponse.data);
            const CID = pinataResponse.data.IpfsHash;
            const tx = await contract.post(CID);
            await tx.wait();
            setUploading(false);
        } catch (error) {
            console.error('Error uploading content:', error);
            setUploading(false);
        }
    };

    return (
        <div className='InputBox'>
            <div className="top">
                <div className="left">
                    <img src={require('../Post/ape.png')} alt="Preview" />
                </div>
                <div className="right">
                    <textarea
                        placeholder="What's happening..."
                        value={text}
                        onChange={handleTextChange}
                    ></textarea>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <input type="file" multiple accept="image/*" onChange={handleImageChange} />
                <button onClick={handlePost} disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Post'}
                </button>
            </div>
        </div>
    );
}

export default InputBox;
