import ProductCard from "./product-card";

type ProductProps = {
	data: unknown;
	title?: string;
	limit?: number;
};

const ProductList = ({ data, title, limit }: ProductProps) => {
	const limitedData = limit ? data.slice(0, limit) : data;
	return (
		<div className="my-10">
			<h2 className="h2-bold mb-4">{title}</h2>
			{data.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{limitedData.map((product: unknown) => (
						<ProductCard key={product.slug} product={product} />
					))}
				</div>
			) : (
				<div>
					<p>No products found</p>
				</div>
			)}
		</div>
	);
};

export default ProductList;
