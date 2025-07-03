"use client";

import Script from "next/script";

export default function Taggbox() {
  return (
    <>
      <div
        className="mx-auto taggbox w-full h-full overflow-auto pt-10 md:!w-2/3 lg:!w-full"
        data-widget-id="289926"
        {...({ website: "1" } as any)}></div>

      <Script src="https://widget.taggbox.com/embed.min.js" />
    </>
  );
}
