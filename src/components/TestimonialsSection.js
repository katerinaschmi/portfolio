import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideItem from "../components/SlideItem";
import { useEffect, useState } from "react";

export default function TestimonialsSection({ options }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.kschmi.dk/wp-json/wp/v2/testimonials");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);
    return (
        <section className="testimonialsec">
            <h1 className="mainheader">Testimonials</h1>
            <Slider {...options} className="slider">
                {posts.slice(0).reverse().map(post => (
                    <SlideItem key={post.id} post={post} />
                ))}
            </Slider>
        </section>
    );
}