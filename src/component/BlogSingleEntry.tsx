import {BlogEntry} from "../model/BlogEntry";
import "./BlogSingleEntry.css";

type BlogSingleEntryProps = {
    entry: BlogEntry
}

export default function BlogSingleEntry(props: BlogSingleEntryProps) {
    return (
        <article className={"blog-entry"}>
            <header>
                <h2>{props.entry.title}</h2>
                <h3>{props.entry.subtitle}</h3>
            </header>
            <p>{props.entry.text}</p>
            <footer>Date: {props.entry.date}</footer>
            <img src={props.entry.imgUrl} alt={"Blog entry"} />
        </article>
    );
}