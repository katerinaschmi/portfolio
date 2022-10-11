import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function ProjectPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `https://wordpress.kschmi.dk/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

    return (
        <div>
            <div>
                <article>
                    <h3>{post.title && parse(post.title.rendered)}</h3>
                    <p>{post.content && parse(post.content.rendered)}</p>
                </article>
            </div>
        </div>
    );
}