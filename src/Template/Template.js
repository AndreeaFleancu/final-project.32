import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const style ={
    background: "green",
}

export function Template() {
  return (
    <div>
      <Navbar />
      <div style={style}>
        <Outlet />
      </div>
      <p>Footer</p>
    </div>
  );
}
