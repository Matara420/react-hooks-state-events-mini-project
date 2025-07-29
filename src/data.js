// src/data.js

const TASKS = [
  {
    text: "Buy groceries",
    category: "Food",
  },
  {
    text: "Walk the dog",
    category: "Chore",
  },
  {
    text: "Do laundry",
    category: "Chore",
  },
  {
    text: "Go to the gym",
    category: "Health",
  },
  {
    text: "Call mom",
    category: "Family",
  },
  {
    text: "Read a book",
    category: "Personal",
  },
  // *** ESSENTIAL for tests ***
  {
    text: "Buy rice",
    category: "Food",
  },
  {
    text: "Build a todo app",
    category: "Code",
  },
];

const CATEGORIES = [
  "All",
  "Food",
  "Chore",
  "Health",
  "Personal",
  "Family",
  // *** ESSENTIAL for tests ***
  "Code",
];

export { TASKS, CATEGORIES };