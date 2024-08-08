import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Right from "@/components/Right";
import Left from "@/components/Left";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "saad's portfolio",
  description: "saad's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className="h-auto w-full bg-[#0f192d] flex flex-row overflow-x-hidden">
        <Left/>
        {children}
        <Right/>
        </div>
        </body>
    </html>
  );
}
