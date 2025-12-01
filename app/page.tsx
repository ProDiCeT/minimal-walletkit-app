'use client';

import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react';
import { formatEther } from 'viem';
import { useEffect, useState } from 'react';

export default function Home() {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider('eip155');
  const [balance, setBalance] = useState('0');

  // Get balance when connected
  useEffect(() => {
    if (isConnected && address && walletProvider) {
      walletProvider.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      }).then((bal: string) => {
        setBalance(formatEther(BigInt(bal)));
      });
    }
  }, [isConnected, address, walletProvider]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🔗 Minimal WalletKit App
        </h1>

        {/* Connect Button */}
        <div className="mb-6">
          <appkit-button />
        </div>

        {/* Connected Info */}
        {isConnected && address ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800 font-semibold mb-1">
                ✅ Connected
              </p>
              <p className="text-xs text-green-600 font-mono break-all">
                {address}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 font-semibold mb-1">
                💰 Balance
              </p>
              <p className="text-2xl font-bold text-blue-600">
                {parseFloat(balance).toFixed(4)} ETH
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-purple-800 font-semibold mb-2">
                🎯 Quick Actions
              </p>
              <div className="space-y-2">
                <appkit-network-button />
                <appkit-account-button />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">
              👆 Click above to connect your wallet
            </p>
            <p className="text-sm text-gray-500">
              Supports MetaMask, WalletConnect, Coinbase Wallet, and 300+ wallets
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Powered by Reown AppKit</p>
        </div>
      </div>
    </div>
  );
}
