import React from 'react';

function Face({ emotion, height = '1em', width = '1em' }) {
  return (
    <svg x="0px" y="0px" height={height} width={width} viewBox="0 0 140 140" xmlns='http://www.w3.org/2000/svg'>
      <circle fill='#fff' cx="70" cy="70" r="70"/>
      <g id="ball">
        <path fill='#333333' d="M77,53.6l18.8-26.8L73,5.5L41.1,16.9L42.2,47L77,53.6z M65.6,117.7l17.2,18l30-12.8l4.9-26.5 l-29.8-3.7L65.6,117.7z"/>
        <path fill='#333333' d="M4.4,95l0.4,0.5C15,121.5,40.4,140,70.1,140c38.6,0,69.9-31.3,69.9-69.9C140,31.3,108.7,0,69.9,0 C31.3,0,0,31.3,0,69.9c0,8.6,1.5,16.9,4.4,24.5V95z M3.7,69.9c0-8.8,1.7-17.3,4.9-25l16.5-20.5l4.3-6.9C40.7,8.8,54.7,3.7,69.9,3.7 h1.1l7.4,2.8l16.3,2.1c10.5,4.2,19.6,11.1,26.6,19.6L118.7,40l10.7,30.3l6.9,1.7c-1,35.6-30.4,64.4-66.3,64.4 c-17.9,0-34.1-7.1-46.1-18.7l12.8-11.1L24.4,75L5.2,68.3L4.8,82.4C4.1,78.4,3.7,74.3,3.7,69.9z"/>
        <path style={{ opacity: '0.4', enableBackground: 'new' }} d="M65.5,139c35.3-2.9,63.2-32.5,63.2-68.6S100.9,4.7,65.5,1.8 c1.8-0.1,3.7-0.2,5.6-0.2c38,0,68.8,30.8,68.8,68.8s-30.8,68.8-68.8,68.8C69.2,139.3,67.4,139.2,65.5,139z"/>
      </g>
      { emotion === '😁' && (
        <g id="happy">
          <path d="M55.7,79.3h-1.3c0-0.8,0.3-1.5,0.9-2.2c0.6-0.5,1.3-0.9,2.2-0.9h21.5c0.8,0,1.6,0.3,2.2,0.9c0.6,0.5,0.9,1.3,0.9,2.2 c0,2.6-0.9,5-2.4,7.1c-1.4,2.2-3.5,3.9-6,5c-1.6,0.7-3.5,1.2-5.5,1.2c-3,0-5.6-1-7.8-2.6c-2.2-1.5-3.8-3.6-4.8-6 c-0.7-1.5-1.1-3.2-1.1-4.8C54.3,79.3,55.7,79.3,55.7,79.3z"/>
          <path fill='#E74144' d="M63.4,88.5h-0.5c0,0.3,0.1,0.5,0.4,0.7c0.2,0.2,0.9,1.1,5.3,1.1c4.4,0,5-0.9,5.3-1.1 c0.2-0.2,0.4-0.4,0.4-0.7c0-0.9-0.4-1.7-0.9-2.5c-0.8-0.8-1.6-1.4-2.7-1.8c-0.7-0.3-1.4-0.4-2.3-0.4c-1.2,0-2.4,0.3-3.2,0.9 c-0.9,0.5-1.5,1.2-2.1,2.1c-0.3,0.5-0.4,1.1-0.4,1.7C62.9,88.5,63.4,88.5,63.4,88.5z"/>
          <g transform="translate(34 70)" style={{ opacity: '0.2' }}>
            <circle cx="6.1" cy="5.3" r="2.9"/>
            <circle cx="63" cy="5.3" r="2.9"/>
          </g>
          <path d="M50.8,69.4c-1.4,0-2.6-1.1-2.6-2.5c0-0.8-0.7-1.4-1.5-1.4s-1.5,0.6-1.5,1.4c0,1.3-1.1,2.5-2.6,2.5c-1.4,0-2.6-1.1-2.6-2.5 c0-3.5,3-6.4,6.7-6.4s6.7,2.9,6.7,6.4C53.4,68.3,52.3,69.4,50.8,69.4 M94.4,69.4c-1.4,0-2.6-1.1-2.6-2.5c0-0.8-0.7-1.4-1.5-1.4 c-0.8,0-1.5,0.6-1.5,1.4c0,1.3-1.1,2.5-2.6,2.5c-1.4,0-2.6-1.1-2.6-2.5c0-3.5,3-6.4,6.7-6.4S97,63.5,97,67 C97,68.3,95.8,69.4,94.4,69.4"/>
        </g>
      )}
      {emotion === '😭' && (
        <g id="sad">
          <path d="M60.6,86.1c0-1,0.2-2.1,0.6-3c0.6-1.3,1.5-2.6,2.9-3.6c1.2-0.9,2.8-1.5,4.5-1.5c1.1,0,2.3,0.3,3.2,0.7 c1.4,0.7,2.7,1.7,3.5,3c0.8,1.2,1.3,2.8,1.3,4.3c0,1-0.8,1.7-1.7,1.7s-1.7-0.8-1.7-1.7c0-0.5-0.1-1-0.3-1.5 c-0.3-0.8-0.9-1.5-1.6-2.1c-0.7-0.5-1.5-0.8-2.5-0.8c-0.6,0-1.1,0.1-1.6,0.4c-0.8,0.4-1.5,1-2.1,1.7c-0.5,0.7-0.8,1.6-0.7,2.3 c0,1-0.8,1.7-1.7,1.7C61.6,87.7,60.6,87.1,60.6,86.1" />
          <g transform="translate(0 13)" style={{ opacity: '0.2' }}>
            <circle cx="41.8" cy="63.3" r="2.7" />
            <circle cx="95.3" cy="63.3" r="2.7" />
          </g>
          <g transform="translate(3)">
            <circle cx="42.8" cy="66" r="4" />
            <circle cx="89.2" cy="66" r="4" />
          </g>
        </g>
      )}
      { emotion === '😐' && (
        <g id="neutral">
          <path d="M60.5,84.8c-1.1,0-2-0.8-2-1.7c0-0.9,0.9-1.7,2-1.7L77,81.5c1.1,0,2,0.7,2.1,1.7c0,1-0.8,1.8-2,1.8 C77.1,85,60.5,84.8,60.5,84.8z" />
          <g transform="translate(0 13)" style={{ opacity: '0.2' }}>
            <circle cx="41.8" cy="63.3" r="2.7" />
            <circle cx="95.3" cy="63.3" r="2.7" />
          </g>
          <g transform="translate(3)">
            <circle cx="42.8" cy="66" r="4" />
            <circle cx="89.2" cy="66" r="4" />
          </g>
        </g>
      ) }
    </svg>
  );
}
export default Face;