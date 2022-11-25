import parse from "html-react-parser";

export default function ProjectItem({ post }) {

    console.log(parse(post.title.rendered))
    return (
        <div>
            <div className="project-textwrap">
                <h2>{parse(post.title.rendered)}</h2>
                <p>{parse(post.acf.overview)}</p>
            </div>
        </div>
    );
}