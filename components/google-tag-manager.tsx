import React from 'react';

export const GoogleTagManager = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-LSX79V4J81"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-LSX79V4J81');`
      }}
    />
  </>
);
