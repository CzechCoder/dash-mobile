import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <meta
          name="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </QueryClientProvider>
      </Layout>
    </>
  );
}
