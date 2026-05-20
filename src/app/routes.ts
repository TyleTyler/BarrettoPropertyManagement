import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { OurStory } from "./pages/OurStory";
import { Services } from "./pages/Services";
import { Resources } from "./pages/Resources";
import { ContactUs } from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "our-story", Component: OurStory },
      { path: "services", Component: Services },
      { path: "resources", Component: Resources },
      { path: "contact", Component: ContactUs },
    ],
  },
]);
