import React from "react";
import './blog.css';
import Post from './Post'; // Importing the Post component

function App() {
    return (
        <div className="App">
            <Post
                username="JohnDoe"
                message="This is a sample post."
                timestamp="May 7, 2024"
                link="https://example.com"
                image={require('../images/prince.jpg')} // Assuming prince.jpg is the correct image path
            />
            <Post
                username="JaneDoe"
                message="Another post here."
                timestamp="May 8, 2024"
                link="https://example.com/another"
                image={require('../images/lol.jpg')} // Assuming another.jpg is the correct image path
            />
        </div>
    );
}

export default App;
