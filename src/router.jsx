import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomeDashboard from "./pages/Home";
import StockItems from "./pages/Stock/StockItems";
import StockAll from "./pages/Stock/StockAll/StockAll";
import StockNewItens from "./pages/Stock/StockNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeDashboard />,
      },
      {
        path: "stockItems", // ❗ sem a barra no início
        element: <StockItems />,
        children: [
          { index: true, element: <StockAll /> }, // mostra “All” por padrão
          { path: "all", element: <StockAll /> },
          { path: "new", element: <StockNewItens /> },
        ],
      },
    ],
  },
]);

export default router;