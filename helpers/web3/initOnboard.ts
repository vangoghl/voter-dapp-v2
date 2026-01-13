import gnosisModule from "@web3-onboard/gnosis";
import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import walletConnectModule from "@web3-onboard/walletconnect";
import { logo } from "public/assets/logo";
import { config } from "helpers/config";

const injected = injectedModule();
const walletConnect = walletConnectModule({
  version: 2,
  projectId: config.walletConnectProjectId,
  requiredChains: [config.chainId],
});
const gnosis = gnosisModule();
export const initOnboard = init({
  wallets: [injected, walletConnect, gnosis],
  chains: [config.onboardConfig],
  appMetadata: {
    name: "UMA 2.0",
    icon: logo,
    logo,
    description: "UMA 2.0 Voter Dapp",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
    ],
  },
  apiKey: config.blocknativeDappId,
  notify: {
    enabled: false,
  },
  accountCenter: {
    desktop: { enabled: false },
    mobile: { enabled: false },
  },
  theme: {
    "--w3o-background-color": "#1e1e1e",
    "--w3o-foreground-color": "#2a2a2a",
    "--w3o-text-color": "#ffffff",
    "--w3o-border-color": "#404040",
    "--w3o-action-color": "#ffd608",
    "--w3o-border-radius": "12px",
  },
});
