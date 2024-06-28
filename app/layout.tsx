import { type ReactNode } from "react";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { getConfig } from "./config";
import { Providers } from "./providers";

import "./globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get("cookie")
  );
  return (
    <html lang="en">
      <body>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  );
}
