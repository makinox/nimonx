import { useTranslation } from 'next-i18next';
import { Card } from '@makinox/makinox-ui';
import NextImage from 'next/image';

import { DescriptionSection } from './Description.styles';

export default function Description() {
  const { t } = useTranslation('common');

  return (
    <section className={`flex justify-evenly flex-wrap ${DescriptionSection()}`}>
      <article className={Card()}>
        <div className="card-media">
          <NextImage src="/images/image-market.png" alt="Makinox open sea" width={400} height={170} objectFit="cover" />
        </div>
        <div className="card-header">
          <h6 className="headline6">{t('SHOW-STORE')}</h6>
        </div>
      </article>

      <article className={Card()}>
        <div className="card-media">
          <NextImage src="/images/image-software.jpeg" alt="Makinox open sea" width={400} height={170} objectFit="cover" />
        </div>
        <div className="card-header">
          <h6 className="headline6">{t('SHOW-SOFT')}</h6>
        </div>
      </article>

      <article className={Card()}>
        <div className="card-media">
          <NextImage src="/images/image-package.jpeg" alt="Makinox open sea" width={400} height={170} objectFit="cover" />
        </div>
        <div className="card-header">
          <h6 className="headline6">{t('SHOW-DELIVER')}</h6>
        </div>
      </article>
    </section>
  );
}
