import type { Metadata } from 'next';
import { Inter, Geist, Lora } from 'next/font/google';
import './globals.css';
import '../styles/globals.scss';
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Education Discovery & Management',
  description: 'A platform to discover courses, institutions and manage skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, lora.variable, inter.variable)}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
