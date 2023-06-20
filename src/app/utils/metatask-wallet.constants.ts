import { GlobalConstants } from "./global.constants"

export const INFRA_ID = 'ce791659cecb441ba14a37ca94ee2010'
export const PROJECT_ID = 'bc2956248a359fadc07834cbe7e07f4c'
export const NETWORK = 'matic'
export const MATIC_MAINNET = 'https://matic-mainnet.chainstacklabs.com'
export const APP_NAME = GlobalConstants.APP_NAME;
export const CHAIN_ID = 137

export const WALLET_CONNECT_OPTIONS = {
    projectId: PROJECT_ID, // required

    // This enforces that we have to connect only to mainnet
    chains: [CHAIN_ID],
    rpcMap: {
      137: MATIC_MAINNET,
    },
    showQrModal: true
}

export const COIN_BASE_WALLET_OPTIONS = {
    options: {
      appName: 'Remit2Any', // Required
      infuraId: 'ce791659cecb441ba14a37ca94ee2010', // Required
      // 137 is polygon
      chainId: 137, // Optional. It defaults to 1 if not provided
    },
  }