import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Showcase } from "../components/Showcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Black Skull</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
        </style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Showcase />
      </main>
    </>
  );
}
