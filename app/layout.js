import { Inter } from "next/font/google";
import "./globals.css";
import { getDocuments } from "@/lib/doc";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocuCraft - A documentation website",
  description: "A documentation website",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments()



  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
