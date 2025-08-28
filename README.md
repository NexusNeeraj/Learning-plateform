# A-Level Economics Learning Platform (MVP)

This is a minimal learning platform built for **A-Level Economics (AQA Paper 3 MCQs)**.  
It includes:

- **Multiple Choice Questions (MCQs)**
- **End-of-quiz automated scoring**
- **Adaptive difficulty engine** (serves harder questions as students improve)
- **Student dashboard** (shows level reached, score trends, and weak areas)

---

## 🚀 Features

1. **Quiz System**
   - Students answer multiple choice questions.
   - Next question button appears until quiz completion.

2. **Adaptive Engine**
   - Questions get harder as students answer correctly.
   - Tracks difficulty level: Easy → Medium → Hard.

3. **Automated Scoring**
   - After quiz submission, students immediately see:
     - Final score (correct / total).
     - Weak topics (based on mistakes).
     - Score progression per question.

4. **Student Dashboard**
   - Displays:
     - Total Score
     - Level achieved
     - Trend chart of performance
     - List of weak areas

---

## 🛠️ Tech Stack

- **React + Vite** (Frontend)
- **TailwindCSS** (Styling)
- **Framer Motion** (Animations)
- **Recharts** (Charts/Graphs)

---

## 📦 Installation & Setup

1. Clone this repo:
   ```bash
        git clone https://github.com/your-username/learning-plateform.git
        cd learning-plateform
    ````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:5173
   ```

---

## 📘 Question Bank

Currently, the quiz pulls questions from a sample dataset (mock AQA Paper 3 MCQs).
You can add more in `src/questions.js`.

---

## 📊 Future Improvements

* Authentication system for multiple students
* Saving progress across sessions
* Admin panel to add/import new questions
* More advanced adaptive engine (topic-wise)

---

## 📚 Reference

* [AQA A-Level Economics Past Papers (Paper 3)](https://www.physicsandmathstutor.com/past-papers/a-level-economics/aqa-paper-3/)

---

## 👨‍💻 Author

Built by Neeraj Gupta.

```