import { useEffect, useState } from 'react';

type ProductCard = {
  image: string;
  name: string;
  type: string;
};

type ArcGalleryHeroProps = {
  products: ProductCard[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
};

const ArcGalleryHero = ({
  products,
  startAngle = -110,
  endAngle = 110,
  radiusLg = 340,
  radiusMd = 280,
  radiusSm = 200,
  cardSizeLg = 130,
  cardSizeMd = 105,
  cardSizeSm = 82,
  className = '',
}: ArcGalleryHeroProps) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  const count = Math.max(products.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section className={`relative overflow-hidden bg-background min-h-screen flex flex-col ${className}`}>
      <div
        className="relative mx-auto w-full"
        style={{
          height: dimensions.radius * 1.25,
        }}
      >
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {products.map((product, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;

            return (
              <div
                key={i}
                className="absolute opacity-0 animate-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: `translate(-50%, 50%)`,
                  animationDelay: `${i * 80}ms`,
                  animationFillMode: 'forwards',
                  zIndex: count - i,
                }}
              >
                <div
                  className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-border bg-card transition-all hover:scale-110 hover:ring-primary w-full h-full group cursor-pointer"
                  style={{ transform: `rotate(${angle / 4}deg)` }}
                  title={product.name}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="block w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-white text-[9px] font-semibold leading-tight line-clamp-2">{product.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-60">
        <div className="text-center max-w-2xl px-6 opacity-0 animate-fade-in" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Официальный дилер KAADAS
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Умные замки для{' '}
            <span className="text-primary">вашей безопасности</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
            Биометрия, приложение, отпечаток пальца — {products.length} моделей в наличии. Защитите дом с технологиями будущего.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25 hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
              Смотреть каталог
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium">
              Связаться с нами
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Гарантия 2 года
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Установка включена
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Доставка по России
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArcGalleryHero;
