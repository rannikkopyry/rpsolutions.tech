import React from 'react';
import { Center } from '../center';
import { BurgerMenu } from './burger';
import { items } from './items';
import { Logo } from '../logo';
import { ActiveLink } from '../active-link';

export const UkraineBar = () => (
  <Center className="nav">
    <nav>
      <div className="text">
        RP-Solutions Oy tuomitsee Venäjän hyökkäyksen Ukrainaan.
      </div>
      <div className="kuinka-voin-auttaa">
        <a href="https://war.ukraine.ua/support-ukraine/">
          Kuinka voin auttaa Ukrainaa?
        </a>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          background-color: #ffd500;
          align-items: center;
          font-size: 17px;
          padding: 0.7rem;
          font-weight: 500;
          height: 3rem;
          margin-top: 0.313rem;
          border: 0.313rem solid #005bbb;
          box-shadow: 0 0 0 0.313rem #ffd500;
          // To stay on top of colorlines
          z-index: 2;
          position: relative;
        }

        a {
          text-decoration: none;
          padding: 0 0.5rem;
        }

        .text {
          margin-left: 2rem;
          color: #005bbb;
        }

        .kuinka-voin-auttaa {
          text-decoration: underline;
        }

        @media (max-width: 1150px) {
          nav {
            display: block;
          }

          .nav__links {
            float: right;
          }
        }

        @media (max-width: 900px) {
          .nav__links {
            display: none;
          }

          :global(.burger) {
            display: block;
          }

          nav {
            height: 4rem;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  </Center>
);
