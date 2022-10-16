import React from 'react';
import { Center } from '../../components/center';
import { Base } from '../../layouts/base';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const index = () => (
  <>
    <section className="section">
      <Base>
        <Center className="vertical-center">
          
          <h1>Leasing-verkkosivut</h1>
        </Center>
        <article className="section__article">
            <p>Uusi tapa uudistaa yrityksesi ilme verkossa.</p>
            <strong>Leasing-sivut alkaen 135€/kk</strong>
          </article>
      </Base>
    </section>
    <section className="section2">
      <h2>Häh? Mitkä leasing-sivut?</h2>
      <p>
        Kyllä. Kuulitte oikein, verkkosivusto yritykselle leasing-perjaatteella.{' '}
      </p>
      <h3>Miksi?</h3>
      <p>
        Jos yritys ei halua tai pysty sijoittamaan kerralla tuhansia euroja
        verkkosivustoon, RP-Solutions tarjoaa mahdollisuuden vaihtoehtoisesti
        hankkimaan sivuston kiinteään kuukausihintaan.
      </p>
      <h3>Hinta?</h3>
      <p>Leasing-verkkosivusto alkaen 135€/kk</p>
      <h3>Mitä sisältää?</h3>
      <p>
        Jokainen sivu räätälöidään asiakkaan toiveiden mukaan, mutta jokaiseen
        projektiin sisältyy vähintään:
      </p>
      <div className="items">
      <p className="item"><DoneOutlineIcon /> Verkkosivun suunnittelu ja toteutus </p>
      <p className="item"><DoneOutlineIcon /> Sivuston kattava ylläpito</p>
      <p className="item"><DoneOutlineIcon /> Sähköpostipalvelu</p>
      <p className="item"><DoneOutlineIcon /> SSL-sertifikaatti</p>
      <p className="item"><DoneOutlineIcon /> Hakukoneoptimointi</p>
    </div>
    </section>

    <style jsx>{`

      h3 {
        font-weight: bold;
      }
      .link {
        margin: 5rem;
        text-decoration: none;
      }
      .section {
        display: flex;
        position: relative;
        background: url('/static/skew.svg');
        background-color: #d0a699;
        min-height: 100vh;
        color: #00000;
      }
      .section::before,
      .section::after {
        content: '';
        position: absolute;
        top: 0;
        height: 50px;
        width: 100%;
        z-index: 1;
      }

      .section::after {
        top: auto;
        bottom: 0;
        transform: rotate(180deg);
      }

      :global(.vertical-center) {
        display: flex;
        align-items: center;
      }

      .section__article {
        margin: 5rem;
        padding: 5rem 0;
        text-align: center;
        color: #00000;
      }

      .section2 {
        padding: 5rem;
        background-color: #d0a699;
        min-height: 100vh;
      }

      .items {
        display: grid;
        grid-template-columns: auto auto auto;
      }

      .item {
      }

      aside {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50%;
      }

      @media (max-width: 1000px) {
        .section {
          background-image: none;
          min-height: 0;
        }
        .section__article {
          width: 100%;
          text-align: left;
        }
      }

      @media (max-width: 1000px) {
        aside {
          background: none;
        }
      }

      @media (max-width: 450px) {
        :global(.button) {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
        .section__article {
          margin: 2rem;
        }

        .items {
          display: grid;
          grid-template-columns: 15rem;
        }
      }
    `}</style>
  </>
);

export default index;
