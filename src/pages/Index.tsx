import ArcGalleryHero from "@/components/ArcGalleryHero";

const lockImage1 = "https://cdn.poehali.dev/projects/e481a92a-023e-40e8-951c-2f893aff5003/files/14003b6f-9d0c-483f-b218-9b53176f305b.jpg";
const lockImage2 = "https://cdn.poehali.dev/projects/e481a92a-023e-40e8-951c-2f893aff5003/files/f263cbd8-1b0a-4a26-90c4-dffea9459468.jpg";
const lockImage3 = "https://cdn.poehali.dev/projects/e481a92a-023e-40e8-951c-2f893aff5003/files/79b708a5-ca48-4aad-bb58-1c9ab5f07d1a.jpg";

const products = [
  { image: lockImage1, name: "KAADAS K20F", type: "Биометрический врезной" },
  { image: lockImage1, name: "Kaadas S110-5W", type: "Врезной электронный" },
  { image: lockImage1, name: "KAADAS R6-5 Black", type: "Накладной электронный" },
  { image: lockImage2, name: "Kaadas K30 Gold", type: "Электронный золотой" },
  { image: lockImage3, name: "Kaadas K9-5W", type: "С монтажным комплектом" },
  { image: lockImage1, name: "Kaadas LH01", type: "Электронный чёрный" },
  { image: lockImage1, name: "Kaadas R8-5", type: "Электронный чёрный" },
  { image: lockImage1, name: "Kaadas R8-5GL", type: "Электронный чёрный" },
  { image: lockImage1, name: "Kaadas S500-5W", type: "С монтажным комплектом" },
  { image: lockImage1, name: "Kaadas S500-C5", type: "Электронный чёрный" },
  { image: lockImage1, name: "Kaadas S500-С5", type: "С монтажным комплектом" },
  { image: lockImage1, name: "Kaadas Z1 Pro", type: "Электронный чёрный" },
  { image: lockImage2, name: "Крепёж K9-5", type: "Монтажный комплект" },
  { image: lockImage2, name: "Крепёж K9-5W", type: "Монтажный комплект" },
  { image: lockImage2, name: "Крепёж S110-5W", type: "Монтажный комплект" },
  { image: lockImage3, name: "Комплект S500-C5", type: "Монтажный комплект" },
];

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        products={products}
        startAngle={20}
        endAngle={160}
        radiusLg={500}
        radiusMd={380}
        radiusSm={270}
        cardSizeLg={115}
        cardSizeMd={95}
        cardSizeSm={75}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;
