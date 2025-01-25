import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
import {
  MainContainer,
  Heading,
  Ul,
  Image,
  LoaderCard,
} from "./styledComponent";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGESS",
};
const PrimeDealsSection = () => {
  //states
  const [apiResponse, setApiResponse] = useState({
    primeDealsList: null,
    apiStatus: apiStatusConstants.initial,
  });

  //fetching details
  useEffect(() => {
    const getProducts = async () => {
      setApiResponse({ apiStatus: apiStatusConstants.inProgress });
      const url = "https://apis.ccbp.in/prime-deals";
      const jwtToken = Cookies.get("jwt_token");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const fetchedData = await response.json();
          const updatedData = fetchedData.prime_deals.map((product) => ({
            title: product.title,
            brand: product.brand,
            price: product.price,
            id: product.id,
            imageUrl: product.image_url,
            rating: product.rating,
          }));
          setApiResponse({
            primeDealsList: updatedData,
            apiStatus: apiStatusConstants.success,
          });
        } else if (response.status === 401) {
          setApiResponse({ apiStatus: apiStatusConstants.failure });
        }
      } catch (error) {
        console.log("fetching prime deals Error", error);
      }
    };
    getProducts();
  }, []);

  //possible views
  const renderPrimeDealsListView = () => {
    const { primeDealsList } = apiResponse;
    return (
      <div>
        <Heading>Exclusive Prime Deals</Heading>
        <Ul>
          {primeDealsList.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </Ul>
      </div>
    );
  };
  const renderPrimeDealsFailureView = () => {
    return (
      <Image
        src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
        alt="Register Prime"
      />
    );
  };
  const renderLoadingView = () => {
    return (
      <LoaderCard>
        <ThreeDots color="#0b69ff" height={50} width={50} />
      </LoaderCard>
    );
  };

  const renderPrimeDealsSection = () => {
    const { apiStatus } = apiResponse;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderPrimeDealsListView();
      case apiStatusConstants.failure:
        return renderPrimeDealsFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };
  return <MainContainer>{renderPrimeDealsSection()}</MainContainer>;
};

export default PrimeDealsSection;
