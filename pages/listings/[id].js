export const getStaticPaths = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();

    let paths = data.map((item) => {
        return {
            params: { id: item.id.toString() }
        };
    });

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ( context ) => {
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await response.json();

    return {
        props: { listing: data }
    };
};

const Details = ({ listing }) => {
    return (
        <div>
            <h1>{listing.name}</h1>
            <p>{listing.email}</p>
            <p>{listing.website}</p>
        </div>
    )
};

export default Details