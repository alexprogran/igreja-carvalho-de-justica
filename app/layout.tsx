import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Igreja Carvalho de Justiça",
  description: "Bem-vindo à Igreja Carvalho de Justiça",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
