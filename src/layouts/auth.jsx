import { Routes, Route } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@/widgets/layout";
import routes from "@/routes";

// images
import beanGroup from "../assets/Images/bean-group.png";
import beanArial from "../assets/Images/bean-arial.png";
import beanRed from "../assets/Images/bean-red.png";
import beanSack2 from "../assets/Images/bean-sack-2.png";
import beanSacks from "../assets/Images/bean-sacks.png";
import beanWhite from "../assets/Images/bean-white.png";
import gnutWhite from "../assets/Images/gnut-white.png";
import gnutOrange from "../assets/Images/gnut-orange.png";

export function Auth() {
  const navbarRoutes = [
    // {
    //   name: "dashboard",
    //   path: "/dashboard/home",
    //   icon: ChartPieIcon,
    // },
    // {
    //   name: "profile",
    //   path: "/dashboard/home",
    //   icon: UserIcon,
    // },
    {
      name: "sign up",
      path: "/auth/sign-up",
      icon: UserPlusIcon,
    },
    {
      name: "sign in",
      path: "/auth/sign-in",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

  const products = [
    {
      imageUrl: gnutWhite,
    },
    {
      imageUrl: gnutOrange,
    },
    {
      imageUrl: beanGroup,
    },
    {
      imageUrl: beanArial,
    },
    {
      imageUrl: beanWhite,
    },
    {
      imageUrl: beanSack2,
    },
    {
      imageUrl: beanRed,
    },
    {
      imageUrl: beanSacks,
    },
  ];

  return (
    <div className="relative h-auto min-h-screen w-full">
      <div className="container relative z-40 mx-auto p-4">
        <Navbar routes={navbarRoutes} />
      </div>
      <div className="mt-8 bg-green-400">
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "auth" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
      <div className="">
        <div className="flex items-center justify-center pb-8">
          <span className="text-lg">Our Products</span>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product, index) => {
              return (
                <img
                  src={product.imageUrl}
                  alt={`image-${index}`}
                  className="h-[280px] w-[300px] rounded-lg"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container absolute bottom-2 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <Footer />
      </div>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
