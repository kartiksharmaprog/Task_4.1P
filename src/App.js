import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedArticles from "./components/FeaturedArticles";
import Tutorials from "./components/Tutorials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {

  const articles = [
    { title: "React OR Vue", desc: "Description e.g., React OR Vue", author: "Author 1", rating: 5, image: "https://picsum.photos/200/150?random=1" },
    { title: "NodeJS", desc: "Description e.g., NodeJS", author: "Author 2", rating: 4, image: "https://picsum.photos/200/150?random=2" },
    { title: "React Hooks", desc: "Description e.g., React Hooks", author: "Author 3", rating: 3, image: "https://picsum.photos/200/150?random=3" }
  ];

  const tutorials = [
    { title: "JSS", desc: "Description e.g., JSS", user: "username1", rating: 4.5, image: "https://picsum.photos/200/150?random=4" },
    { title: "React Router", desc: "Description e.g., React Router", user: "username2", rating: 5, image: "https://picsum.photos/200/150?random=5" },
    { title: "Express", desc: "Description e.g., Express", user: "username3", rating: 4.9, image: "https://picsum.photos/200/150?random=6" }
  ];

  return (
    <div>
      <Header />
      <Hero />
      <FeaturedArticles articles={articles} />
      <Tutorials tutorials={tutorials} />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
