//import { useEffect, useState } from "react";
//import ProgrammingProject from '../components/ProgrammingProject'

//export default function Programmingpage({ options }) {
//    const [posts, setPosts] = useState([]);
//    useEffect(() => {
//      async function getData() {
//            const response = await fetch("https://wordpress.kschmi.dk/wp-json/wp/v2/programming?_embed");
//            const data = await response.json();
//            setPosts(data);
//        }
//        getData();
//    }, []);
//    return (
//        <section className="progrpage">
//            <h1 className="landingheader">Projects</h1>
//            <ProgrammingProject/>
//        </section>
//    );
//}