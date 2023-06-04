import Layout from "@/common/components/Layout";
import "@/styles/globals.css";
import ProtectedRoute from "@/utils/ProtectedRoute";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProtectedRoute>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProtectedRoute>
  );
}
