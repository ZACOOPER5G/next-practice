import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <Link href="/listings" >See Next Listings</Link>
      <Footer />
    </div>
  )
};
