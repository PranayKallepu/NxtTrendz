import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";

import {
  MainCard,
  Content,
  Heading,
  MobileImg,
  Description,
  Button,
  DesktopImg,
} from "./styledComponent";

const Home = () => {
  const navigate = useNavigate();
  const handleShopNowButton = () => {
    return navigate("/products");
  };
  return (
    <>
      <Header />
      <MainCard>
        <Content>
          <Heading>Clothes That Get YOU Noticed</Heading>
          <MobileImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
          <Description>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </Description>
          <Link to="/products">
            <Button type="button" onClick={handleShopNowButton}>
              Shop Now
            </Button>
          </Link>
        </Content>
        <DesktopImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </MainCard>
    </>
  );
};

export default Home;
