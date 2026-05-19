export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="min-h-screen brand-container py-12">
      <h1 className="text-3xl font-playfair font-bold mb-8">Product Detail</h1>
      <p>Product Detail Page Coming Soon - {params.slug}</p>
    </div>
  );
}
