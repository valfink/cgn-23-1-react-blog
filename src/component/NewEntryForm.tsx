import {BlogEntry} from "../model/BlogEntry";
import {ChangeEvent, FormEvent, useState} from "react";

type NewEntryFormProps = {
    passNewEntry(entry: BlogEntry): void
}

export default function NewEntryForm(props: NewEntryFormProps) {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [date, setDate] = useState("");

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        switch (e.target.dataset.field) {
            case "title":
                setTitle(e.target.value);
                break;
            case "subtitle":
                setSubtitle(e.target.value);
                break;
            case "text":
                setText(e.target.value);
                break;
            case "imageUrl":
                setImageUrl(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
        }
    }

    function handleFormSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        props.passNewEntry({
            title: title,
            subtitle: subtitle,
            text: text,
            imgUrl: imageUrl,
            date: date,
        })
    }

    return (
        <>
            <h2>Add new Blog Entry</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Title: <input data-field={"title"} value={title} onChange={handleInputChange} /></label><br/>
                <label>Subtitle: <input data-field={"subtitle"} value={subtitle} onChange={handleInputChange} /></label><br/>
                <label>Text: <textarea data-field={"text"} value={text} onChange={handleInputChange} /></label><br/>
                <label>Image URL: <input data-field={"imageUrl"} value={imageUrl} type={"url"} onChange={handleInputChange} /></label><br/>
                <label>Date: <input data-field={"date"} value={date} type={"date"} onChange={handleInputChange} /></label><br/>
                <button type={"submit"}>Add entry</button>
            </form>
        </>
    );
}