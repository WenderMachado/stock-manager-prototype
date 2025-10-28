import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomeDashboard from "./pages/HomeDashboard";
import StockItems from "./pages/StockItems";

const router = createBrowserRouter([
{
path:"/",
element: <RootLayout />,
children:[
    {
      index: true, 
      element: <HomeDashboard />
    },
    {
      path: "/stockItems",
      element: <StockItems/ >
    },
  ]
}



])

export default router