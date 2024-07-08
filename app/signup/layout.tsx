import { ReactNode } from 'react';
import '@/app/globals.css';
import { ToastProvider } from '@/components/ui/toast';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
