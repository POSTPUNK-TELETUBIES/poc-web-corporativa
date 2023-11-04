/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import type { PropsWithChildren} from "react";
import { startTransition, StrictMode, useMemo, useState } from "react";
import { hydrateRoot } from "react-dom/client";
import ClientStyleContextData from "./context/ClientStyleContextData";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "utils";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { pacificoDefaultTheme } from "ui-material";

function ClientCacheProvider({ children }: PropsWithChildren) {
  const [cache, setCache] = useState(createEmotionCache);

  const clientStyleContextValue = useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache());
      },
    }),
    [],
  );

  return (
    <ClientStyleContextData.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContextData.Provider>
  );
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientCacheProvider>
        <ThemeProvider theme={pacificoDefaultTheme}>
          <CssBaseline />
          <RemixBrowser />
        </ThemeProvider>
      </ClientCacheProvider>
    </StrictMode>
  );
});
