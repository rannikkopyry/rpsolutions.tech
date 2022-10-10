import React from 'react';
import { Center } from '../../components/center';
import { Base } from '../../layouts/base';

 const index = () => (
  <>
    <section className="section">
      <Base>
      <Center className="vertical-center">
        <h1>Leasing-verkkosivut</h1>
        <article className="section__article">
        </article>
        <aside className="workspace"></aside>
      </Center>
      </Base>
    </section>

    <style jsx>{`
      .section {
        display: flex;
        position: relative;
        background-color: #d0a699;
        min-height: 100vh;
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

export default index
