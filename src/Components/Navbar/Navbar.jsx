import React from 'react'
import "./Navbar.css"
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "DeSocial",
  projectId: "641b78ab05eb8ddcdc68fc15be6cd561",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function Navbar({ setConnected, setAccount }) {
  return (
    <div className='Navbar'>
      <div className="top">
        <div className="logo"></div>
        <p className="navBtn">Home</p>
        <p className="navBtn">Bookmark</p>
        <p className="navBtn">Profile</p>
      </div>
      <div className="bottom">
        {/* <button>Connect Wallet</button> */}
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} modalSize="compact">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
                const ready = mounted;
                const connected = ready && account && chain;
                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        setAccount("");
                        setConnected(false);

                        return (
                          <button onClick={openConnectModal} type="button">
                            Connect Wallet
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <button onClick={openChainModal} type="button">
                            Wrong network
                          </button>
                        );
                      }
                      setAccount(account.address);
                      setConnected(true);

                      return (

                        <button
                          onClick={() => {
                            openAccountModal();
                          }}
                          type="button"
                        >
                          {account.displayName}
                        </button>

                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </div>
  )
}

export default Navbar