export const menu = () => {
  const menuAdmin = [
    { separator: true },
    {
      label: "Principal",
      items: [
        {
          label: "Facultades",
          icon: "pi pi-users",
          route: "/admin/facultades",
        },
        {
          label: "Programas",
          icon: "pi pi-trophy",
          route: "/admin/programas",
        },

        {
          label: "Grupos",
          icon: "pi pi-chart-line",
          route: "/admin/grupos",
        },
        {
          label: "Semilleros",
          icon: "pi pi-star",
          route: "/admin/semilleros",
        },
      ],
    },

    { separator: true },
    {
      label: "Administración",
      items: [
        {
          label: "Cerrar sesión",
          icon: "pi pi-sign-out",
          action: "cerrar_sesión",
          route: "/logout",
        },
      ],
    },
  ];
  return menuAdmin;
};
