import React from 'react';
import Link from 'next/link';

/**
 * RP-Solutions Oy logo which links to front page
 * @param secondary If true, logo colors will be inverted
 */
export const Logo: React.FC<{ secondary?: boolean }> = ({ secondary }) => {
  return (
    <>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="logo">
          <img
            src="../static/RPLOGOKESKITETTY.png"
            alt="RP-Solutions"
            className={
              secondary ? 'logo__image logo__image--secondary' : 'logo__image'
            }
          />
        </a>
      </Link>

      <style jsx>{`
        .logo {
          padding: 0.5rem;
        }

        .logo__image {
          cursor: pointer;
          width: 180px;
          vertical-align: bottom; // To align with navigation text
        }
      `}</style>
    </>
  );
};
