import { Center } from '../../components/center';
import { SvgTausta } from '../../components/svg-tausta';
import { Nav } from '../../components/navigation/nav';
import React from 'react';

export const Header: React.FC = () => (
  <header className="hero">
    <Nav />

    <Center className="hero__wrapper">
      <section className="hero__content">
        <SvgTausta />
        <article className="hero__article">
          <h1 className="title">
            Kainuulaista <br />
            ohjelmistokehitystä <br />
            nuorekkaalla otteella.
          </h1>
          <p className="description">
            Olemme Kainuulainen ohjelmistokehitykseen erikoistunut yritys.
            Autamme yrityksesi liiketoiminnan kehittämisessä tuottamalla
            laadukkaita ja persoonallisia verkkopalveluita. Toteutamme
            frontend-, backend- sekä API-kehitystä. Myös nykyaikaisten
            pilvipalveluiden integrointi sovelluksiin onnistuu meiltä. <br />
            <span className="gray">
              Ota rohkeasti yhteyttä ja luodaan yhdessä jotain vaikuttavaa!
            </span>
          </p>
        </article>
      </section>
    </Center>

    <style jsx>{`
      .hero {
        display: flex;
        flex-direction: column;
        background: linear-gradient(
          95.62deg,
          #d0a699 40.28%,
          hsla(210, 100%, 3%, 1) 99.06%
        );
        color: #00000;
        padding-bottom: 1rem;
        min-height: 100%;
        box-sizing: border-box;
        position: relative;
        overflow: hidden; // For colorlines
      }

      .gray {
        color: #666;
        font-size: 1.4rem;
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
        flex-direction: column;
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

      .description {
        font-size: 1.2rem;
        width: 75%;
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

        .description {
          font-size: 1.1rem;
          width: 60%;
        }
      }

      @media (max-width: 450px) {
        .title {
          font-size: 1.8rem;
          max-width: 200px;
        }

        .hero__article {
          overflow: visible;
          min-width: 100%;
        }

        .description {
          font-size: 1rem;
          width: auto;
          opacity: 1.1;
          color: white;
        }
      }
    `}</style>
  </header>
);
