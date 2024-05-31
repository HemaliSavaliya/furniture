import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const RootLayout = lazy(() => import("./Components/Home1/RootLayout"));
const Index = lazy(() => import("./Components/Home1/Index"));
const HomeRoot = lazy(() => import("./Components/Home2/RootLayout"));
const HomeIndex = lazy(() => import("./Components/Home2/Index"));
const Product = lazy(() => import("./Pages/Product/Product"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const About = lazy(() => import("./Pages/About/About"));

export const ApiRoutes = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path="/" element={<Index />} />
    </Route>
    <Route element={<HomeRoot />}>
      <Route path="/Home2" element={<HomeIndex />} />
    </Route>
    <Route path="/Product" element={<Product />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
)