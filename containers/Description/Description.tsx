import { Card } from '@makinox/makinox-ui';
import NextImage from 'next/image';
import { DescriptionSection } from './Description.styles';

export default function Description() {
  return (
    <section className={`flex justify-evenly flex-wrap ${DescriptionSection()}`}>
      <article className={Card()}>
        <div className="card-media">
          <NextImage src="/images/image-market.png" alt="Makinox open sea" width={400} height={170} objectFit="cover" />
        </div>
        <div className="card-header">
          <h6 className="headline6">Compra el nft en open sea</h6>
        </div>
        <div className="card-body">
          <p className="body2">Compra el nft en open sea</p>
        </div>
      </article>

      <article className={Card()}>
        <div className="card-media">
          <NextImage src="/images/image-software.jpeg" alt="Makinox open sea" width={400} height={170} objectFit="cover" />
        </div>
        <div className="card-header">
          <h6 className="headline6">Interactua con tu nft en vivo</h6>
        </div>
        <div className="card-body">
          <p className="body2">Interactua con tu nft en vivo</p>
        </div>
      </article>

      <article className={Card()}>
        <div className="card-media">
          <NextImage src="/images/image-package.jpeg" alt="Makinox open sea" width={400} height={170} objectFit="cover" />
        </div>
        <div className="card-header">
          <h6 className="headline6">Pide que llegue tu nft a tu casa</h6>
        </div>
        <div className="card-body">
          <p className="body2">Pide tu nft para que llegue a tu casa</p>
        </div>
      </article>
    </section>
  );
}
