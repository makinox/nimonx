import { Card } from '@makinox/makinox-ui';

export default function Description() {
  return (
    <section className="flex justify-center">
      <article className={Card()}>
        <div className="card-header">
          <h6 className="headline6">Compra el nft en open sea</h6>
        </div>
        <div className="card-body">
          <p className="body2">Compra el nft en open sea</p>
        </div>
      </article>

      <article className={Card()}>
        <div className="card-header">
          <h6 className="headline6">Interactua con tu nft en vivo</h6>
        </div>
        <div className="card-body">
          <p className="body2">Interactua con tu nft en vivo</p>
        </div>
      </article>

      <article className={Card()}>
        <div className="card-header">
          <h6 className="headline6">Pide tu nft para que llegue a tu casa</h6>
        </div>
        <div className="card-body">
          <p className="body2">Pide tu nft para que llegue a tu casa</p>
        </div>
      </article>
    </section>
  );
}