import React, { useEffect, useRef } from 'react';
import Vivus from 'vivus';

export function ColorLines() {
  const colorlines = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!colorlines.current) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      colorlines.current.style.visibility = 'visible';
      return;
    }

    // Ref is actually SVGSVGElement but Vivus only accepts HTMLElement
    new Vivus((colorlines.current as unknown) as HTMLElement, {
      duration: 500,
      type: 'scenario', // allows adding data-start, data-duration to individual paths
      start: 'autostart',
      animTimingFunction: Vivus.EASE_OUT,
      onReady: vivus => {
        (vivus as Vivus & { el: HTMLElement }).el.style.visibility = 'visible';
      }
    });
  }, []);

  return (
    <svg
      // width="710"
      // height="1053"
      viewBox="0 0 710 1053"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin slice"
      id="colorlines"
      ref={colorlines}
      style={{ visibility: 'hidden' }}
      aria-hidden={true}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M370.421 395.285C324.699 395.285 287.634 432.35 287.634 478.072C287.634 523.794 324.699 560.859 370.421 560.859C416.143 560.859 453.208 523.794 453.208 478.072"
          stroke="#D94681"
          strokeWidth="2"
        />
        <path
          d="M369.284 352.527C299.821 352.527 254.2 408.837 254.2 478.3C254.2 547.762 299.821 594.975 369.284 594.975C438.746 594.975 478.226 587.336 478.226 517.874"
          stroke="#5BA7FC"
          strokeWidth="2"
        />
        <path
          d="M-116.067 756.226C-116.067 825.689 -54.6593 578.371 117.283 630.454C205.5 657.176 210.305 730.754 210.305 730.754"
          stroke="#5BA7FC"
          strokeWidth="2"
        />
        <path
          d="M9.9329 583.673C-79.8179 583.673 251.926 425.832 281.492 633.708C295.813 734.394 387.792 767.896 477.543 767.896C567.294 767.896 630.674 714.189 640.16 615.286C651.554 496.495 654.625 283.568 817.106 427.127"
          stroke="#653DDD"
          strokeWidth="2"
        />
        <path
          d="M-72.2237 613.455C-178.274 613.455 213.716 450.013 248.653 665.266C265.574 769.524 374.257 804.216 480.307 804.216C586.357 804.216 672.457 749.073 672.457 646.19C668.818 576.414 683.601 457.795 771.846 541.526"
          stroke="#81EEB8"
          strokeWidth="2"
        />
        <path
          d="M-88.599 653.484C-194.649 653.484 197.341 490.042 232.277 705.295C249.199 809.553 357.882 844.245 463.932 844.245C569.982 844.245 698.385 778.369 698.385 675.486C694.746 605.711 687.24 488.954 775.486 572.685"
          stroke="#F6CC2C"
          strokeWidth="2"
        />
        <path
          d="M718.054 196.938C816.424 220.157 685.627 484.032 506.53 374.437C419.784 321.355 305.373 263.37 214.626 394.601C115.119 538.5 -128.759 644.049 -52.1575 707.327"
          stroke="#81EEB8"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M202.572 290.209C166.55 342.302 107.673 388.94 51 430.244"
          stroke="#EC70F7"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M611.407 300.792C658.623 293.886 692.545 276.828 715.753 254"
          stroke="#EC70F7"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M718.054 165.097C816.424 188.316 685.627 452.191 506.53 342.596C419.784 289.514 300.597 221.749 209.85 352.98C110.259 497 -175.384 600.836 -98.782 664.114"
          stroke="#F6CC2C"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M717.897 132.737C816.267 155.956 685.471 419.831 506.373 310.236C419.627 257.153 300.441 189.389 209.693 320.62C109.853 465 -175.54 568.476 -98.9385 631.753"
          stroke="#5BA7FC"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M370.193 533.566C400.967 533.566 425.915 508.618 425.915 477.844C425.915 447.069 400.967 422.122 370.193 422.122C339.419 422.122 314.471 447.069 314.471 477.844"
          stroke="#81EEB8"
          strokeWidth="2"
        />
        <circle
          cx="370.193"
          cy="477.844"
          r="24.6552"
          transform="rotate(90 370.193 477.844)"
          stroke="#F6CC2C"
          strokeWidth="2"
        />
        <circle
          cx="475.604"
          cy="682.97"
          r="13.1469"
          transform="rotate(90 475.604 682.97)"
          stroke="#81EEB8"
          strokeWidth="2.49858"
        />
        <path
          d="M454.118 1055.17C441.631 1055.17 431.509 1045.05 431.509 1032.56C431.509 1020.07 441.631 1009.95 454.118 1009.95C466.604 1009.95 476.726 1020.07 476.726 1032.56C476.726 1045.05 466.604 1055.17 454.118 1055.17Z"
          stroke="#81EEB8"
          strokeWidth="2"
        />
        <path
          d="M383.845 -120.769C412.405 -160.845 354.733 -5.45846 433.289 95.1168C505.148 187.118 495.236 236.226 546.863 228.545C598.489 220.865 681.439 226.573 663.974 161.086C646.51 95.5996 536.297 100.133 537.548 185.496C538.799 270.859 511.437 380.047 610.372 509.458C709.307 638.87 740.921 983.664 740.921 983.664"
          stroke="#81EEB8"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M406.488 -105.069C445.064 -159.229 314.093 -41.4215 377 68C455.633 204.777 480.76 265.373 550.5 255C620.24 244.627 721.102 247.008 697.5 158.5C673.898 69.9923 514.51 76 514.51 192.561C514.51 309.121 490.189 423.007 588.294 533.555C686.4 644.103 666.676 1167.89 666.676 1167.89"
          stroke="#E65590"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M342.487 -132.765C396.732 -194.64 252.625 -60.861 330.852 56.8592C428.635 204.009 423.56 298.811 593 271.5C687.792 256.221 746.424 259 714 142.5C681.576 26 481.585 77.3572 487.329 184.679C493.073 292 455.015 451.675 580.123 568.82C654.935 638.87 623.586 1261.15 623.586 1261.15"
          stroke="#F6CC2C"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M270.5 1105C343.5 842.5 228.99 773.689 167.5 806C79.2545 852.37 112.5 728.851 42.9998 762.926C-26.5001 797 -72.939 913.587 36.5 1096.5"
          stroke="#5BA7FC"
          strokeWidth="2"
        />
        <path
          d="M227.351 1142.05C300.351 879.549 216.341 821.239 154.851 853.549C66.6054 899.92 99.8506 776.4 30.3507 810.475C-39.1492 844.549 -85.5881 961.136 23.8508 1144.05"
          stroke="#E65590"
          strokeWidth="2"
        />
        <path
          d="M197.351 1195.05C270.351 932.549 186.341 874.239 124.851 906.549C36.6054 952.92 69.8506 829.4 0.350692 863.475C-69.1492 897.549 -115.588 1014.14 -6.14917 1197.05"
          stroke="#81EEB8"
          strokeWidth="2"
        />
        <path
          d="M-45.3006 -27.7383C70.4407 132.662 -86.5655 243.321 86.5828 293.395C122.611 303.815 158.813 300.404 174.926 227.27C198.05 122.314 268.326 291.291 318.369 207.925C318.369 207.925 407.251 79.5229 153.704 43.1137C-99.8431 6.70456 101.211 15.4877 29.524 -52.6632C-42.1627 -120.814 83.3267 -180.243 83.3267 -180.243"
          stroke="#E65590"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M126.775 56.6991C132.304 57.4824 131.292 57.3869 136.489 58.2335C346.868 92.5074 288.874 177.056 288.874 177.056C243.161 254.537 180.365 98.3288 158.916 195.681C143.97 263.516 111.732 264.673 78.6119 257.376C-4.43828 239.078 39.1864 77.2938 123.587 56.2451C123.587 56.2451 231.936 31.1434 246.968 -48.4128C262.001 -127.969 423.519 -71.4773 423.519 -71.4773"
          stroke="#5BA7FC"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M123.232 79.0364C78.5004 90.1921 20.3672 212.419 96.973 230.316C136.493 239.548 126.146 186.184 141.957 152.937C169.972 94.0264 232.717 203.777 254.361 158.36C276.005 112.943 243.108 96.0141 121.545 78.7939C-0.0190752 61.5737 107.136 49.137 72.9153 15.859C-108.812 -183.955 143.795 -259.801 143.795 -259.801"
          stroke="#653DDD"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M-76.715 1085.1C-173.672 1085.99 321.265 1187.68 344.498 1020.51C359.008 916.113 395.899 900.65 459.126 900.65C522.353 900.65 554.423 936.13 554.423 1030.06C554.423 1123.99 679.208 1124.77 759.116 1040.3"
          stroke="#F6CC2C"
          strokeWidth="2"
        />
        <path
          d="M272.563 1136.2C231.444 1136.58 315.436 1132.14 361.563 1047.7C365.324 943.625 374.183 885.366 391.063 840.697C394.376 831.929 400 808 400 808C400 808 408.392 763.288 415.563 711.697C420.563 635.697 509.063 624.697 513.563 655.197C514.063 662.197 516.563 656.197 525.563 661.697C534.563 667.197 553.563 676.197 544.563 708.697C540.563 716.197 529.063 695.697 533.063 702.697C538.063 726.697 503.269 722.197 509.063 735.197C570.563 873.197 506.563 881.91 506.563 915.697C506.563 1009.63 777.234 904.583 857.141 820.112"
          stroke="#F6CC2C"
          strokeWidth="2"
        />
        <path
          d="M18.3811 1117.24C-58.3806 1117.94 347.821 1206.06 366.105 1061.75C377.523 971.623 404.975 933.359 455.033 933.401C505.09 933.442 533.436 980.648 533.498 1061.75C533.56 1142.85 672.254 1178.68 735.462 1105.8"
          stroke="#81EEB8"
          strokeWidth="2"
        />
        <path
          d="M18.3814 1158.17C-58.3803 1158.88 374.432 1247 392.715 1102.69C404.133 1012.56 403.155 970.431 453.213 970.473C503.271 970.515 510.465 1021.59 510.527 1102.69C510.589 1183.78 672.255 1219.61 735.463 1146.74"
          stroke="#653DDD"
          strokeWidth="2"
        />
        <path
          d="M160.351 1246.05C233.351 983.549 149.341 925.239 87.8508 957.549C-0.394642 1003.92 32.8506 880.4 -36.6493 914.475C-106.149 948.549 -152.588 1065.14 -43.1492 1248.05"
          stroke="#F29E39"
          strokeWidth="2"
        />
        <path
          d="M593.116 -252.856C589.705 -200.773 624.73 -118.669 624.73 -118.669C624.73 -118.669 735.69 114.173 553.285 62.0902C370.881 10.0071 486.419 -118.669 486.419 -118.669"
          stroke="#5BA7FC"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M583.361 -246.087C581.24 -199.151 603.012 -125.161 603.012 -125.161C603.012 -125.161 671.986 84.6687 558.602 37.7331C445.218 -9.20245 517.037 -125.161 517.037 -125.161"
          stroke="#E65590"
          strokeWidth="2"
          className="upperside"
        />
        <path
          d="M272.562 1136.2C231.443 1136.58 286.373 1159.95 332.5 1075.5C336.261 971.428 344.683 915.67 361.562 871C364.875 862.232 384 796.5 384 796.5C384 796.5 384 796.5 403.5 686C408.5 610 522 609 526.5 639.5C527 646.5 531 646 540 651.5C549 657 576 670.5 559.5 720C555.5 727.5 542 721 542 728C542 733 524.207 727.5 530 740.5C587.043 868.5 526.5 884.213 526.5 918C540.5 971 763.593 889.471 843.5 805"
          stroke="#653DDD"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="711" height="1053" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}