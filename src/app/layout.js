import "./globals.css";

export const metadata = {
  title: "Tomdent | Clinică Stomatologică Sector 2 București | Dr. Gabriel Toma",
  description: "Cabinetul stomatologic Tomdent oferă servicii stomatologice complete la cele mai înalte standarde: implanturi, endodonție, chirurgie orală, pedodonție. Tratamente fără durere în Sector 2, București.",
  keywords: "cabinet stomatologic, clinica stomatologica, stomatolog bucuresti, sector 2, dr gabriel toma, implant dentar, tratament canal, detartraj, pedodontie, stomatologie copii",
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
