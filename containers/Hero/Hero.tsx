import { FluidContainer } from '@makinox/makinox-ui';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

const Lemon = dynamic(() => import('../../components/Lemon/Lemon'), {
  ssr: false,
  loading: () => <div>...</div>,
});

import { heroBackgroundContainer, heroBackgroundPath, heroBackgroundVector, heroSection } from './Hero.style';

const HeroBackground = () => (
  <div className={heroBackgroundContainer()}>
    <svg className={heroBackgroundVector()} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className={heroBackgroundPath()}
      ></path>
    </svg>
  </div>
);

export default function Hero() {
  const windowWidth = typeof window !== 'undefined' && window.innerWidth;
  const { t } = useTranslation('common');

  return (
    <div className={heroSection({ mode: windowWidth > 749 ? 'lg' : 'sm' })} style={{ position: 'relative' }}>
      <div className={`flex justify-evenly items-center flex-wrap ${FluidContainer()}`}>
        <HeroBackground />
        <article>
          <h1>{t('HEAD-DESCRIPTION')}</h1>
        </article>
        <article>
          <Lemon type="base" scale={1.3} />
        </article>
      </div>
    </div>
  );
}
