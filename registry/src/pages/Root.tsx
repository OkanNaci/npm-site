import { Outlet } from "react-router-dom";
import Header from "../components/header";
export default function Root() {
  return (
    <div className="container mx-auto px-20 ">
      <Header />
      <Outlet />
    </div>
  );
}
