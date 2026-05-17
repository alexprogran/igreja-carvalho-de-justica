import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/providers";
import PwaRegister from "@/components/layout/PwaRegister";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Igreja Carvalho de Justiça",
  description: "Bem-vindo à Igreja Carvalho de Justiça",
  applicationName: "Igreja Carvalho de Justiça",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    shortcut: ["/icons/icon-192.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Igreja Carvalho",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1320",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PwaRegister />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
