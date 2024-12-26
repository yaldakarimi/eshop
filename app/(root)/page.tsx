import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const HomPage = () => {
	return (
		<div>
			<ProductList
				data={sampleData.products}
				title="Newest Arrivals"
				limit={4}
			/>
		</div>
	);
};

export default HomPage;
