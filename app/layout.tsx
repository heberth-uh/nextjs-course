import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div>
          {children}
        </div>
        <footer className='py-10 bg-gray-300 text-center'>
          This is the footer
        </footer>
      </body>
    </html>
  );
}
