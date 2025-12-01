import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, base, polygon } from '@reown/appkit/networks';

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'YOUR_PROJECT_ID';

// 2. Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, base, polygon],
  projectId,
});

// 3. Create AppKit instance
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, base, polygon],
  projectId,
  metadata: {
    name: 'My Minimal App',
    description: 'AppKit Minimal Example',
    url: 'https://myapp.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  features: {
    analytics: true,
  }
});
