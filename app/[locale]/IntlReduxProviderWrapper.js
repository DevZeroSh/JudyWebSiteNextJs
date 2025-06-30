"use client";

import { NextIntlClientProvider } from "next-intl";
import { Provider } from "react-redux";
import { store } from "@/RTK/store";

export default function IntlReduxProviderWrapper({ locale, messages, children }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Provider store={store}>
        {children}
      </Provider>
    </NextIntlClientProvider>
  );
}
