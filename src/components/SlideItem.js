import parse from "html-react-parser";

export default function SlideItem({ post }) {
    return (
        <div className="testipost">
            <div>
                <h1 className="testiheader">{parse(post.title.rendered)}</h1>
            </div>
            <div>
                <blockquote className="testicontent">{parse(post.content.rendered)}</blockquote>
            </div>
        </div>
    );
}
