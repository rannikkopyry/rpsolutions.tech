import React, { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import { Center } from '../center';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <Center className="interested">
        <h2>Kiinnostuitko?</h2>
        <p>
          Jos sinulla on kysyttävää tai olet kiinnostunut palveluistamme, ota
          rohkeasti yhteyttä!
        </p>
      </Center>
      <Center className="contacts">
        <div className="company-info">
          <address className="location">
            <h3>RP-Solutions Oy</h3>
            <div>3229018-8</div>
            <div>+358&nbsp;45&nbsp;268&nbsp;4828</div>
            <div>pyry.rannikko1@gmail.com</div>
            <div>88610&nbsp;Vuokatti</div>
            <div>Finland</div>

            <br />
          </address>
          <div className="company-invoicing">
            <address>
              <h3>Verkkolaskutus</h3>
              <div>Verkkolaskuosoite: 003732290188</div>
              <div>Operaattori: Apix Messaging Oy</div>
              <div>Operaattoritunnus: 003723327487</div>
            </address>
            <br />
            <a href='https://koodiasuomesta.fi/' className="logo">
              <img
              height={250}
                src="../static/koodiasuomesta_white.png"
                alt="RP-Solutions"
              />
            </a>
          </div>
          <div className="copyright">
            <p>© 2022 - Kaikki oikeudet pidätetään </p>
          </div>
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
        .footer {
          background: linear-gradient(
            95.62deg,
            #d0a699 40.28%,
            hsla(210, 100%, 3%, 1) 99.06%
          );
          padding: 3rem 0;
          color: #00000;
        }
        .copyright {
          align-items: center;
          text-align: center;
        }

        .company-info {
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
