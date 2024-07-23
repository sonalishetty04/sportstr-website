import { Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "sportstr",
  description: "Simplify, Manage and Enhance Your Coaching Operations",
  metadataBase: new URL("https://sportstr-website.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* icon  */}
        <link rel="icon" href="/favicon.png" />
        {/* OG tags */}
        <meta property="og:title" content="sportstr" />
        <meta
          property="og:description"
          content="Simplify, Manage and Enhance Your Coaching Operations"
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://sportstr-website.vercel.app" />
        <meta property="og:type" content="website" />
        {/* end of og tags */}
        {/* Twitter tag */}
        <meta name="twitter:card" content="sportstr" />
        <meta
          name="twitter:title"
          content="Simplify, Manage and Enhance Your Coaching Operations"
        />
        <meta
          name="twitter:description"
          content="Simplify, Manage and Enhance Your Coaching Operations"
        />
        <meta name="twitter:image" content="/logo.svg" />
        <meta
          name="twitter:url"
          content="https://sportstr-website.vercel.app"
        />
        {/* End of twitter tags */}
      </head>
      <body className={cabin.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
