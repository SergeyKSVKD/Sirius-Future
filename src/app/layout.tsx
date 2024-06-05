import type { Metadata, Viewport } from "next";
import "./globals.scss";
import '../app/fonts/stylesheet.css'
import Favicon from '/public/images/Metadata/favicon.ico';
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: "Интерактивная платформа онлайн школы Sirius Future.",
  description: "Sirius Future - 1-я онлайн-школа всестороннего развития ребенка.",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // minimumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={styles.fonts}>{children}</body>
    </html>
  );
}
