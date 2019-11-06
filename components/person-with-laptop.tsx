import React, { useEffect } from 'react';
import Vivus from 'vivus';

export function PersonWithLaptop() {
  useEffect(() => {
    new Vivus('person', {
      type: 'scenario', // allows adding data-start, data-duration to individual paths
      duration: 200,
      animTimingFunction: Vivus.EASE_OUT
    });
  }, []);

  return (
    <div className="container">
      <svg
        id="person"
        xmlns="http://www.w3.org/2000/svg"
        width="381"
        height="478"
        viewBox="0 0 381 478"
      >
        <svg
          id="person"
          width="381"
          height="478"
          viewBox="0 0 381 478"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M288.531 242.114C294.416 245.953 306.03 249.364 329.856 250.629C354.612 251.142 375.425 227.801 376.067 196.838C378.186 129.381 308.317 115.11 270.85 38.9803C253.639 3.9728 231.874 4.38598 226.396 4.56054C214.429 4.96076 197.24 14.0414 196.898 30.5312C196.798 33.4225 197.335 36.3004 198.47 38.9616C199.605 41.6228 201.31 44.0024 203.465 45.9324"
            stroke="white"
            strokeWidth="1.80058"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M216.131 80.5934C218.583 86.7171 223.715 97.017 225.223 108.74"
            stroke="#E2C5C5"
            strokeWidth="1.80058"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M113.462 315.498L113.462 315.497C113.599 315.314 113.775 314.93 113.946 314.277C114.113 313.645 114.256 312.834 114.372 311.859C114.603 309.912 114.714 307.382 114.694 304.464C114.653 298.631 114.087 291.318 112.942 284.157C111.796 276.985 110.078 270.021 107.756 264.855C106.595 262.27 105.305 260.186 103.899 258.75C102.501 257.322 101.039 256.582 99.4975 256.55C98.0891 256.521 96.3478 257.568 94.2985 259.965C92.2902 262.314 90.1596 265.754 87.9546 270.035C83.5491 278.587 78.9337 290.314 74.4565 302.897C69.982 315.473 65.6581 328.866 61.8308 340.739L61.6426 341.323C57.9598 352.748 54.7393 362.739 52.3078 369.128C52.7576 370.268 53.6512 371.619 54.8857 373.042C56.2169 374.576 57.8971 376.141 59.714 377.549C61.5312 378.957 63.4666 380.194 65.3022 381.082C66.9285 381.87 68.4232 382.357 69.6614 382.483C81.9374 362.886 108.731 321.867 113.462 315.498Z"
            stroke="white"
            strokeWidth="1.80058"
          />
          <path
            d="M198.552 241.531C198.769 243.517 199.12 245.486 199.604 247.424C223.372 258.074 286.074 253.251 287.949 246.23C289.618 240.04 299.841 115.287 259.032 98.9163"
            stroke="#E2C5C5"
            strokeWidth="1.80058"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M236.575 100.079C205.617 114.824 197.428 181.463 197.505 220.798"
            stroke="white"
            strokeWidth="1.80058"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M246.531 103.534C252.902 102.723 260.013 100.601 259.296 99.3972C252.522 87.3704 251.266 74.9537 250.237 67.9662"
            stroke="#E2C5C5"
            strokeWidth="1.80058"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M232.05 87.3133C233.288 90.4799 235.524 96.2533 236.575 100.1"
            stroke="#E2C5C5"
            strokeWidth="1.80058"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M269.613 177.845C269.969 180.849 269.438 184.548 269.428 186.81C269.318 199.055 268.458 212.724 260.9 222.869C257.936 226.842 253.103 230.631 248.496 230.464C241.163 233.193 228.925 236.253 228.925 236.253L210.408 239.904C210.408 239.904 179.185 244.803 163.857 244.053C158.747 243.803 153.574 243.12 148.459 243.158C145.505 243.168 140.805 244.007 138.018 242.941C137.232 242.637 137.485 240.841 137.643 240.196C138.341 237.761 140.753 236.082 142.864 235.045C147.883 232.7 150.66 234.27 155.77 234.52C159.945 234.679 164.958 232.622 172.289 229.964C180.928 226.758 190.805 222.928 199.579 220.157C209.586 216.978 219.814 213.588 229.617 209.83C231.588 209.114 233.597 208.507 235.634 208.009C234.816 202.757 234.396 197.45 234.378 192.135C234.282 186.37 234.335 180.319 235.245 174.647"
            stroke="#E2C5C5"
            strokeWidth="1.80058"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M230.784 155.99C229.5 163.715 229.249 169.92 229.914 171.907C234.324 174.592 258.842 183.817 277.028 175.333C282.877 160.759 279.004 114.79 261.135 111.466C256.477 110.649 252.391 112.07 248.817 114.899"
            stroke="#E2C5C5"
            strokeWidth="1.80058"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M239.597 84.9701C238.317 85.74 236.938 86.3318 235.498 86.7293C228.911 88.5954 221.917 86.0875 216.132 80.5646"
            stroke="#E2C5C5"
            strokeWidth="1.80058"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M240.013 54.8305C244.847 56.0629 249.79 56.8192 254.77 57.0888C255.6 58.1995 256.052 59.5471 256.059 60.9335C255.998 62.4807 255.396 63.9572 254.359 65.1069C253.322 66.2566 251.915 67.0068 250.382 67.2273L250.237 67.9447"
            stroke="#E2C5C5"
            strokeWidth="1.80058"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M216.131 80.5934C211.101 75.821 207.011 68.7989 204.85 60.448C202.59 51.3243 202.991 42.3998 205.659 35.3233C206.979 36.633 208.343 37.9003 209.752 39.111"
            stroke="white"
            strokeWidth="1.80058"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M182.213 245.406C169.251 245.137 122.454 243.807 113.885 243.629L182.213 245.406Z"
            fill="#FFC88E"
          />
          <path
            d="M190.192 246.22C176.511 245.936 129.298 243.805 121.449 243.642C115.594 234.156 88.3899 184.245 86.5953 180.462"
            stroke="#E2C5C5"
            strokeWidth="4.17014"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100.374 257.666L100.375 257.687L100.374 257.708C98.8881 289.681 113.548 332.012 129.266 366.465C137.114 383.668 145.205 398.862 151.631 409.755C154.845 415.203 157.635 419.564 159.766 422.558C160.833 424.058 161.721 425.196 162.405 425.953C162.749 426.333 163.022 426.595 163.224 426.756C163.302 426.817 163.358 426.855 163.395 426.877C164.447 426.88 165.925 426.585 167.629 426.031C169.367 425.465 171.275 424.651 173.096 423.689C174.918 422.726 176.631 421.628 177.988 420.501C179.27 419.437 180.161 418.408 180.579 417.505C180.032 413.134 178.327 405.7 176.065 396.775C174.228 389.526 172.035 381.336 169.822 373.072C169.266 370.995 168.709 368.913 168.155 366.84C165.403 356.528 162.751 346.441 160.868 338.311C159.926 334.246 159.174 330.657 158.697 327.767C158.227 324.915 158.004 322.632 158.184 321.244L158.316 320.225L159.309 320.49C160.107 320.703 161.781 320.959 164.513 321.232C167.223 321.503 170.923 321.786 175.737 322.066C185.363 322.625 199.423 323.169 218.895 323.572C238.186 323.972 256.086 318.117 269.222 308.467C282.361 298.815 290.68 285.417 290.985 270.714C291.236 258.635 289.66 252.081 287.063 248.48C286.003 249.167 284.51 249.776 282.739 250.323C280.448 251.03 277.565 251.67 274.257 252.225C267.637 253.335 259.248 254.119 250.354 254.41C232.675 254.989 212.805 253.631 200.834 248.919C186.103 248.011 170.416 247.143 159.993 246.927C148.316 246.684 133.233 247.073 121.089 248.774C115.009 249.625 109.725 250.798 105.985 252.355C104.114 253.135 102.686 253.988 101.738 254.899C100.802 255.799 100.374 256.713 100.374 257.666Z"
            stroke="white"
            strokeWidth="1.80058"
            data-start="0"
            data-duration="150"
          />
          <path
            d="M179.611 417.431L195.055 444.615L141.164 472.334L170.728 431.006L167.162 424.449"
            stroke="#303030"
            strokeWidth="1.80058"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.8447 381.636L54.3454 409.33L1.87453 379.002L52.6242 381.509L56.2106 374.963"
            stroke="#474747"
            strokeWidth="1.80058"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="1"
            y="3"
            width="378"
            height="471"
          >
            <path
              d="M289.536 242.114C295.421 245.953 307.035 249.364 330.861 250.629C355.617 251.142 376.43 227.801 377.072 196.838C379.191 129.381 309.322 115.11 271.855 38.9803C254.643 3.97283 232.879 4.38601 227.401 4.56057C215.434 4.96079 198.244 14.0414 197.903 30.5312C197.803 33.4226 198.34 36.3004 199.475 38.9616C200.61 41.6228 202.315 44.0024 204.47 45.9324"
              stroke="white"
              strokeWidth="1.80058"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M217.136 80.5934C219.588 86.7172 224.72 97.017 226.227 108.74"
              stroke="#E2C5C5"
              strokeWidth="1.80058"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M114.467 315.498L114.467 315.497C114.604 315.314 114.78 314.93 114.951 314.277C115.118 313.645 115.261 312.834 115.377 311.859C115.608 309.912 115.719 307.382 115.699 304.464C115.658 298.631 115.092 291.318 113.947 284.157C112.8 276.985 111.082 270.021 108.761 264.855C107.6 262.27 106.31 260.186 104.904 258.75C103.506 257.322 102.044 256.582 100.502 256.55C99.0939 256.521 97.3526 257.568 95.3034 259.965C93.295 262.314 91.1645 265.755 88.9595 270.035C84.554 278.587 79.9386 290.314 75.4614 302.897C70.9869 315.473 66.663 328.866 62.8357 340.739L62.6474 341.323C58.9647 352.748 55.7442 362.739 53.3127 369.128C53.7625 370.268 54.656 371.619 55.8906 373.042C57.2218 374.576 58.902 376.141 60.7189 377.549C62.5361 378.957 64.4715 380.194 66.3071 381.082C67.9333 381.87 69.4281 382.357 70.6663 382.483C82.9422 362.886 109.736 321.867 114.467 315.498Z"
              stroke="white"
              strokeWidth="1.80058"
            />
            <path
              d="M199.557 241.531C199.774 243.517 200.125 245.486 200.609 247.424C224.377 258.074 287.079 253.251 288.953 246.23C290.623 240.04 300.846 115.287 260.037 98.9164"
              stroke="#E2C5C5"
              strokeWidth="1.80058"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M237.58 100.079C206.622 114.824 198.433 181.463 198.51 220.798"
              stroke="white"
              strokeWidth="1.80058"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M247.536 103.534C253.907 102.723 261.018 100.601 260.301 99.3973C253.527 87.3704 252.271 74.9538 251.242 67.9663"
              stroke="#E2C5C5"
              strokeWidth="1.80058"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M233.054 87.3134C234.293 90.4799 236.529 96.2534 237.58 100.1"
              stroke="#E2C5C5"
              strokeWidth="1.80058"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M270.618 177.845C270.974 180.849 270.443 184.548 270.433 186.81C270.323 199.055 269.463 212.724 261.905 222.869C258.941 226.842 254.108 230.631 249.501 230.464C242.168 233.193 229.93 236.253 229.93 236.253L211.413 239.904C211.413 239.904 180.19 244.803 164.862 244.053C159.752 243.803 154.579 243.12 149.464 243.158C146.51 243.168 141.81 244.007 139.023 242.941C138.237 242.637 138.49 240.841 138.647 240.196C139.346 237.761 141.758 236.082 143.869 235.045C148.888 232.7 151.665 234.27 156.775 234.52C160.95 234.679 165.963 232.622 173.294 229.964C181.933 226.758 191.81 222.928 200.584 220.157C210.591 216.978 220.819 213.588 230.622 209.83C232.593 209.114 234.602 208.507 236.639 208.009C235.821 202.757 235.401 197.45 235.383 192.135C235.287 186.37 235.34 180.319 236.25 174.647"
              stroke="#E2C5C5"
              strokeWidth="1.80058"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M231.789 155.99C230.505 163.715 230.254 169.92 230.918 171.907C235.329 174.592 259.847 183.817 278.033 175.334C283.882 160.759 280.009 114.79 262.14 111.466C257.481 110.649 253.396 112.07 249.822 114.899"
              stroke="#E2C5C5"
              strokeWidth="1.80058"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M240.602 84.9701C239.322 85.74 237.943 86.3319 236.503 86.7293C229.916 88.5954 222.922 86.0875 217.137 80.5647"
              stroke="#E2C5C5"
              strokeWidth="1.80058"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M241.018 54.8306C245.852 56.0629 250.794 56.8193 255.775 57.0888C256.605 58.1995 257.057 59.5471 257.064 60.9336C257.002 62.4807 256.401 63.9573 255.364 65.107C254.326 66.2567 252.919 67.0069 251.387 67.2273L251.242 67.9447"
              stroke="#E2C5C5"
              strokeWidth="1.80058"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M217.136 80.5935C212.106 75.8211 208.016 68.7989 205.855 60.448C203.595 51.3243 203.996 42.3998 206.664 35.3233C207.984 36.633 209.348 37.9003 210.756 39.111"
              stroke="white"
              strokeWidth="1.80058"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M183.218 245.406C170.256 245.137 123.459 243.807 114.89 243.629L183.218 245.406Z"
              fill="#FFC88E"
            />
            <path
              d="M191.197 246.22C177.516 245.936 130.303 243.805 122.454 243.642C116.599 234.156 89.3948 184.245 87.6003 180.462"
              stroke="#E2C5C5"
              strokeWidth="4.17014"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M101.379 257.666L101.379 257.687L101.378 257.708C99.893 289.681 114.553 332.012 130.271 366.465C138.119 383.668 146.21 398.862 152.636 409.755C155.85 415.203 158.64 419.564 160.77 422.558C161.838 424.058 162.726 425.196 163.41 425.953C163.754 426.333 164.026 426.595 164.229 426.756C164.307 426.817 164.363 426.855 164.4 426.877C165.452 426.88 166.93 426.585 168.633 426.031C170.372 425.465 172.28 424.651 174.101 423.689C175.923 422.726 177.636 421.628 178.993 420.501C180.275 419.437 181.166 418.408 181.584 417.505C181.037 413.134 179.332 405.7 177.07 396.775C175.233 389.526 173.04 381.336 170.827 373.072C170.271 370.995 169.714 368.913 169.16 366.84C166.408 356.528 163.756 346.441 161.873 338.311C160.931 334.246 160.179 330.657 159.702 327.767C159.232 324.915 159.009 322.632 159.189 321.244L159.321 320.225L160.314 320.49C161.112 320.703 162.786 320.959 165.518 321.232C168.228 321.503 171.928 321.786 176.741 322.066C186.368 322.625 200.428 323.169 219.9 323.572C239.191 323.972 257.091 318.117 270.227 308.467C283.366 298.815 291.685 285.417 291.99 270.714C292.24 258.635 290.665 252.081 288.068 248.48C287.008 249.167 285.515 249.776 283.744 250.323C281.453 251.03 278.57 251.67 275.262 252.225C268.642 253.335 260.253 254.119 251.359 254.41C233.68 254.989 213.81 253.631 201.839 248.919C187.108 248.011 171.421 247.143 160.998 246.927C149.321 246.684 134.238 247.073 122.094 248.774C116.013 249.625 110.73 250.798 106.99 252.356C105.119 253.135 103.691 253.988 102.743 254.899C101.807 255.799 101.379 256.713 101.379 257.666Z"
              stroke="white"
              strokeWidth="1.80058"
            />
            <path
              d="M180.616 417.431L196.059 444.615L142.169 472.334L171.733 431.006L168.166 424.449"
              stroke="#303030"
              strokeWidth="1.80058"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M69.8496 381.636L55.3503 409.33L2.87944 379.002L53.6291 381.509L57.2155 374.963"
              stroke="#474747"
              strokeWidth="1.80058"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
        </svg>
      </svg>

      <style jsx>{`
        @keyframes northern-lights {
          from {
            stroke: #ebb9f0;
          }
          50% {
            stroke: #b3ddf4;
          }
          75% {
            stroke: #baf0b9;
          }
          100% {
            stroke: #ebb9f0;
          }
        }
        .container {
          position: relative;
          display: inline-block;
        }
        #person path {
          fill: none;
          animation: northern-lights 20s infinite;
        }
      `}</style>
    </div>
  );
}
