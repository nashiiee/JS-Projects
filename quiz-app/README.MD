# Quiz App

This is a simple JavaScript Quiz App that displays multiple-choice questions, lets users select answers, and shows the final score at the end. The app is fully client-side and uses vanilla JavaScript, HTML, and CSS.

---

## Features

- Multiple-choice questions
- Only one answer can be selected per question
- Score is displayed at the end
- Easy to add or modify questions in the `quizData` array

---

## How It Works

1. **Quiz Data**
   - All questions and answers are stored in the `quizData` array in `script.js`.
   - Each question object contains:
     - `question`: The question text
     - `a`, `b`, `c`, `d`: The answer options
     - `correct`: The key (`'a'`, `'b'`, `'c'`, or `'d'`) for the correct answer

2. **Rendering Questions**
   - The app displays one question at a time.
   - When the user selects an answer and clicks "Submit", the app checks if the answer is correct and moves to the next question.

3. **Scoring**
   - The score increases by 1 for each correct answer.
   - At the end, the app displays the user's total score out of the number of questions.


## File Structure

```
quiz-app/
├── index.html
├── styles.css
└── script.js
```

---

## Customization

- **Add/Edit Questions:**  
  Edit the `quizData` array in `script.js` to add, remove, or modify questions and answers.

---

## Example

![Quiz App Screenshot](screenshot.png) <!-- Add a screenshot if you have one -->
