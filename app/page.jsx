import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../facebook_clone/redux/app/store";
import { persistor } from "../facebook_clone/redux/app/store";
export default function Home({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
