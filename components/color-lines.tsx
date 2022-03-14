import React from 'react';
import { useVivusRef } from '../hooks/useVivus';

export function ColorLines() {
  const colorlines = useVivusRef();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="163"
      height="163"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMinYMin slice"
      id="colorlines"
      ref={colorlines}
      style={{ visibility: 'hidden' }}
      aria-hidden={true}
    >
      <rect fill="#D0A699" width="200" height="200" />
      <g fillOpacity="1">
        <polygon fill="#000000" points="100 57.1 64 93.1 71.5 100.6 100 72.1" />
        <polygon
          fill="#000000"
          points="100 57.1 100 72.1 128.6 100.6 136.1 93.1"
        />
        <polygon
          fill="#000000"
          points="100 163.2 100 178.2 170.7 107.5 170.8 92.4"
        />
        <polygon
          fill="#000000"
          points="100 163.2 29.2 92.5 29.2 107.5 100 178.2"
        />
        <path
          fill="#000000"
          d="M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z"
        />
        <polygon
          fill="#ababab"
          points="0 157.1 0 172.1 28.6 200.6 36.1 193.1"
        />
        <polygon fill="#d4d4d4" points="70.7 200 70.8 192.4 63.2 200" />
        <polygon
          fill="#FFFFFF"
          points="27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5"
        />
        <polygon
          fill="#d4d4d4"
          points="200 157.1 164 193.1 171.5 200.6 200 172.1"
        />
        <polygon fill="#ababab" points="136.7 200 129.2 192.5 129.2 200" />
        <polygon
          fill="#FFFFFF"
          points="172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200"
        />
        <polygon
          fill="#ababab"
          points="129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0"
        />
        <polygon
          fill="#FFFFFF"
          points="200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2"
        />
        <polygon fill="#d4d4d4" points="63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0" />
        <polygon fill="#FFFFFF" points="0 63.2 63.2 0 27.8 0 0 27.8" />
      </g>
    </svg>
  );
}
