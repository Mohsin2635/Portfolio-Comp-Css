"use client";
import Logo from "../../../public/file (3).png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./nav.module.css";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={styles.first_panal}>
        <Image src={Logo} alt="Logo"  className={styles.logo}></Image>
        <ul className={styles.first_panal_ul}>
          <li>
            <Link href="/" className={styles.first_panal_li}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#About" className={styles.first_panal_li}>
              About
            </Link>
          </li>
          <li>
            <Link href="#Services" className={styles.first_panal_li}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#Projects" className={styles.first_panal_li}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#Contact" className={styles.first_panal_li}>
              Contact
            </Link>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          className={styles.first_panal_svg}
          onClick={toggleSidebar}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>

      {isSidebarOpen && (
        <div className={styles.second_panal}>
          <ul className={styles.second_panal_ul}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34px"
              viewBox="0 -960 960 960"
              width="34px"
              fill="#e8eaed"
              onClick={toggleSidebar}
              className={styles.second_panal_svg}
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            
            <li>
              <Link href="/" className={styles.second_panal_li} onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#About" className={styles.second_panal_li} onClick={toggleSidebar}>
                About
              </Link>
            </li>
            <li>
              <Link href="#Services" className={styles.second_panal_li} onClick={toggleSidebar}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#Projects" className={styles.second_panal_li} onClick={toggleSidebar}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#Contact" className={styles.second_panal_li} onClick={toggleSidebar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

    </>
  );
};

export default Navbar;
