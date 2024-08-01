import { Fragment, useState } from "react";

export default function Header() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isIconFlipped, setIsIconFlipped] = useState(false);
    const handleLoginClick = (e: any) => {
        e.preventDefault();
        setIsIconFlipped(!isIconFlipped);
        setIsModalVisible(!isModalVisible);
      };
    return (
       <Fragment>
         <div className="topHeader">
        <div className="container">
          <button
            className="menuButton"
            type="button"
            onClick="openMobileMenu()"
          >
            <i className="bx bx-menu" />
          </button>
          <div className="logoNav">
            <a href="https://recruit.waemployment.com/">
              <img
                src="./Meta Pro Support_ Facebook and Instagram_files/logo-white.png"
                alt="Logo"
                width="95px"
              />
            </a>
          </div>
          <div className="rightSide">
            <ul>
              <li>
                <a href="https://recruit.waemployment.com/login">Jobs</a>
              </li>
              <li>
                <a href="https://recruit.waemployment.com/login">
                  Areas of Work
                </a>
              </li>
              <li>
                <a href="https://recruit.waemployment.com/login">Locations</a>
              </li>
              <li>
                <a href="https://recruit.waemployment.com/login">
                  Career Programs
                </a>
              </li>
              <li>
                <a href="https://recruit.waemployment.com/login">
                  How We Work
                </a>
              </li>
              <li>
                <a href="https://recruit.waemployment.com/login">Blog</a>
              </li>
            </ul>
            <div className="searchIcon">
              <i className="bx bx-search" />
            </div>
            <a className="login" onClick={handleLoginClick}>
              Log in
              {/*-<i class='bx bx-chevron-down bx-flip-vertical' ></i> */}
              <i
                className={
                  !isIconFlipped
                    ? "bx bx-chevron-down"
                    : "bx bx-chevron-down bx-flip-vertical"
                }
              />
            </a>
          </div>
        </div>
      </div>
      <div className="menuOverlay">
        <button
          className="menuButton"
          type="button"
          onClick="closeMobileMenu()"
        >
          ✕
        </button>
        <ul>
          <li>
            <a href="https://recruit.waemployment.com/login" target="_blank">
              Jobs
            </a>
          </li>
          <li>
            <a href="https://recruit.waemployment.com/login" target="_blank">
              Areas of Work
            </a>
          </li>
          <li>
            <a href="https://recruit.waemployment.com/login" target="_blank">
              Locations
            </a>
          </li>
          <li>
            <a href="https://recruit.waemployment.com/login" target="_blank">
              Career Programs
            </a>
          </li>
          <li>
            <a href="https://recruit.waemployment.com/login" target="_blank">
              How We Work
            </a>
          </li>
          <li>
            <a href="https://recruit.waemployment.com/login" target="_blank">
              Blog
            </a>
          </li>
        </ul>
        <h2>Create Career Profile</h2>
        <p>
          You can create a Career Profile to get job suggestions, prepare for
          the interview process, and more.
        </p>
        <a
          href="https://recruit.waemployment.com/createcareer"
          className="startNow"
        >
          Create Career Profile
        </a>
        <p>Already have a Career Profile?</p>
        <a href="https://recruit.waemployment.com/login" className="login">
          Log in
        </a>
      </div>
      <div className={`login-modal ${isModalVisible ? "visible" : ""}`}>
        <h2>Create Career Profile</h2>
        <p>
          You can create a Career Profile to get job suggestions, prepare for
          the interview process, and more.
        </p>
        <a
          href="https://recruit.waemployment.com/createcareer"
          className="create-career"
        >
          Create Career Profile
        </a>
        <p>Already have a Career Profile?</p>
        <a href="https://recruit.waemployment.com/login" className="login">
          Log in
        </a>
      </div>
       </Fragment>
    )
}