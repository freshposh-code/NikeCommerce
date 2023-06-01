import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
  Cart,
} from "./Components/index";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./Data/Data.js";
import { AuthContextProvider } from "./Components/Context/AuthContext";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Cart />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <main>
            <div className="flex flex-col gap-16 relative">
              <Hero heroapi={heroapi} />
              <Sales endpoint={popularsales} ifExists />
              <FlexContent endpoint={highlight} ifExist />
              <Sales endpoint={toprateslaes} />
              <FlexContent endpoint={sneaker} />
              <Stories story={story} />
            </div>
            <Footer footerAPI={footerAPI} />
          </main>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
