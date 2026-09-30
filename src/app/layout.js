import { Great_Vibes, Lora, Inter } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "You're Invited - Wedding of The Year",
  description: "We can't wait to celebrate with you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${greatVibes.variable} ${lora.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
