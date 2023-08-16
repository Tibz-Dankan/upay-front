import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { signUp } from "../../api";
import { authenticate } from "../../store/actions/auth";
import {
  showCardNotification,
  hideCardNotification,
} from "../../store/actions/notification";
import { Loader } from "../../UI/Loader";

export function SignUp() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const dispatch = useDispatch();

  const { isLoading, data, mutate } = useMutation({
    mutationFn: signUp,
    onSuccess: (auth) => {
      dispatch(authenticate(auth));
      dispatch(
        showCardNotification({
          type: "success",
          message: "Your account has been created successfully ",
        })
      );
      setTimeout(() => {
        dispatch(hideCardNotification());
      }, 5000);
    },
    onError: (error) => {
      dispatch(showCardNotification({ type: "error", message: error.message }));
      setTimeout(() => {
        dispatch(hideCardNotification());
      }, 5000);
    },
  });

  const signUpHandler = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!firstName || !lastName || !email || !password || !phone) return;

    if (password !== confirmPassword) return;
    mutate({ firstName, lastName, email, password, phone });
  };

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-[55%] left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4  sm:grid sm:grid-cols-2">
            <div className="flex flex-col">
              <label className="font-bold">First name</label>
              <input
                className="bg-gray-light-1 mb-[-8px] rounded border-[1px] 
                border-gray-400 p-2  text-sm outline-none transition-all
                focus:border-green-400 focus:bg-gray-200"
                type="text"
                ref={firstNameRef}
                placeholder="First name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Last name</label>
              <input
                className="bg-gray-light-1 rounded border-[1px] 
                border-gray-400 p-2  text-sm outline-none transition-all
                focus:border-green-400 focus:bg-gray-200"
                type="text"
                ref={lastNameRef}
                placeholder="First name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Email</label>
              <input
                className="bg-gray-light-1 rounded border-[1px] 
                border-gray-400 p-2  text-sm outline-none transition-all
                focus:border-green-400 focus:bg-gray-200"
                type="email"
                ref={emailRef}
                placeholder="Email"
                required
              />
            </div>
            {/* <Input type="number" label="phone" size="lg" ref={phoneRef} /> */}
            <div className="flex flex-col">
              <label className="font-bold">Phone</label>
              <input
                className="bg-gray-light-1 rounded border-[1px] 
                border-gray-400 p-2  text-sm outline-none transition-all
                focus:border-green-400 focus:bg-gray-200"
                type="number"
                ref={phoneRef}
                placeholder="Phone number"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Password</label>
              <input
                className="bg-gray-light-1 rounded border-[1px] 
                border-gray-400 p-2  text-sm outline-none transition-all
                focus:border-green-400 focus:bg-gray-200"
                type="password"
                ref={passwordRef}
                placeholder="Password"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Confirm password</label>
              <input
                className="bg-gray-light-1 rounded border-[1px] 
                border-gray-400 p-2  text-sm outline-none transition-all
                focus:border-green-400 focus:bg-gray-200"
                type="password"
                ref={confirmPasswordRef}
                placeholder="confirm  password"
                required
              />
            </div>

            {/* <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={(event) => signUpHandler(event)}
            >
              Register
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Log in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
