import React from "react";
import styles from "./Home.module.css";
import ProfileImage from "../../images/profile.jpg";

function Home() {
  return (
    <>
      <div className="container" id="home">
        <div className={`${styles.home} `}>
          <div className={` ${styles.center__items}`}>
            <div className={styles.profile__image}>
              <img src={ProfileImage} alt="Shubham" />
            </div>
            <div>
              <div className={styles.bio}>
                <h2 className={styles.title}>Shubham Choudhury</h2>
                <h3 className={styles.description}>Full Stack Developer</h3>
              </div>
              <div className={styles.social__media}>
                <a href="httpa://instagram.com/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="httpa://linkedin.com/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="httpa://github.com/">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="httpa://twitter.com/">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
