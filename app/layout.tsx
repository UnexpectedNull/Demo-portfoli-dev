import type { Metadata } from 'next';
import './globals.css';
import { Inter, Fira_Code } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fira = Fira_Code({ subsets: ['latin'], variable: '--font-fira' });

export const metadata: Metadata = {
  title: 'John Doe — Portfolio',
  description: 'Full-Stack Developer & Problem Solver',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fira.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
