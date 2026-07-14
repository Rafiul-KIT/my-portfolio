import Head from "next/head";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} app-shell flex min-h-screen flex-col bg-transparent text-slate-900 selection:bg-cyan-100 selection:text-cyan-900`}>
      <Head>
        <title>Md Raffiul Islam &mdash; Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Md Raffiul Islam, a Software Engineer at Karooth IT (BD) Limited building enterprise applications with Angular, TypeScript, Java, and Spring Boot."
        />
      </Head>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <div className="app-scroll flex-1 overflow-x-hidden">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
