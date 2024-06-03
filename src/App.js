import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Bookings from "./pages/Bookings";
import { MainLayout } from "./pages/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookings" element={<Bookings />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
