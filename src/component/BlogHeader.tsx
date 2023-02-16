import "./BlogHeader.css";

export default function BlogHeader() {
    return (
        <>
            <header className={"blog-header"}>
                <img
                    className={"blog-logo"}
                    src={"https://play-lh.googleusercontent.com/cWG9-bk2_zLdKsN9vsYEdbCReVfzgXU6FeHUmLI8a24FoZ05TpOLYXInCQ278FTwCw"}
                    alt={"Blog Logo"}/>
                <h1>My beautiful blog</h1>
            </header>
            <hr className={"blog-hr"} />
        </>
    );
}