import S from "./sidebar.style.ts";

const sidebarOptions = [
  { name: "Игры", href: "/admin/games" },
];

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.SidebarLogo>GameKeys</S.SidebarLogo>
      <S.SidebarOptions>
        {sidebarOptions.map((option) => (
          <S.SidebarOption key={option.name} to={option.href}>{option.name}</S.SidebarOption>
        ))}
      </S.SidebarOptions>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
