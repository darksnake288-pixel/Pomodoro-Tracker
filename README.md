
---

# ⏱️ React Timer & Stopwatch Application

A sleek, responsive, and dynamic Timer / Stopwatch application built using **React**, **TypeScript**, and **Tailwind CSS**. This project showcases efficient state management, proper handling of side-effects with `useEffect`, and dynamic UI updating using CSS transitions.

Project URL: https://roadmap.sh/projects/pomodoro-timer

---

## 🚀 Features

* **Real-time Countdown/Stopwatch**: Precise time tracking handling seconds and minutes format (`MM:SS`).
* **Dynamic Progress Bar**: Visual indication of elapsed time using Tailwind CSS dynamic styling.
* **Interval Cleanup**: Memory-safe implementation leveraging React's `useEffect` cleanup return function to prevent memory leaks.
* **Controls**: Start, Pause, and Reset functionality.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons & Formatting:** Custom Utility Functions (`padStart`)

---

## 💡 Code Highlights

```tsx
// Managing the timer interval safely with useEffect cleanup
useEffect(() => {
  let interval: NodeJS.Timeout | null = null;

  if (isRunning) {
    interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  }

  return () => {
    if (interval) clearInterval(interval);
  };
}, [isRunning]);

```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/timer-app.git

```


2. **Navigate to the project directory:**
```bash
cd timer-app

```


3. **Install dependencies:**
```bash
npm install

```


4. **Run the development server:**
```bash
npm run dev

```



---

## 📬 Author

Created by **Youssef (Joe)** — [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)
