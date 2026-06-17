import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Dotcomimmigration",
  description: "Welcome to Regalis Transforming Equity With Precision And Gentle We provide trusted legal representation with a strategic approach, delivering clear guidance, strong advocacy, and reliable solutions for individuals and businesses seeking justice, protection, and long-term legal confidence. 2300+ Satisfied Clients Contract Case Handling Strategic Legal Advisory Tailored Legal Solutions Court-Prepared Documentation Experienced Legal Team ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body><Header/> {children} <Footer/></body>
    </html>
  );
}
