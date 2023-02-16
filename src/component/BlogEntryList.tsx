import {BlogEntry} from "../model/BlogEntry";
import BlogSingleEntry from "./BlogSingleEntry";

type BlogEntryListProps = {
    entries: BlogEntry[]
}

export default function BlogEntryList(props: BlogEntryListProps) {
    const entriesAsJsx = props.entries.map(e => <BlogSingleEntry entry={e} />)

    return (
        <main>
            {entriesAsJsx}
        </main>
    );
}