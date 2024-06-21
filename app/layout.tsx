import type { Metadata, Viewport } from 'next';

import '@/globals.css';

export const metadata: Metadata = {
  title: 'Google Next Yearbook',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark overscroll-none overflow-x-hidden">
      <body className="relative flex min-h-screen flex-col justify-between bg-dark-gray text-white">
        {children}
        <div className="-z-20 opacity-65">
          <div
            className="absolute left-0 top-0 h-55vh w-screen bg-gradient-teal before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-noise before:bg-blend-soft-light before:opacity-40
            after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-blk-to-btm-l"
          ></div>
          <div
            className="absolute left-0 top-0 h-55vh w-screen
            before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-blk-to-top-r
            after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-blk-to-l"
          ></div>
          <div
            className="absolute left-0 top-0 h-55vh w-screen
            before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-blk-to-r"
          ></div>
        </div>
      </body>
    </html>
  );
}
