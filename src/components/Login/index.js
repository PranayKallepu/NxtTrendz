import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  LogoImage,
  Image,
  Form,
  InputContainer,
  Label,
  Input,
  ErrorMsg,
  Button,
} from "../Login/styledComponent";

const Login = () => {
  //STATES
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  //Update State Inputs
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Handle Submit Form
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { username, password } = loginDetails;
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify({ username, password }),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        Cookies.set("jwt_token", data.jwt_token, { expires: 30 });
        alert("Login Successful!");
        navigate("/", { replace: true });
      } else {
        setErrMsg(data.error_msg);
      }
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  return (
    <FormContainer>
      <LogoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website-logo"
      />
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        alt="website signup"
      />
      <Form onSubmit={handleSubmitForm}>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website-logo"
        />
        <InputContainer>
          <Label htmlFor="username">USERNAME:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={loginDetails.username}
            onChange={onChangeInput}
            autoComplete="off"
          />
          <Label htmlFor="password">PASSWORD:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={loginDetails.password}
            onChange={onChangeInput}
            autoComplete="off"
          />
        </InputContainer>
        <Button type="submit">Login</Button>
        {errMsg && <ErrorMsg>*{errMsg}</ErrorMsg>}
      </Form>
    </FormContainer>
  );
};

export default Login;
