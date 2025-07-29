// src/components/NewTaskForm.js
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  // Ensure this handles the 'Code' category correctly based on its presence in data.js
  const initialCategory = categories.includes("Code") ? "Code" : categories.filter(cat => cat !== "All")[0];
  const [category, setCategory] = useState(initialCategory); 

  const filteredCategories = categories.filter((cat) => cat !== "All");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category }); 
    setText(""); 
    setCategory(initialCategory);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {
            filteredCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;