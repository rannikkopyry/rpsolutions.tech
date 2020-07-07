import React from 'react';
import { Layout } from '../../layouts/article/layout';

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>Avoin hakemus</h1>
      <p>
        <strong>Kenelle:</strong> motivoitunut Ohjelmistokehittäjä, UX Designer,
        tai muu alan osaaja
      </p>
      <p>
        <strong>Sijainti:</strong> Tampere
      </p>
      <p>
        <strong>Palkka:</strong> neuvotellaan hakijan mukaan
      </p>
    </article>

    <style jsx>{`
      .header-main {
        display: flex;
      }
      .content {
        width: 60%;
      }
      .image {
        display: flex;
        align-items: center;
        width: 40%;
      }
      @keyframes animate {
        from {
          transform: rotate(-60deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
      .image img {
        width: 100%;
        transform: rotate(-60deg);
        animation: 2s ease-out 0s 1 animate forwards;
      }

      @media (prefers-reduced-motion) {
        .image img {
          animation: none;
        }
      }

      @media (max-width: 1150px) {
        .image {
          display: none;
        }
        .content {
          width: auto;
        }
      }
    `}</style>
  </section>
);

const Page: React.FC = () => (
  <Layout header={<Header />}>
    <section className="content">
      <article className="article">
        <h2>Avoimet työpaikat</h2>
        <ul>
          <li>
            <h3>
              <a href="/careers/senior-developer">
                <span role="img" aria-label="springle">
                  🧙‍♀️
                </span>
                Kokeneempi webbikehittäjä
              </a>
            </h3>
            <p>
              <strong>Kenelle:</strong> Mid-senior tason modernin
              webbikehityksen taitaja, joka on valmis ottamaan vastuuta pienistä
              projekteista ja junnummista työntekijöistä
            </p>
            <p>
              <strong>Palkka:</strong> 3,5-5,5k€
            </p>
          </li>
          <li>
            <h3>
              <a href="/careers/open-application">
                <span role="img" aria-label="check-mark">
                  📄✍️
                </span>{' '}
                Avoin hakemus
              </a>
            </h3>
            <p>
              <strong>Kenelle:</strong> motivoitunut Ohjelmistokehittäjä, UX
              Designer, tai muu alan osaaja
            </p>
          </li>
        </ul>
      </article>
    </section>

    <style jsx>{`
      ul {
        list-style: none;
        padding: 0;
      }
      li a {
        text-decoration: none;
      }
      .content {
        padding: 3rem 0;
        display: flex;
        justify-content: space-between;
      }

      .article {
        width: 65%;
      }

      @media (max-width: 800px) {
        .article {
          width: 100%;
        }

        :global(.article-center) {
          background-color: rgba(255, 255, 255, 0.9);
        }
      }
    `}</style>
  </Layout>
);

export default Page;
