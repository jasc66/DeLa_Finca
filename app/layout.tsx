import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'De La Finca Restaurant',
  description: 'Authentic Costa Rican cuisine in Quepos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script id="trustmary-script" strategy="afterInteractive">
        {`
          (function (w,d,s,o,r,js,fjs) {
            w[r]=w[r]||function() {(w[r].q = w[r].q || []).push(arguments)}
            w[r]('app', 'aW_y73Id7X');
            if(d.getElementById(o)) return;
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = 'https://embed.trustmary.com/embed.js';
            js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'trustmary-embed', 'tmary'));
        `}
      </Script>
    </html>
  )
}

