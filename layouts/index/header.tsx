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
            pilvipalveluiden intregrointi sovelluksiin onnistuu mieltä.
           Ota rohkeasti yhteyttä ja luodaan yhdessä jotain vaikuttavaa!
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
          #D0A699 40.28%,
          hsla(210, 100%, 3%, 1) 99.06%
        );
        color: #00000;
        padding-bottom: 1rem;
        min-height: 100%;
        box-sizing: border-box;
        position: relative;
        overflow: hidden; // For colorlines
      }

      // To stay on top of colorlines
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

      .references h3 {
        font-size: 18px;
        letter-spacing: 0.07rem;
      }
      .references {
        margin-bottom: -1rem;
        padding-bottom: 1em;
      }

      .references__images {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
      }

      .references a:hover .logo {
        opacity: 1;
      }

      .logo {
        margin-bottom: 1rem;
        margin-right: 1.6rem;
        opacity: 0.8;
        cursor: pointer;
        transition: opacity 0.2s;
      }

      .cult {
        width: 90px;
        filter: invert(1);
        margin-bottom: 1.3rem;
      }

      .linnunrata {
        width: 160px;
        filter: invert(1);
        margin-bottom: 1.25rem;
      }

      .instagrid {
        width: 170px;
        margin-bottom: 0.9rem;
        filter: invert(1);
      }

      .plan {
        margin-bottom: 1rem;
        margin-right: 1.75rem;
      }

      .sharper {
        width: 200px;
        margin-bottom: 1.4rem;
      }

      .tieto {
        width: 145px;
        margin-bottom: 0.75rem;
      }

      .veracell {
        margin-bottom: 1.35rem;
      }

      .simucube {
        width: 190px;
        filter: invert(1);
        margin-bottom: 1.3rem;
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
        }

        .references h3 {
          text-align: center;
        }

        .references__images {
          justify-content: center;
          align-items: center;
        }
      }
    `}</style>
  </header>
);
