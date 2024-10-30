import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./layouts/main";
import { ProductsPage } from "./pages/Products";
import { AddCartPage } from "./pages/AddCart";
import { RegistrationPage } from "./pages/Registration";

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index={true} element={<ProductsPage/>}></Route>
      <Route path="/addCart" element={<AddCartPage/>}></Route>
      <Route path="/registration" element={<RegistrationPage/>}></Route>
    </Route>
  )
)
const queryClient = new QueryClient();
function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}
export default App