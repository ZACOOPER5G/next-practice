import Head from "next/head";
import styles from "../../styles/Listings.module.css"

export const getStaticProps = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    return {
        props: {
            listings: data
        }
    };
};

const Listings = ({ listings }) => {
    return (
        <>
            <Head>
                <title>Next List | Listings</title>
            </Head>
            <div>{listings.map(item => (
                <div key={item.id} >
                    <h2 className={styles.single}>{ item.name }</h2>
                </div>
            ))}</div>
        </>
    )
};

export default Listings