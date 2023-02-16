import React, {useEffect, useState} from 'react';
import './App.css';
import BlogHeader from "./component/BlogHeader";
import {BlogEntry} from "./model/BlogEntry";
import BlogEntryList from "./component/BlogEntryList";
import NewEntryForm from "./component/NewEntryForm";

function App() {
    const [entryList, setEntryList] = useState<BlogEntry[]>([]);
    useEffect(() => {
        const tempEntry: BlogEntry = {
            title: "Test entry",
            subtitle: "Nice subtitle",
            text: "Hello! This is a very short entry!",
            imgUrl: "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg",
            date: "2023-02-16",
        };
        setEntryList([tempEntry]);
    }, []);

    function addNewEntryToList(entry: BlogEntry) {
        setEntryList(entries => [entry, ...entries]);
    }

    return (
        <div className={"App"}>
            <BlogHeader/>
            <BlogEntryList entries={entryList}/>
            <NewEntryForm
                passNewEntry={addNewEntryToList}
            />
        </div>
    );
}

export default App;
