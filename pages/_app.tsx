import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="app-shell flex h-screen flex-col overflow-hidden bg-transparent text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      <Head>
        <title>Md Raffiul Islam — Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Md Raffiul Islam, a Software Engineer at Karooth IT (BD) Limited building enterprise applications with Angular, TypeScript, Java, and Spring Boot."
        />
      </Head>
      <Navbar />
      <main 
        ref={scrollContainerRef}
        className="app-scroll flex-1 overflow-y-auto overflow-x-hidden scroll-smooth hide-scrollbar"
        style={{ scrollPaddingTop: "6rem" }}
      >
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}
