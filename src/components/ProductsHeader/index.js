import { BsFilterRight } from "react-icons/bs";
import {
  MainContainer,
  ProductHeading,
  SortContainer,
  SortHeading,
  Select,
  Option,
} from "./styledComponent";

const ProductsHeader = (props) => {
  const { activeOptionId, sortbyOptions, changeSortBy } = props;
  const onChangeSortby = (event) => {
    changeSortBy(event.target.value);
  };
  return (
    <MainContainer>
      <ProductHeading>All Products</ProductHeading>
      <SortContainer>
        <BsFilterRight />
        <SortHeading>Sort by</SortHeading>
        <Select value={activeOptionId} onChange={onChangeSortby}>
          {sortbyOptions.map((eachOption) => (
            <Option key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </Option>
          ))}
        </Select>
      </SortContainer>
    </MainContainer>
  );
};

export default ProductsHeader;
