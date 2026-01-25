import { shopData } from "@/app/data/shop";

export default function ProductPage({ params }: any) {
  const product = shopData
    .flatMap((c) => c.products)
    .find((p) => p.slug === params.slug);

  if (!product) return null;

  return (
    <div className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-semibold">{product.name}</h1>
        <p className="mt-4 text-gray-600">{product.fullDescription}</p>
      </div>
      <div>
        <img src={product.heroImage} />
      </div>
    </div>
  );
}
