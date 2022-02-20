import { ButtonText, Card } from '@makinox/makinox-ui';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { ShowSection } from './Show.styles';

const Lemon = dynamic(() => import('../../components/Lemon/Lemon'), {
  ssr: false,
  loading: () => <div>...</div>,
});

const COLORS = ['blue', 'red', 'green', 'black', 'brown', 'blueviolet', 'coral', 'indigo'];

export default function Show() {
  const { t } = useTranslation('common');
  return (
    <section className={ShowSection()}>
      <div className="flex justify-center">
        <h2>{t('PRODUCT-TITLE')}</h2>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {COLORS.map((co) => (
          <article key={co} className={Card()}>
            <div className="card-media">
              <Lemon type="solid" scale={1.5} color={co} />
            </div>
            <div className="card-bottom flex justify-center">
              <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
                {t('PRODUCT-BUY')}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
