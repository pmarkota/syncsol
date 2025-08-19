import "./globals.css";

export const metadata = {
  title: "Sync Solution - Inovativna Softverska Rješenja",
  description: "Sync Solution je vaš pouzdan partner za implementaciju i razvoj softverskih rješenja koja pojednostavljuju vaše poslovanje i omogućuju digitalni napredak.",
  keywords: "softverski razvoj, web aplikacije, mobilne aplikacije, digitalna transformacija, Hrvatska",
  author: "Sync Solution",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
