import React, { useState } from "react";
import { updateContent } from "./contentful"; // Assume you have a contentful.js file

const ModifyPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    // Call the Contentful update method to modify content
    updateContent(title, content);
    // Add logic for success or error handling
  };

  return (
    <div>
      <h1>Modify Page</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ModifyPage;
