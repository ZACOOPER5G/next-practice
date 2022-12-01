import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div >
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <p className={styles.text} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <Link href="/listings" className={styles.btn}>See Next Listings</Link>
    </div>
  )
};
