import Header from "@/shared/header";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // choose weights you need
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "CV Builder",
  description: "Build professional CVs easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Header />
        <div className="mt-4">{children}</div>
      </body>
    </html>
  );
}
