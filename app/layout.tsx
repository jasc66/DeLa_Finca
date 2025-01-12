import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'De La Finca Restaurant',
  description: 'Authentic Costa Rican cuisine in the heart of Quepos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div id="trustmary-container" style={{ display: 'none' }}></div>
        <Script
          id="trustmary-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.tmary = window.tmary || function() {
                (window.tmary.q = window.tmary.q || []).push(arguments);
              };
              tmary('app', 'KoVx7GQHD');
            `,
          }}
        />
        <Script
          src="https://widget.trustmary.com/KoVx7GQHD"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

