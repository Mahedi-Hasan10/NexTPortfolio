import "./globals.css";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";


export const metadata = {
  title: "Mahedi Hasan",
  description: "This is Mahedi Hasan Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <section  className="flex flex-col items-center justify-between lg:p-[69px] md:p-[30px] p-0 custom-font-family">
          <div className="border border-[#1E2D3D] w-[100%] bg-[#011627] flex flex-col justify-between">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
          </div>
        </section>
      </body>
    </html>
  );
}
