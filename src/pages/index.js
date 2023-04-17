import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Showcase } from "../components/Showcase";
import { Staff } from "components/Staff";
import { Sales } from "components/Sales";
import { Blog } from "components/Blog";
import { Goals } from "components/Goals";
import { Benefits } from "components/Benefits";
import { About } from "components/About";
import { Footer } from "components/Footer";
import { ScrollToTopButton } from "components/Buttons/scrollToTopButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Black Skull</title>
        <meta
          name="description"
          content="Black Skull. An e-commerce of nutrition and health products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <ScrollToTopButton />
        <Showcase />
        <Staff />
        <Sales />
        <Blog />
        <Goals />
        <Benefits />
        <About />
        <Footer />
      </main>
    </>
  );
}
