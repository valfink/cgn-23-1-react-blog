import React from 'react';
import './App.css';
import BlogHeader from "./component/BlogHeader";
import {BlogEntry} from "./model/BlogEntry";

function App() {
  const tempEntryList: BlogEntry[] = [{
    title: "Test entry",
    subtitle: "Nice subtitle",
    text: "Hello! This is a very short entry!",
    imgUrl: "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg",
    date: "2023-02-16",
  }];

  return (
    <><BlogHeader /></>
  );
}

export default App;
