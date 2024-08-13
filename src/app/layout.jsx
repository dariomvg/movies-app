import "./globals.css";
import Menu from "@/components/Menu";
import MoviesProvider from "@/context/MoviesContext";
import '@fontsource/roboto/500.css';

export const metadata = {
  title: "Application of movies, series y TV",
  description: "Application where you can see information and trailers of the latest movies. Plus, series too.",
  icons : {
    icon: "/icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MoviesProvider>
          <Menu />
          {children}
        </MoviesProvider>
      </body>
    </html>
  );
}
