import { css } from '@stitches/core';

export const heroSection = css({
  backgroundImage: 'linear-gradient( 129.1deg,  rgba(243,199,83,1) 26.8%, rgba(18,235,207,1) 114.1% )',

  '& > div': {
    height: '600px',
  },

  '& article:last-of-type': {
    height: '800px',
    width: '400px',
  },
});

export const heroBackgroundContainer = css({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  overflow: 'hidden',
  lineHeight: '0',
  transform: 'rotate(180deg)',
});

export const heroBackgroundVector = css({
  position: 'relative',
  display: 'block',
  width: 'calc(127% + 1.3px)',
  height: '128px',
});

export const heroBackgroundPath = css({
  fill: 'rgb(var(--light-surface))',
});
