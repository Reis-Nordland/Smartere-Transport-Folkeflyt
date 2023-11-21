// import React from 'react'
declare var React

const BusIcon = () => (
  <svg
    width='129'
    viewBox='0 0 129 133'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M91.8484 83.7845C91.8236 80.3709 93.2768 77.2031 95.6546 75.4874C98.0324 73.7715 100.969 73.7715 103.347 75.4874C105.725 77.2031 107.178 80.3709 107.154 83.7845H108.641C109.628 83.7845 110.574 83.2983 111.272 82.4325C111.97 81.5664 112.361 80.3921 112.361 79.1675V62.7899L108.777 46.2474C108.558 45.2388 107.822 44.5381 106.98 44.5381H24.461C24.0951 44.5381 23.7446 44.7182 23.4858 45.0396C23.2273 45.3605 23.0821 45.7956 23.0821 46.2496V82.9291C23.0821 83.156 23.1549 83.3735 23.284 83.5338C23.4134 83.6947 23.5887 83.7845 23.7715 83.7845H37.962C37.962 78.539 41.3883 74.2863 45.6145 74.2863C49.8409 74.2863 53.2671 78.539 53.2671 83.7845H91.8484Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M41.3738 81.8462C41.3738 79.1702 43.3238 77.001 45.729 77.001C48.1342 77.001 50.084 79.1702 50.084 81.8462C50.084 84.5222 48.1342 86.6915 45.729 86.6915C43.3238 86.6915 41.3738 84.5222 41.3738 81.8462Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M94.9422 81.8462C94.9422 79.1702 96.8922 77.001 99.2973 77.001C101.703 77.001 103.652 79.1702 103.652 81.8462C103.652 84.5222 101.703 86.6915 99.2973 86.6915C96.8922 86.6915 94.9422 84.5222 94.9422 81.8462Z'
      fill='black'
    />
    <rect
      width='12.1942'
      height='16.4738'
      rx='4.48'
      transform='matrix(-1 0 0 1 40.502 49.8682)'
      fill='white'
    />
    <rect
      width='12.6297'
      height='16.4738'
      rx='4.48'
      transform='matrix(-1 0 0 1 89.0039 49.8682)'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M104.927 53.6753C104.595 51.486 102.713 49.8682 100.498 49.8682H96.6922C94.2179 49.8682 92.2122 51.8739 92.2122 54.3482V61.862C92.2122 64.3362 94.2179 66.342 96.6922 66.342H102.227C103.694 66.342 104.991 65.39 105.432 63.9905L106.148 61.7128L104.927 53.6753Z'
      fill='white'
    />
    <rect
      width='11.7587'
      height='16.4738'
      rx='4.48'
      transform='matrix(-1 0 0 1 73.166 49.8682)'
      fill='white'
    />
    <rect
      width='12.1942'
      height='16.4738'
      rx='4.48'
      transform='matrix(-1 0 0 1 57.0508 49.8682)'
      fill='white'
    />
  </svg>
)

const NumberedCircleIcon = ({
  fill = '#EEFA90',
  stroke = 'black',
  number,
}: {
  fill?: string
  stroke?: string
  number: Number
}) => (
  <svg
    width='81'
    height='80'
    viewBox='0 0 81 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0)'>
      <ellipse
        cx='40.2446'
        cy='39.8615'
        rx='39.5122'
        ry='39.4982'
        fill={fill}
        stroke={stroke}
      />
      <text
        fill={stroke}
        xmlSpace='preserve'
        style={{ whiteSpace: 'pre' }}
        fontFamily='Roboto'
        fontSize='48'
        fontWeight='900'
        letterSpacing='-0.274286px'
      >
        <tspan x='26.25' y='56.7217'>
          {number}
        </tspan>
      </text>
    </g>
    <defs>
      <clipPath id='clip0'>
        <rect width='80.25' height='79.4245' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

const DrawerIcon = () => (
  <svg
    width='52'
    height='7'
    viewBox='0 0 52 7'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_i)'>
      <rect width='52' height='7' rx='3.5' fill='#C4C4C4' />
    </g>
    <defs>
      <filter
        id='filter0_i'
        x='0'
        y='0'
        width='52'
        height='9'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='2' />
        <feGaussianBlur stdDeviation='1' />
        <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
      </filter>
    </defs>
  </svg>
)

const GreenWalkIcon = () => (
  <svg
    width='62'
    height='65'
    viewBox='0 0 62 65'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse cx='31' cy='32.5' rx='31' ry='32.5' fill='#129692' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M29.6133 8.05752C29.6133 5.8452 31.3176 4.05176 33.4199 4.05176C35.5223 4.05176 37.2266 5.8452 37.2266 8.05752C37.2266 10.2699 35.5223 12.0634 33.4199 12.0634C31.3176 12.0634 29.6133 10.2699 29.6133 8.05752Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M38.9411 18.1659C38.1636 15.9484 36.165 14.369 33.8029 14.1052C31.4409 13.8413 29.1351 14.9399 27.8753 16.9298L22.0001 26.2089V33.9509C22.0001 35.0024 22.8637 35.8547 23.929 35.8547C24.994 35.8547 25.8576 35.0024 25.8576 33.9509V28.2396L27.1434 26.2089V44.896L23.1185 53.5283C22.5247 54.8019 23.0893 56.3094 24.3795 56.8956C25.6696 57.4816 27.1968 56.9244 27.7906 55.6508L33.058 44.3536V37.8374L39.3464 55.2184C39.8719 56.6706 41.4905 57.4275 42.9617 56.9088C44.433 56.3901 45.1997 54.7923 44.6743 53.3401L37.4295 33.3163V25.4953L40.7605 34.994C40.9762 35.6492 41.5336 36.1382 42.2181 36.2729C42.9025 36.4076 43.6072 36.1668 44.0609 35.6432C44.5146 35.1197 44.6463 34.3951 44.4055 33.7484L38.9411 18.1659Z'
      fill='white'
    />
  </svg>
)

const GreenBusIcon = () => (
  <svg
    width='62'
    height='62'
    viewBox='0 0 62 62'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='31' cy='31' r='31' fill='#129692' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M45.6809 36.8441C44.4612 37.7539 43.7158 39.4336 43.7285 41.2438H23.9384C23.9384 38.4622 22.1809 36.2072 20.013 36.2072C17.8452 36.2072 16.0877 38.4622 16.0877 41.2438H8.80868C8.71493 41.2438 8.62502 41.1962 8.55861 41.1108C8.49239 41.0259 8.45508 40.9105 8.45508 40.7902V21.3402C8.45508 21.0995 8.52953 20.8687 8.66215 20.6986C8.79487 20.5281 8.97469 20.4326 9.16238 20.4326H51.4904C51.9219 20.4326 52.2996 20.8042 52.4117 21.339L54.2505 30.111V38.7955C54.2505 39.4449 54.0496 40.0676 53.6917 40.5269C53.3339 40.986 52.8485 41.2438 52.3424 41.2438H51.5792C51.5918 39.4336 50.8465 37.7539 49.6268 36.8441C48.407 35.9342 46.9006 35.9342 45.6809 36.8441ZM20.3231 37.775C19.1232 37.775 18.1503 38.9396 18.1503 40.3763C18.1503 41.8131 19.1232 42.9778 20.3231 42.9778C21.5231 42.9778 22.4959 41.8131 22.4959 40.3763C22.4959 38.9396 21.5231 37.775 20.3231 37.775ZM45.5607 40.3763C45.5607 38.9396 46.5336 37.775 47.7336 37.775C48.9335 37.775 49.9063 38.9396 49.9063 40.3763C49.9063 41.8131 48.9335 42.9778 47.7336 42.9778C46.5336 42.9778 45.5607 41.8131 45.5607 40.3763ZM15.3582 23.207C16.5307 23.207 17.4813 24.1575 17.4813 25.33V30.1021C17.4813 31.2746 16.5307 32.2251 15.3582 32.2251H13.2532C12.0806 32.2251 11.1301 31.2746 11.1301 30.1021V25.33C11.1301 24.1575 12.0806 23.207 13.2532 23.207H15.3582ZM42.552 25.33C42.552 24.1575 41.6015 23.207 40.4289 23.207H38.3239C37.1514 23.207 36.2008 24.1575 36.2008 25.33V30.1021C36.2008 31.2746 37.1514 32.2251 38.3239 32.2251H40.4289C41.6015 32.2251 42.552 31.2746 42.552 30.1021V25.33ZM48.1542 23.207C49.2132 23.207 50.1102 23.9874 50.2568 25.0362L50.9075 29.691L50.5066 31.0757C50.3094 31.7566 49.6859 32.2251 48.9771 32.2251H46.0108C44.8383 32.2251 43.8877 31.2746 43.8877 30.1021V25.33C43.8877 24.1575 44.8383 23.207 46.0108 23.207H48.1542ZM34.1944 25.33C34.1944 24.1575 33.2438 23.207 32.0713 23.207H30.3006C29.128 23.207 28.1775 24.1575 28.1775 25.33V30.1021C28.1775 31.2746 29.128 32.2251 30.3006 32.2251H32.0713C33.2438 32.2251 34.1944 31.2746 34.1944 30.1021V25.33ZM24.0488 23.207C25.2214 23.207 26.1719 24.1575 26.1719 25.33V30.1021C26.1719 31.2746 25.2214 32.2251 24.0488 32.2251H21.9438C20.7713 32.2251 19.8207 31.2746 19.8207 30.1021V25.33C19.8207 24.1575 20.7713 23.207 21.9438 23.207H24.0488Z'
      fill='white'
    />
  </svg>
)

export {
  BusIcon,
  NumberedCircleIcon,
  DrawerIcon,
  GreenWalkIcon,
  GreenBusIcon,
}