import parse from "html-react-parser";

export default function SlideItem({ post }) {
    return (
        <div className="testipost">
            <div>
                <h1 className="testiheader">{parse(post.title.rendered)}</h1>
            </div>
            <div>
                <p className="testicontent">{parse(post.content.rendered)}</p>
            </div>
        </div>
    );
}
