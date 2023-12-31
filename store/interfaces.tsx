export interface IMessageModal {
  isMessageLoading: boolean;
  showMessageBox: boolean;
  messageResponseStatus: string;
}

export interface INavbar {
  navBurger: boolean;
  navShadow: boolean;
}

export interface IDarkMode{
  darkModeState: boolean;
}

export interface IRoot {
  messageModal: IMessageModal;
  navBar: INavbar;
  darkMode: IDarkMode
}
