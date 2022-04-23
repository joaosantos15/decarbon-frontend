import { URLS } from '../chains'
import { WalletConnect } from '@web3-react/walletconnect'
import { initializeConnector } from '@web3-react/core'

export const [walletConnect, hooks] = initializeConnector(
  (actions) =>
    new WalletConnect(actions, {
      rpc: URLS,
    }),
  Object.keys(URLS).map((chainId) => Number(chainId))
)