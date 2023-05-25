import { Center } from '../../components/center';
import { SvgTausta } from '../../components/svg-tausta';
import { Nav } from '../../components/navigation/nav';
import React from 'react';

export const Header: React.FC = () => (
  <header className="hero">
    <Nav />
    <Center className="hero__wrapper">
      <section className="hero__content">
        <article className="hero__article">
          <h1 className="title">
            Näkyvyyttä, <br />
            huolettomuutta, <br />
            ja omaa ilmettä.
          </h1>
          <p className="description">
            Tuotamme verkkopalveluita erityisesti pienille ja keskisuurille
            yrityksille. Erityisosaamisemme painottuu arktisen matkailu- ja
            ravintola-alan tarpeisiin. <br />
          </p>
        </article>
        <div className="desc_wrapper"></div>
      </section>
    </Center>

    <style jsx>{`
      .hero {
        display: flex;
        flex-direction: column;
        background-image: url('/static/bg.jpg');
        color: #00000;
        padding-bottom: 1rem;
        min-height: 100%;
        box-sizing: border-box;
        position: relative;
        overflow: hidden; // For colorlines
      }

      .gray {
        background: black;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem;
        text-align: center;
        opacity: 0.7;
      }

      // To stay on top of the svg
      .title,
      .description,
      section {
        z-index: 1;
      }
      .title,
      .description {
        position: relative;
      }
      //

      :global(#colorlines) {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
        min-height: 100%;
      }

      :global(.hero__wrapper) {
        display: flex;
        flex-grow: 1;
      }

      .hero__content {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
      }

      .hero__article {
        z-index: 1;
      }

      .title {
        font-size: 6.5rem;
      }

      .description {
        font-size: 2rem;
        font-weight: bold;
        background-color: white;
        padding: 1rem;
      }

      @media (max-width: 1330px) {
        .description {
          width: 40%;
        }
      }

      @media (max-width: 1150px) {
        :global(#colorlines) {
          opacity: 0.3;
        }
        .description {
          width: 55%;
        }
      }

      @media (max-width: 900px) {
        :global(#colorlines) {
          left: 0;
          right: auto;
          width: 100%;
        }

        .title {
          font-size: 4rem;
        }

        .description {
          font-size: 1.1rem;
          width: 60%;
        }
      }

      @media (max-width: 450px) {
        .title {
          font-size: 2.9rem;
          max-width: 200px;
        }

        .hero__article {
          overflow: visible;
          min-width: 100%;
        }

        .ending {
          color: #000;
        }
      }
    `}</style>
  </header>
);
