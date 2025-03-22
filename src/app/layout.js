import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Ali Nafisi",
  description: "MS Student in AI",
  icons: {
    icon: "/wave.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
