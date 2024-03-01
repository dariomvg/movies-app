import { Montserrat } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import MoviesProvider from "@/context/MoviesContext";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "App Movies...",
  description: "App from movies, series...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MoviesProvider>
          <Menu />
          {children}
          
        </MoviesProvider>
      </body>
    </html>
  );
}
