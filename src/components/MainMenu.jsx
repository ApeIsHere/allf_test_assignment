function MainMenu() {
  return (
    <nav className="main-menu">
      <ul className="main-menu__modules">
        <li className="main-menu__logo">
          <img src="/main-menu/Oak-tree.svg" alt="White Oak Tree logo" />
        </li>
        <button className="main-menu__module">
          <img src="/main-menu/Company.svg" alt="Breifcase icon" />
        </button>
        <button className="main-menu__module">
          <img src="/main-menu/Search.svg" alt="Search icon" />
        </button>
      </ul>
      <ul className="main-menu__modules main-menu__additional">
        <button className="main-menu__module">
          <img src="/main-menu/Settings.svg" alt="Settings icon" />
        </button>
        <button className="main-menu__module">
          <img src="/main-menu/SignOut.svg" alt="Sign out icon" />
        </button>
      </ul>
    </nav>
  );
}

export default MainMenu;
