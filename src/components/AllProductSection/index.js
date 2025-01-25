import { useEffect, useState } from "react";
import ProductsHeader from "../ProductsHeader";
import FilterGroup from "../FilterGroup";
import ProductCard from "../ProductCard";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import {
  AllProductContainer,
  AllProductsCard,
  Ul,
  NoProductView,
  NoProductImage,
  NoProductHeading,
  NoProductsDescription,
  FailureCard,
  FailureImage,
  FailureHeading,
  FailureDescription,
  LoaderCard,
} from "./styledComponent";

const categoryOptions = [
  {
    name: "Clothing",
    categoryId: "1",
  },
  {
    name: "Electronics",
    categoryId: "2",
  },
  {
    name: "Appliances",
    categoryId: "3",
  },
  {
    name: "Grocery",
    categoryId: "4",
  },
  {
    name: "Toys",
    categoryId: "5",
  },
];

const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
];

const ratingsList = [
  {
    ratingId: "4",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png",
  },
  {
    ratingId: "3",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png",
  },
  {
    ratingId: "2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png",
  },
  {
    ratingId: "1",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png",
  },
];

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const AllProductSection = () => {
  //STATES
  const [apiResponse, setApiResponse] = useState({
    productsList: null,
    apiStatus: apiStatusConstants.initial,
  });
  const [activeOptionId, setActiveOptionId] = useState(
    sortbyOptions[0].optionId
  );
  const [searchInput, setSearchInput] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const [activeRatingId, setActiveRatingId] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setApiResponse({ apiStatus: apiStatusConstants.inProgress });
      const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`;
      const jwtToken = Cookies.get("jwt_token");
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };
      try {
        const response = await fetch(apiUrl, options);
        const fetchedData = await response.json();
        const updatedData = fetchedData.products.map((product) => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }));
        setApiResponse({
          productsList: updatedData,
          apiStatus: apiStatusConstants.success,
        });
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    getProducts();
  }, [activeOptionId, activeCategoryId, activeRatingId, searchInput]);

  const changeSortBy = (optionId) => setActiveOptionId(optionId);
  const updateSearchInput = (searchInput) => setSearchInput(searchInput);
  const updateCategory = (activeCategoryId) =>
    setActiveCategoryId(activeCategoryId);
  const updateRating = (activeRatingId) => setActiveRatingId(activeRatingId);
  const clearFilters = () => {
    setSearchInput("");
    setActiveCategoryId("");
    setActiveRatingId("");
  };

  const renderProductsListView = () => {
    const { productsList } = apiResponse;
    return productsList && productsList.length > 0 ? (
      <AllProductsCard>
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortBy={changeSortBy}
        />
        <Ul>
          {productsList.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </Ul>
      </AllProductsCard>
    ) : (
      <NoProductView>
        <NoProductImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
          alt="all-products-error"
        />
        <NoProductHeading>No Products Found</NoProductHeading>
        <NoProductsDescription>
          We could not find any products. Try other filters.
        </NoProductsDescription>
      </NoProductView>
    );
  };

  const renderFailureView = () => (
    <FailureCard>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble processing your request. Please try again
        later.
      </FailureDescription>
    </FailureCard>
  );

  const renderLoadingView = () => (
    <LoaderCard>
      <ThreeDots color="#0b69ff" height={50} width={50} />
    </LoaderCard>
  );

  const renderAllProducts = () => {
    const { apiStatus } = apiResponse;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderProductsListView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };
  return (
    <>
      <AllProductContainer>
        <FilterGroup
          //search props
          searchInput={searchInput}
          updateSearchInput={updateSearchInput}
          //category props
          categoryOptions={categoryOptions}
          activeCategoryId={activeCategoryId}
          updateCategory={updateCategory}
          //rating props
          ratingsList={ratingsList}
          activeRatingId={activeRatingId}
          updateRating={updateRating}
          //clear filter prop
          clearFilters={clearFilters}
        />
        {renderAllProducts()}
      </AllProductContainer>
    </>
  );
};

export default AllProductSection;
