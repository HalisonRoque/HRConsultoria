import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const Dashboard = React.lazy(() => import("./Dashboard/index"));

export const dashboardRoutes = [
    {
        path: "/",
        element: <Dashboard />,
    },
];