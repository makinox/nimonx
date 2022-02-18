import { ButtonText, Card } from '@makinox/makinox-ui';
import dynamic from 'next/dynamic';

import { ShowSection } from './Show.styles';

const Lemon = dynamic(() => import('../../components/Lemon/Lemon'), {
  ssr: false,
  loading: () => <div>...</div>,
});

export default function Show() {
  return (
    <section className={ShowSection()}>
      <div className="flex justify-center">
        <h2>En esta coleccion</h2>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <article className={Card()}>
          <div className="card-media">
            <Lemon type="solid" scale={1.5} color="blue" />
          </div>
          <div className="card-bottom">
            <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
              comprar
            </button>
          </div>
        </article>
        <article className={Card()}>
          <div className="card-media">
            <Lemon type="solid" scale={1.5} color="red" />
          </div>
          <div className="card-bottom">
            <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
              comprar
            </button>
          </div>
        </article>
        <article className={Card()}>
          <div className="card-media">
            <Lemon type="solid" scale={1.5} color="green" />
          </div>
          <div className="card-bottom">
            <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
              comprar
            </button>
          </div>
        </article>
        <article className={Card()}>
          <div className="card-media">
            <Lemon type="solid" scale={1.5} color="black" />
          </div>
          <div className="card-bottom">
            <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
              comprar
            </button>
          </div>
        </article>
        <article className={Card()}>
          <div className="card-media">
            <Lemon type="solid" scale={1.5} color="brown" />
          </div>
          <div className="card-bottom">
            <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
              comprar
            </button>
          </div>
        </article>
        <article className={Card()}>
          <div className="card-media">
            <Lemon type="solid" scale={1.5} color="blueviolet" />
          </div>
          <div className="card-bottom">
            <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
              comprar
            </button>
          </div>
        </article>
        <article className={Card()}>
          <div className="card-media">
            <Lemon type="solid" scale={1.5} color="coral" />
          </div>
          <div className="card-bottom">
            <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
              comprar
            </button>
          </div>
        </article>
        <article className={Card()}>
          <div className="card-media">
            <Lemon type="solid" scale={1.5} color="indigo" />
          </div>
          <div className="card-bottom">
            <button className={ButtonText()} onClick={() => window.open('https://jesusbossa.dev', '_blank')} key={`button makinox opensea`}>
              comprar
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
