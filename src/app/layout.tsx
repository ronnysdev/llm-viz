"use client";

import React, { useEffect } from "react";
import s from "./layout.module.scss";
import "@/styles/main.css";
import { inject } from "@vercel/analytics";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    inject();
  }, []);

  return (
    <html lang="en" className={s.html}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={s.body}>{children}</body>
    </html>
  );
}

/* <head>
    <link rel="preload" href="/fonts/font-atlas.png" as="image" />
    <link rel="preload" href="/fonts/font-def.json" as="fetch" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&family=Merriweather:ital@0;1" />
</head> */
