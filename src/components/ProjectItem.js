import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function ProjectItem({ post }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(post.slug)}>
            <div className="project-textwrap">
                <h2>{parse(post.title.rendered)}</h2>
                <p>{parse(post.acf.overview)}</p>
            </div>
        </div>
    );
}