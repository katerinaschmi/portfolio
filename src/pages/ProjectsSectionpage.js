import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";

export default function ProjectsSectionpage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.kschmi.dk/wp-json/wp/v2/test?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <section className="page">
            <div>
                <h2>Projects</h2>
                <div>
                    {posts.map(post => (
                        <ProjectItem key={post.id} post={post} />
                    ))} 
                </div>
            </div>
            <Footer/>
        </section>
    );
};