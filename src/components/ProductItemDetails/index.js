import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import Header from "../Header";
import SimilarProductItem from "../SimilarProductItem";
import CartContext from "../../context/CartContext";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  ProductDetailsContainer,
  DetailsWrapper,
  SimilarProductsList,
  ProductDetailsErrorViewContainer,
  ErrorViewImage,
  ProductNotFoundH1,
  LoaderContainer,
  ProductImage,
  ProductInfo,
  Heading,
  Price,
  RatingAndReviewsCount,
  RatingContainer,
  LabelValueContainer,
  Label,
  Value,
  Description,
  QuantityContainer,
  QuantityButton,
  Quantity,
  QuantityControllerButton,
  AddToCartButton,
  StyledButton,
  ReviewsCount,
} from "./styledComponent";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const ProductItemDetails = () => {
  const [productData, setProductData] = useState({});
  const [similarProductsData, setSimilarProductsData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [quantity, setQuantity] = useState(1);
  const { addCartItem } = useContext(CartContext);
  const { id } = useParams();

  const onDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const onIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  useEffect(() => {
    const getProductData = async () => {
      setApiStatus(apiStatusConstants.inProgress);
      const jwtToken = Cookies.get("jwt_token");
      const apiUrl = `https://apis.ccbp.in/products/${id}`;
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };

      try {
        const response = await fetch(apiUrl, options);
        if (response.ok) {
          const fetchedData = await response.json();
          const updatedData = {
            description: fetchedData.description,
            imageUrl: fetchedData.image_url,
            price: fetchedData.price,
            title: fetchedData.title,
            availability: fetchedData.availability,
            brand: fetchedData.brand,
            rating: fetchedData.rating,
            totalReviews: fetchedData.total_reviews,
          };
          const updatedSimilarProductsData = fetchedData.similar_products.map(
            (eachSimilarProduct) => ({
              id: eachSimilarProduct.id,
              title: eachSimilarProduct.title,
              brand: eachSimilarProduct.brand,
              imageUrl: eachSimilarProduct.image_url,
              price: eachSimilarProduct.price,
              rating: eachSimilarProduct.rating,
            })
          );
          setProductData(updatedData);
          setSimilarProductsData(updatedSimilarProductsData);
          setApiStatus(apiStatusConstants.success);
        } else if (response.status === 404) {
          setApiStatus(apiStatusConstants.failure);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        setApiStatus(apiStatusConstants.failure);
      }
    };

    getProductData();
  }, [id]);

  const renderLoadingView = () => (
    <LoaderContainer>
      <ThreeDots color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  );

  const renderFailureView = () => (
    <ProductDetailsErrorViewContainer>
      <ErrorViewImage
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
      />
      <ProductNotFoundH1>Product Not Found</ProductNotFoundH1>
      <StyledButton type="button">Continue Shopping</StyledButton>
    </ProductDetailsErrorViewContainer>
  );

  const renderProductDetailsView = () => {
    const {
      availability,
      brand,
      description,
      imageUrl,
      price,
      rating,
      title,
      totalReviews,
    } = productData;

    const onClickAddToCart = () => {
      const id = uuidv4();
      addCartItem({ ...productData, quantity, id });
    };

    return (
      <ProductDetailsContainer>
        <DetailsWrapper>
          <ProductImage src={imageUrl} alt="product" />
          <ProductInfo>
            <Heading>{title}</Heading>
            <Price>Price: Rs {price}/-</Price>
            <RatingAndReviewsCount>
              <RatingContainer>
                <p>{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                />
              </RatingContainer>
              <ReviewsCount>{totalReviews} Reviews</ReviewsCount>
            </RatingAndReviewsCount>
            <Description>{description}</Description>
            <LabelValueContainer>
              <Label>Available:</Label>
              <Value>{availability}</Value>
            </LabelValueContainer>
            <LabelValueContainer>
              <Label>Brand:</Label>
              <Value>{brand}</Value>
            </LabelValueContainer>
            <hr />
            <QuantityContainer>
              <QuantityButton type="button" onClick={onDecrementQuantity}>
                <BsDashSquare className="quantity-controller-icon" />
              </QuantityButton>
              <Quantity>{quantity}</Quantity>
              <QuantityControllerButton
                type="button"
                onClick={onIncrementQuantity}
              >
                <BsPlusSquare className="quantity-controller-icon" />
              </QuantityControllerButton>
            </QuantityContainer>
            <AddToCartButton type="button" onClick={onClickAddToCart}>
                ADD TO CART
              </AddToCartButton>
          </ProductInfo>
        </DetailsWrapper>
        <Heading>Similar Products</Heading>
        <SimilarProductsList>
          {similarProductsData.map((product) => (
            <SimilarProductItem key={product.id} productDetails={product} />
          ))}
        </SimilarProductsList>
      </ProductDetailsContainer>
    );
  };

  const renderProductDetails = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderProductDetailsView();
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
      <Header />
      <Container>{renderProductDetails()}</Container>
    </>
  );
};

export default ProductItemDetails;
