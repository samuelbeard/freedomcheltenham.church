"use client";

import Script from "next/script";

export default function Taggbox() {
  return (
    <>
      <div
        className="container mx-auto taggbox w-full h-full overflow-auto pt-10"
        data-widget-id="289926"
        {...({ website: "1" } as any)}></div>

      <Script src="https://widget.taggbox.com/embed.min.js" />
    </>
  );
}
