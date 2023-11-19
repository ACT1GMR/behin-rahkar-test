import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import Layout from '@/components/layout';

import ReactQueryClientContext from '@/@core/contexts/react-query-client-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UI challenge Currency Dollar to EUR',
  description: 'Behin rahkar challenege'
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body className={inter.className}><ReactQueryClientContext><Layout>{children}</Layout></ReactQueryClientContext>
    </body>
    </html>
  );
}
