import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import Header from "../components/Header";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Sound Phase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Own your sounds. Music Producers. Content Creators."
        />
        <meta
          name="keywords"
          content="SoundPhase, NFT Marketplace, TikTok, Instagram, Content, Music Producers, Marketplace, Sell beats, Music, Blockchain"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </ThirdwebProvider>
  );
}

export default MyApp;
