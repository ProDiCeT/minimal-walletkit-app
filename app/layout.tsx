import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minimal WalletKit App',
  description: 'Super simple Reown AppKit integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
