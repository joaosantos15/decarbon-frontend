import { useEffect, useState } from 'react'

import { MailIcon } from '@heroicons/react/solid'
import QRCodeModal from '@walletconnect/qrcode-modal'
import WalletConnect from '@walletconnect/client'

export const WalletConnectComponent = ({ setEthAddress }) => {
  const [connector, setConnector] = useState()

  const handleConnect = () => {
    // Create a connector
    const connector = new WalletConnect({
      bridge: 'https://bridge.walletconnect.org', // Required
      qrcodeModal: QRCodeModal,
    })

    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession()
    }

    // Subscribe to connection events
    connector.on('connect', (error, payload) => {
      const { accounts, chainId } = payload.params[0]
      setEthAddress(accounts[0])

      if (error) {
        throw error
      }
    })

    connector.on('session_update', (error, payload) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      setEthAddress(accounts[0])
    })

    connector.on('disconnect', (error, payload) => {
      if (error) {
        throw error
      }

      // Delete connector
    })
  }

  return (
    <>
      {/* <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-green-600 border-4 shadow-sm text-sm font-medium rounded-md text-white bg-white bg-opacity-10 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleConnect}
      >
        <MailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Connect Wallet
      </button> */}
      <button
        type="button"
        onClick={handleConnect}
        className="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

      >
        <img className='h-5 w-5 mr-2' src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/svg/circle/walletconnect-circle-blue.svg" />
        Connect Wallet
      </button>
    </>
  )
}
