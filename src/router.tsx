// router.tsx
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout"; // Ваш общий лейаут (если есть)

// Импортируем компоненты для роутов
import SvetloyarovkaPage from "./pages/svetloyarovka/svetloyarovka";
import EvgenevskoePage from "./pages/evgenevskoe/evgenevskoe";
import React from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />, // Опциональный общий лейаут
      children: [
        {
          index: true, // Корневой путь /
          element: <Navigate to="/svetloyarovka" replace />,
        },
        {
          path: "svetloyarovka",
          element: <SvetloyarovkaPage />,
        },
        {
          path: "evgenevskoe",
          element: <EvgenevskoePage />,
        },
        {
          path: "*", // Обработка несуществующих путей
          element: <Navigate to="/svetloyarovka" replace />,
        },
        // Можно добавить другие роуты здесь
      ],
    },
  ],
  {
    basename: "/medical_view",
  }
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
