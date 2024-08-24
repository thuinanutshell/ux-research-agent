import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-raleway',
});

export default function RootLayout({children}) {
  return (
    <html lang='en' className={raleway.className}>
      <body>{children}</body>
    </html>
  )
}