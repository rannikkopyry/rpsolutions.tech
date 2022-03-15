import React, { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import { Center } from '../center';


export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <Center className="interested">
        <h3>Kiinnostuitko?</h3>
        <p>
          Jos sinulla on kysyttävää tai olet kiinnostunut palveluistamme, ota
          rohkeasti yhteyttä!
        </p>
      </Center>
      <Center className="contacts">
        <div className="company-info">
          <address className="location">
            <div>RP-Solutions Oy</div>
            <div>3229018-8</div>
            <div>+358&nbsp;45&nbsp;268&nbsp;4828</div>
            <div>pyry.rannikko1@gmail.com</div>
            <br />

            <div>88610&nbsp;Vuokatti</div>
            <div>Finland</div>

            <br />

            <div><p>© 2022 - Kaikki oikeudet pidätetään </p></div>
          </address>
        </div>
      </Center>

      <style jsx>{`
        :global(.contacts) {
          justify-content: center;
          display: flex;
        }
        :global(.interested) {
          text-align: center;
          border-bottom: 1px solid #8a8a8a;
          padding-bottom: 3rem;
          margin-bottom: 4rem !important;
        }

        :global(.grid) {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;

          grid-gap: 2rem;
        }

        .logo {
          width: 150px;
          filter: invert(1);
          margin-bottom: 2rem;
        }
        .footer {
          background: linear-gradient(
            95.62deg,
            #d0a699 40.28%,
            hsla(210, 100%, 3%, 1) 99.06%
          );
          padding: 3rem 0;
          color: #00000;
        }

        .company-info {
          margin-right: 2em;
          text-align: center;
        }

        address {
          display: flex;
          flex-direction: column;
          font-style: normal;
          line-height: 1.75rem;
        }

        @media (max-width: 1300px) {
          :global(.interested) {
            padding-bottom: 2rem !important;
          }
        }

        @media (max-width: 1000px) {
          :global(.contacts) {
            display: block;
          }
          .company-info {
            text-align: center;
            margin-right: 0;
          }
          .location {
            margin-bottom: 1rem;
          }
          :global(.grid) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            justify-items: center;
          }
          .logo {
            margin-bottom: 2rem;
          }

          :global(.grid) {
            grid-template-columns: 1fr 1fr;
            justify-items: center;
          }
          .logo {
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 750px) {
          :global(.grid) {
            display: block;
          }
        }
      `}</style>
    </footer>
  );
};
