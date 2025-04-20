import { Outlet } from "react-router-dom";

import S from "./adminLayout.style.ts";
import { Sidebar } from "./components/sidebar";

const AdminLayout = () => {
  return (
    <S.LayoutWrapper>
      <Sidebar />
      <S.LayoutContent>
        <Outlet />
      </S.LayoutContent>
    </S.LayoutWrapper>
  );
};

export default AdminLayout;
