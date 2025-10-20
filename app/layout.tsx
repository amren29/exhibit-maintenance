import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Exhibit Fabric - Under Maintenance',
  description: 'Our website is temporarily offline as we work on exciting improvements',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
