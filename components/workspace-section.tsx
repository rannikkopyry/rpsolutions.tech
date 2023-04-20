import React from 'react';
import { Center } from './center';

export const WorkspaceSection: React.FC = () => (
  <>
    <section className="section">
      <Center className="vertical-center">
        <article className="section__article">
          <h2>
            Miksi panostaisit yrityksesi näkyvyyteen ja <br /> toimiviin
            palveluihin verkossa?
            <br />
          </h2>
          <p>
            Kuvitellaan tilanne, jossa sinun yritykselläsi on verkkosivu
            vuodelta 2001 ja kilpailijalla on upouusi hakukoneoptimoitu sivusto
            sisällönhallintajärjestelmällä sekä verkkokaupalla.
          </p>
          <h4>
            Onko todennäköistä, että asiakas valitsee sinun palvelusi tai
            tuotteesi kilpailijan sijaan?
          </h4>
          <h3>Se on mahdollista, muttei todennäköistä.</h3>
          <p>
            Eletään vuotta 2023 ja maailma on digitaalisempi kuin koskaan.
            Ihmisillä vauvasta vaariin löytyy mobiililaitteita, tietokoneita ja
            tabletteja. Etätyö, etäopiskelu ja ostosten teko etänä ajavat
            ihmisiä yhä enemmän verkkopalveluiden käyttäjiksi. Verkossa on
            tulevaisuus eikä sitä ole järkevää jättää käyttämättä. Panosta siis
            yrityksesi näkyvyyteen internetissä heti tänään ja tee vaikutus
            asiakkaisiisi!
          </p>
        </article>
        <aside className="workspace"></aside>
      </Center>
    </section>

    <style jsx>{`
      .section {
        display: flex;
        position: relative;
        background-color: #d0a699;
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
        padding: 5rem 0;
        text-align: center;
        color: #fff;
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
      }
    `}</style>
  </>
);
