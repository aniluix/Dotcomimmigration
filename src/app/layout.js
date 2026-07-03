import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Manrope, Open_Sans } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Dot Com Immigration",
  description: "Welcome to Regalis Transforming Equity With Precision And Gentle We provide trusted legal representation with a strategic approach, delivering clear guidance, strong advocacy, and reliable solutions for individuals and businesses seeking justice, protection, and long-term legal confidence. 2300+ Satisfied Clients Contract Case Handling Strategic Legal Advisory Tailored Legal Solutions Court-Prepared Documentation Experienced Legal Team ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${openSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
