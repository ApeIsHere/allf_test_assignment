function MainMenu() {
  return (
    <nav className="main-menu">
      <ul className="main-menu__modules">
        <li>
          <img src="/main-menu/Oak-tree.svg" alt="White Oak Tree logo" />
        </li>
        <li className="main-menu__module">
          <img src="/main-menu/Company.svg" alt="Breifcase icon" />
        </li>
        <li className="main-menu__module">
          <img src="/main-menu/Search.svg" alt="Search icon" />
        </li>
      </ul>
      <ul className="main-menu__modules">
        <li className="main-menu__module">
          <img src="/main-menu/Settings.svg" alt="Settings icon" />
        </li>
        <li className="main-menu__module">
          <img src="/main-menu/SignOut.svg" alt="Sign out icon" />
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
