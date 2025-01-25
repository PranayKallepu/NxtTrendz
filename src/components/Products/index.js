import Header from "../Header";
import AllProductSection from "../AllProductSection";
import PrimeDealsSection from "../PrimeDealsSection";

import { ProductSection } from "./styledComponent";

const Products = () => {
  return (
    <>
      <Header />
      <ProductSection>
        <PrimeDealsSection />
        <AllProductSection />
      </ProductSection>
    </>
  );
};

export default Products;
