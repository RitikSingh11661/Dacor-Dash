import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLogin } from "../redux/Auth/actions";
import axios from "axios";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useGoogleLogin } from "@react-oauth/google";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const toast = useToast();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  useEffect(() => {
    axios.get('https://api/users').then(res => setUsers(res.data));
    axios.get('https://api/admins').then(res => setAdmins(res.data))
  }, []);

  // console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    let checkAdmin = admins.find(el => el.email === email && el.password === password);
    if (checkAdmin) {
      localStorage.setItem("adminId", checkAdmin.id);
      toast({
        title: "Login Successfully.",
        description: ` Welcome Again ${email} as Admin`,
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      dispatch(setLogin);
      navigate('/admin', { replace: true })
    } else {
      let checkUser = users.find(el => el.email === email && el.password === password);
      if (checkUser) {
        localStorage.setItem("userId", checkUser.id);
        toast({
          title: "Login Successfully.",
          description: ` Welcome ${email}`,
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        dispatch(setLogin);
        navigate(comingFrom, { replace: true })
      } else {
        console.log('wrong')
        toast({
          title: "Wrong Creadentials.",
          description: `Please register ${email}`,
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    }

  };

  const getUserDetails = (tokenResponse) => {
    try {
      const accessToken = tokenResponse.access_token;
      fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((response) => response.json()).then((data) => console.log(data));
    } catch (error) {
      console.log("error while login", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => getUserDetails(tokenResponse),
  });

  // return loading ? (
  //   <h1>...Loading</h1>
  // ) : (
  //   <Flex
  //     minH={"100vh"}
  //     align={"center"}
  //     justify={"center"}
  //     bg={"gray.50"}
  //     m="auto"
  //   >
  //     <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
  //       <Stack align={"center"}>
  //         <Heading color={"#002E6E"} fontSize={"4xl"}>
  //           Log in to your account
  //         </Heading>
  //       </Stack>
  //       <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={8}>
  //         <form onSubmit={handleSubmit}>
  //           <Stack spacing={2}>
  //             <FormControl id="email">
  //               <FormLabel>Email address</FormLabel>
  //               <Input
  //                 focusBorderColor="#002E6E"
  //                 borderColor={"#002E6E"}
  //                 type="email"
  //                 name="email"
  //                 placeholder="Enter @gmail.com"
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //               />
  //             </FormControl>
  //             <FormControl id="password">
  //               <FormLabel>Password</FormLabel>
  //               <Input
  //                 focusBorderColor="#002E6E"
  //                 borderColor={"#002E6E"}
  //                 placeholder="Enter pass ***"
  //                 type="password"
  //                 name="password"
  //                 value={password}
  //                 onChange={(e) => setPassword(e.target.value)}
  //               />
  //             </FormControl>
  //             <Stack spacing={5}>
  //               <Stack
  //                 direction={{ base: "column", sm: "row" }}
  //                 align={"start"}
  //                 justify={"space-between"}
  //               >
  //                 <Checkbox>Remember me</Checkbox>
  //                 <Link color={"blue.400"}>Forgot password?</Link>
  //               </Stack>
  //               <Button
  //                 type="submit"
  //                 bg={"blue.500"}
  //                 color={"white"}
  //                 _hover={{
  //                   bg: "blue.600",
  //                 }}
  //               >
  //                 Sign in
  //               </Button>
  //               <GoogleLoginButton onClick={login}></GoogleLoginButton>
  //               <Box display={"flex"} justifyContent="center">
  //                 <Text as={"span"} textAlign={"center"}>
  //                   Dont have Account ?{" "}
  //                 </Text>
  //                 <Text color="#002E6E" fontWeight="600" as={"span"}>
  //                   <Link to={"/signup"}>Sign Up</Link>
  //                 </Text>
  //               </Box>
  //             </Stack>
  //           </Stack>
  //         </form>
  //       </Box>
  //     </Stack>
  //   </Flex>
  // );

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
                  <GoogleLoginButton onClick={login} />
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
