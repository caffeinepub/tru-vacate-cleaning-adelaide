import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import SuburbPage from "./components/SuburbPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

// Root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Toaster position="top-right" />
      <Layout />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// Suburb routes
const suburbGlenelgRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/glenelg",
  component: () => <SuburbPage slug="glenelg" />,
});

const suburbNorwoodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/norwood",
  component: () => <SuburbPage slug="norwood" />,
});

const suburbProspectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/prospect",
  component: () => <SuburbPage slug="prospect" />,
});

const suburbUnleyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/unley",
  component: () => <SuburbPage slug="unley" />,
});

const suburbMitchamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/mitcham",
  component: () => <SuburbPage slug="mitcham" />,
});

const suburbBurnsideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/burnside",
  component: () => <SuburbPage slug="burnside" />,
});

const suburbSalisburyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/salisbury",
  component: () => <SuburbPage slug="salisbury" />,
});

const suburbTeaTreeGullyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/tea-tree-gully",
  component: () => <SuburbPage slug="tea-tree-gully" />,
});

const suburbWestTorrensRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/west-torrens",
  component: () => <SuburbPage slug="west-torrens" />,
});

const suburbPortAdelaideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/port-adelaide",
  component: () => <SuburbPage slug="port-adelaide" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  suburbGlenelgRoute,
  suburbNorwoodRoute,
  suburbProspectRoute,
  suburbUnleyRoute,
  suburbMitchamRoute,
  suburbBurnsideRoute,
  suburbSalisburyRoute,
  suburbTeaTreeGullyRoute,
  suburbWestTorrensRoute,
  suburbPortAdelaideRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
