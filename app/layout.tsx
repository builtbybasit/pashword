import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#7c3aed",
};

export const metadata: Metadata = {
  title: "Pashword - Passwords Done Right",
  applicationName: "Pashword",
  description:
    "Pashword - Hashed Password Generator. Free and Open Source WebApp to generate passwords you don't need to remember. Pashword generates unique strong passwords for all your accounts using just a single key.",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pashword - Passwords done right",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/pw.png",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-config": "/icons/browserconfig.xml",
    "msapplication-TileColor": "#7c3aed",
    "msapplication-tap-highlight": "no",
    "mobile-web-app-capable": "yes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pashword - Passwords done right",
    description:
      "Pashword - Hashed Password Generator. Free and Open Source WebApp to generate passwords you don't need to remember. Pashword generates unique strong passwords for all your accounts using just a single key.",
    images: ["https://pashword.app/twitter-og-image.png"],
  },
  openGraph: {
    type: "website",
    title: "Pashword - Passwords done right",
    description:
      "Pashword - Hashed Password Generator. Free and Open Source WebApp to generate passwords you don't need to remember. Pashword generates unique strong passwords for all your accounts using just a single key.",
    siteName: "Pashword",
    url: "https://pashword.app",
    images: ["https://pashword.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
