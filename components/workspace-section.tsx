import React from 'react';
import { Center } from './center';
import Link from 'next/link';
import { Button } from './button';

export const WorkspaceSection: React.FC = () => (
  <>
    <section className="section">
      <Center className="vertical-center">
        <article className="section__article">
          <h2>
            Kehittäjä,
            <br /> suunnitteleeko tiimisi uutta webbiprojektia?
          </h2>
          <p>
            React ja ekosysteemi sen ympärillä kehittyy hurjaa vauhtia. Mitkä
            työkalut ovat relevantteja nyt ja kahden vuoden kuluttua? Millä
            kattauksella maaliin päästään varmasti?
          </p>

          <p>
            Vältä yleisimmät sudenkuopat ja ota meidät mukaan
            suunnitteluvaiheeseen.
          </p>

          <Link href="/training">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Button>Lue lisää</Button>
          </Link>
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
