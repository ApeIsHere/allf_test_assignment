function MainBlock() {
  return (
    <main className="main-block">
      <div className="main-block__container">
        <MainBlockTitle />
        <div>Company details</div>
        <div>Contacts</div>
        <div>Photos</div>
      </div>
    </main>
  );
}

export default MainBlock;

function MainBlockTitle() {
  return (
    <div className="main-block__title">
      <img
        className="main-block__title-chevron"
        src="icons/Chevron.svg"
        alt="Chevron arrow left"
      />
      <h1 className="main-block__title-text">Eternal Rest Funeral Home</h1>
      <span className="main-block__title-buttons">
        <button className="main-block__title-button">
          <svg
            className="main-block__title-button-pen"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24112 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.692C3.19085 16.5748 3.125 16.4158 3.125 16.25V12.7589C3.125 12.6768 3.14117 12.5956 3.17258 12.5197C3.20398 12.4439 3.25002 12.375 3.30806 12.317L12.6831 2.94197C12.8003 2.82476 12.9592 2.75891 13.125 2.75891C13.2908 2.75891 13.4497 2.82476 13.5669 2.94197L17.0581 6.43309C17.1753 6.5503 17.2411 6.70927 17.2411 6.87503C17.2411 7.04079 17.1753 7.19976 17.0581 7.31697L7.68306 16.692C7.62502 16.75 7.55612 16.796 7.48029 16.8275C7.40447 16.8589 7.32319 16.875 7.24112 16.875Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.625 5L15 9.375"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.46011 16.8351L3.16479 12.5398"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="main-block__title-button">
          <svg
            className="main-block__title-button-trash"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8748 4.375L3.12476 4.37501"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.125 8.125V13.125"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.875 8.125V13.125"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.125 4.375V3.125C13.125 2.79348 12.9933 2.47554 12.7589 2.24112C12.5245 2.0067 12.2065 1.875 11.875 1.875H8.125C7.79348 1.875 7.47554 2.0067 7.24112 2.24112C7.0067 2.47554 6.875 2.79348 6.875 3.125V4.375"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}
