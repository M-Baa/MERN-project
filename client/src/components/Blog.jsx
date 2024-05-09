import React from "react";
import './App.css';
import Post from './Post'; // Assuming Post component is in a separate file

function Blog() {
    const posts = [
        {
            username: "John Doe",
            message: "This is the first blog post!",
            timestamp: "2024-05-04",
            link: "hahahahahah",
        },
        {
            username: "Jane Smith",
            message: "Sharing some interesting thoughts...",
            timestamp: "2024-05-03",
            link: "hahahahahah",
        },
        {
            username: "Cool Cat",
            message: "Meow meow! Check out this cool post.",
            timestamp: "2024-05-02",
            link: "hahahahahah",
        },
        {
            username: "Cool Cat",
            message: "Meow meow! Check out this cool post.",
            timestamp: "2024-05-02",
            link: "hahahahahah",
        },
        {
            username: "Cool Cat",
            message: "Meow meow! Check out this cool post.",
            timestamp: "2024-05-02",
            link: "hahahahahah",
        },
        {
            username: "Cool Cat",
            message: "Meow meow! Check out this cool post.",
            timestamp: "2024-05-02",
            link: "hahahahahah",
        },
        {
            username: "Cool Cat",
            message: "Meow meow! Check out this cool post.",
            timestamp: "2024-05-02",
            link: "hahahahahah",
        },
    ];

    return (
        <div className="blog">
            {posts.map((post) => (
                <Post key={post.username} {...post} />
            ))}
        </div>
    );
}

export default Blog;