import { Outlet } from "react-router-dom";

import { Header } from "@/layouts/main/components/header";

import S from "./mainLayout.style.tsx";

const MainLayout = () => {
  return (
    <S.LayoutWrapper>
      <Header/>
      <Outlet/>
    </S.LayoutWrapper>
  );
};

export default MainLayout;
