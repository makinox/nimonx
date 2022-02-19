import { css } from '@stitches/core';

export const heroSection = css({
  backgroundImage: 'linear-gradient( 129.1deg,  rgba(243,199,83,1) 26.8%, rgba(18,235,207,1) 114.1% )',

  '& > div': {
    height: '600px',
  },

  '& article:first-of-type': {
    width: '350px',
    fontSize: 30,
    color: 'White',
  },

  '& article:last-of-type': {
    height: '600px',
    width: '400px',
  },

  variants: {
    mode: {
      lg: {
        '& > div': {
          height: '600px',
        },
      },
      sm: {
        '& > div': {
          height: '850px',
        },
      },
    },
  },

  defaultVariants: {
    mode: 'lg',
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
