import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const MainLayout: React.FC = () =>{
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}