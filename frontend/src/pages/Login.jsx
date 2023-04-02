import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../redux/Auth/actions";
import axios from "axios";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useGoogleLogin } from "@react-oauth/google";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  const handleSubmit = (e,user={email,password}) => { 
    if(typeof e !== 'number'){
      e.preventDefault();
    }
    const userType=user?.email?.includes('admin')?'admin':'user';
    try {
      axios.post(`https://talented-teal-hosiery.cyclic.app/${userType}/login`, JSON.stringify(user),{headers: {'Content-Type':'application/json'}})
      .then((res)=>{
        localStorage.setItem("token",res.data.token);
            toast({
              title: res.data.msg,
              description: ` Welcome ${userType==='user'?'User':'Admin'} ${user.email}`,
              status: "success",
              duration: 3000,
              position: "top",
              isClosable: true,
            });
            dispatch(setLogin);
            navigate(userType==='admin'?'/admin':comingFrom, { replace: true })
      })     
    } catch (err) {
        console.log('err',err)
        toast({
          title: "Wrong Creadentials.",
          description: `Please register ${user.email}`,
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
    }
  };

  const getGoogleUserDetails = (tokenResponse) => {
    try {
      const accessToken = tokenResponse.access_token;
      axios.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((response) =>{
        const user={email:response.data.email,password:'1234'};
        handleSubmit(1,user);
      }).catch((error) => console.log("error while login", error));
    } catch (error) {
      console.log("error while login", error);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => getGoogleUserDetails(tokenResponse),
  });

  return loading ? (
    <h1>...Loading</h1>
  ) : (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"gray.50"}
      backgroundImage={"url('https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      m="auto"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading color={"#002E6E"} fontSize={"4xl"}>
            Log in to your account
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  focusBorderColor="#002E6E"
                  borderColor={"#002E6E"}
                  type="email"
                  name="email"
                  placeholder="Enter @gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  focusBorderColor="#002E6E"
                  borderColor={"#002E6E"}
                  placeholder="Enter pass ***"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.500"}
                  color={"white"}
                  _hover={{
                    bg: "blue.600",
                  }}
                >
                  Sign in
                </Button>
                <Box textAlign="center">
                  <GoogleLoginButton onClick={loginWithGoogle} />
                </Box>
                <Box display={"flex"} justifyContent="center">
                  <Text as={"span"} textAlign={"center"}>
                    Dont have Account ?{" "}
                  </Text>
                  <Text color="#002E6E" fontWeight="600" as={"span"}>
                    <Link to={"/signup"}>Sign Up</Link>
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}