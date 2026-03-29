import React, { Suspense, Fragment, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommonLayout from "./components/layout/CommonLayout";

export function RenderRout() {
  return (
    <>
      <Router>
        <Suspense fallback={"....."}>
          <Routes>
            {routes?.map((route, i) => {
              const Layout = route?.layout ?? CommonLayout;
              const Component = route?.element;
              return (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  element={
                    <Layout>
                      <Component />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

const routes = [
  {
    exact: true,
    path: "/",
    element: lazy(() => import("./pages/Home")),
  },
  {
    exact: true,
    path: "/advance-campaign",
    element: lazy(() => import("./pages/AdvanceCampaign")),
  },
  {
    exact: true,
    path: "/campaign/dashboard",
    element: lazy(() => import("./pages/CampaignDashboardPage")),
  },
  {
    exact: true,
    path: "/campaign",
    element: lazy(() => import("./pages/CampaignList")),
  },
];
