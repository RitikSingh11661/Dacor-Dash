import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Text, useToast} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLoginButton } from "react-social-login-buttons";
import { getUsers, signup } from "../redux/Auth/actions";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
// import Image from '../../assets/signupbg.jpg'

export const Signup = () => {
  const initUser = { email: "", password: "", name: "", cart: [], orders: [] };
  const [user, setUser] = useState(initUser);
  const toast = useToast();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.AuthReducer.users);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getUserDetails = (tokenResponse) => {
    try {
      const accessToken = tokenResponse.access_token;
      fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log("error while login", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => getUserDetails(tokenResponse),
  });

  // normal with api
  const handleSubmit = (e) => {
    e.preventDefault();
    let bool = users.some((el) => {
      return el.email === user.email;
    });

    if (bool) {
      toast({
        title: "User already exist.",
        description: `Try different ${user.email}`,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      dispatch(signup(user, newToastSucess, newToastFail)).then(() => {
        dispatch(getUsers);
        navigate("/login");
      });
    }
  };

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  let newToastSucess = () => {
    return toast({
      title: "Successfully Logged In.",
      description: `Welcome ${user.email}`,
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };
  let newToastFail = () => {
    return toast({
      title: "Unable to create Account.",
      status: "error",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };

  // Google One Tap Authentication

  // useGoogleOneTapLogin({
  //   onSuccess: credentialResponse=>{
  //     if (credentialResponse.credential) {
  //       const idToken = credentialResponse.credential;
  //       const url =`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${idToken}`
  //       axios.get(url).then(res=>console.log('res',res));
  //     }
  //   },
  //   onError: () => {
  //     console.log('Login Failed');
  //   },
  // });
  
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundImage={"url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading color={"white"} fontSize={"4xl"}>
            Create your account
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
          bg={"white"}
          background={"rgba(255, 255, 255, 1.75)"}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel color={"#002E6E"}>Name</FormLabel>
                <Input
                  focusBorderColor="#002E6E"
                  borderColor={"#002E6E"}
                  placeholder="Enter Name"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel color={"#002E6E"}>Email address</FormLabel>
                <Input
                  focusBorderColor={"#002E6E"}
                  placeholder="Enter @gmail.com"
                  borderColor={"#002E6E"}
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel color={"#002E6E"}>Password</FormLabel>
                <Input
                  focusBorderColor={"#002E6E"}
                  placeholder="Enter password ***"
                  borderColor={"#002E6E"}
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <Button
                type="submit"
                bg={"blue.500"}
                color={"white"}
                _hover={{
                  bg: "blue.600",
                }}
              >
                Sign up
              </Button>
              <GoogleLoginButton onClick={login}></GoogleLoginButton>
              <Box display={"flex"} justifyContent="space-evenly">
                <Text as={"span"}  textAlign={"center"}>
                  Already have an account?{" "}
                </Text>
                <Text fontWeight="600" color="#002E6E" as={"span"}>
                  <Link to={"/login"}>Log in</Link>
                </Text>
              </Box>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );  
};
