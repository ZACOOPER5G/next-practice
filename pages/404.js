import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const time = setTimeout(() => {
            setTimer(timer - 1);
        }, 1000);

        return () => {
            clearTimeout(time);
        }
    }, [timer]);

    useEffect(() => {
      setTimeout(() => {
        router.push('/');
      }, 5000);
    }, []);

    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link className="link" href="/">homepage</Link></p>
            <p>You will be redirected to the homepage in {timer}</p>
        </div>
    )
}

export default NotFound