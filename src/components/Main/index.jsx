import { Outlet } from "react-router-dom";
import styled from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styled.main}>
      <Outlet />
    </main>
  );
};
