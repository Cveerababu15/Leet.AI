# Leet.AI

Leet.AI is a React web application that turns any LeetCode problem into a structured learning guide using Google Gemini.

Paste a problem statement, choose a programming language, and the app returns:

- Problem category (Arrays, Dynamic Programming, Graphs, and more)
- Multiple solution approaches
- Best approach with time and space complexity
- Step-by-step explanation
- Dry run with a worked example
- Working code in five languages
- Tips, patterns, and similar problems to practice

Built for students and interview prep learners who want to understand the logic, not only copy the answer.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [How the App Works](#how-the-app-works)
4. [Folder Structure](#folder-structure)
5. [Prerequisites](#prerequisites)
6. [Setup Guide (Step by Step)](#setup-guide-step-by-step)
7. [Available Scripts](#available-scripts)
8. [Routes](#routes)
9. [Gemini API Integration](#gemini-api-integration)
10. [Environment Variables](#environment-variables)
11. [Deployment](#deployment)
12. [Contributing](#contributing)
13. [License and Credits](#license-and-credits)

---

## Features

| Feature | What it does |
| --- | --- |
| AI problem analysis | Sends your LeetCode problem to Google Gemini and returns a structured JSON report |
| Topic detection | Identifies the problem category automatically |
| Multiple approaches | Shows brute force and optimized solution paths |
| Best method | Recommends the strongest approach with complexity analysis |
| Step-by-step guide | Breaks the algorithm into numbered learning steps |
| Dry run | Walks through the algorithm using a concrete example |
| Multi-language code | Generates solutions in JavaScript, Python, Java, C++, and TypeScript |
| Copy to clipboard | Lets you copy any generated code block in one click |
| Tips and patterns | Highlights useful tricks and DSA patterns |
| Similar problems | Suggests related LeetCode problems for practice |
| Responsive UI | Works on desktop and mobile using Tailwind CSS |

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI library | React 19 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Icons | react-icons |
| Markdown support | react-markdown |
| AI provider | Google Gemini (Generative Language API) |
| Language | JavaScript (JSX) |

---

## How the App Works

This section explains the full flow for someone opening the project for the first time.

### Step 1: Open the analyzer

Go to the `/Main` page from the navbar or the Get Started button.

### Step 2: Paste a LeetCode problem

Enter the full problem statement (or a short description such as "LeetCode 1 - Two Sum") into the text area.

### Step 3: Choose a language

Select one of:

- JavaScript
- Python
- Java
- C++
- TypeScript

The AI still generates code for all five languages. Your selection is highlighted in the report.

### Step 4: Click Analyze Problem

The app builds a prompt that asks Gemini to act as a DSA mentor and return JSON in a fixed shape:

```json
{
  "category": "Algorithm Type",
  "methods": ["Method1", "Method2"],
  "best": {
    "approach": "Best Method",
    "time": "O(n)",
    "space": "O(1)",
    "explanation": "Why this is best"
  },
  "steps": ["Step1", "Step2"],
  "dryRun": "Worked example",
  "tips": ["Tip1", "Tip2"],
  "codes": {
    "Python": "...",
    "JavaScript": "...",
    "C++": "...",
    "Java": "...",
    "TypeScript": "..."
  },
  "patterns": ["Pattern1", "Pattern2"],
  "similar": ["Problem1", "Problem2"]
}
```

### Step 5: Gemini responds with structured JSON

The request is handled in `src/utils/geminiAPI.js`.

- Primary model: `gemini-flash-latest`
- Fallback model: `gemini-flash-lite-latest` (used automatically if the first call fails)

### Step 6: The UI renders the report

`src/pages/Main.jsx` parses the JSON and shows collapsible sections:

- Problem Overview
- Recommended Approach
- Applicable Algorithmic Patterns
- Step-by-Step Explanation
- Code Examples
- Tips and Tricks
- Dry Run
- Similar Problems

### Step 7: Learn and practice

Read the explanation, copy the code you need, then use the similar-problem list to practice the same pattern.

---

## Folder Structure

```text
Leet.AI/
|
|-- public/                      # Static files served as-is by Vite
|   |-- vite.svg
|
|-- src/                         # All application source code
|   |
|   |-- assets/                  # Images and static media used in the UI
|   |   |-- leetcode-code.png    # Hero / branding image
|   |   |-- react.svg
|   |
|   |-- components/              # Reusable layout pieces shared across pages
|   |   |-- Navbar.jsx           # Top navigation (desktop + mobile menu)
|   |   |-- Hero.jsx             # Landing page content and "How it works"
|   |   |-- Footer.jsx           # Footer links and social icons
|   |
|   |-- pages/                   # Full page screens mapped to routes
|   |   |-- About.jsx            # About the project
|   |   |-- GetStart.jsx         # Get Started call-to-action page
|   |   |-- Guide.jsx            # Usage guide for new users
|   |   |-- LearnMore.jsx        # Learning philosophy and feature details
|   |   |-- Main.jsx             # Core analyzer: input form + AI report UI
|   |
|   |-- utils/                   # Helper modules (non-UI logic)
|   |   |-- geminiAPI.js         # Gemini API client + model fallback
|   |
|   |-- App.jsx                  # App shell: Navbar, routes, Footer
|   |-- App.css                  # App-level CSS
|   |-- main.jsx                 # React entry point (mounts the app)
|   |-- index.css                # Global styles and Tailwind import
|
|-- .env                         # Local secrets (never commit this file)
|-- .gitignore                   # Files Git should ignore
|-- eslint.config.js             # ESLint rules
|-- index.html                   # HTML shell loaded by the browser
|-- package.json                 # Dependencies and npm scripts
|-- package-lock.json            # Locked dependency versions
|-- vite.config.js               # Vite + React + Tailwind plugins
|-- README.md                    # Project documentation (this file)
```

### What each important folder means

| Path | Purpose |
| --- | --- |
| `src/components/` | Shared UI blocks (Navbar, Hero, Footer). Used on many pages. |
| `src/pages/` | One file per route/screen. `Main.jsx` is the heart of the product. |
| `src/utils/` | Business logic that is not a React component. API calls live here. |
| `src/assets/` | Images imported into components. |
| `public/` | Files available at the site root without going through the module bundler. |

### Suggested reading order for beginners

1. `package.json` - see dependencies and scripts
2. `src/main.jsx` - see how React starts
3. `src/App.jsx` - see routing and layout
4. `src/pages/Main.jsx` - see the analyzer UI and prompt
5. `src/utils/geminiAPI.js` - see how the AI request is made
6. `src/components/Navbar.jsx` and `Footer.jsx` - see shared layout

---

## Prerequisites

Before you start, install:

1. **Node.js** 20.19 or newer (required by Vite 7)
2. **npm** (comes with Node.js)
3. A free **Google Gemini API key** from [Google AI Studio](https://aistudio.google.com/apikey)

Check your versions:

```bash
node -v
npm -v
```

---

## Setup Guide (Step by Step)

### Step 1: Clone the repository

```bash
git clone https://github.com/Cveerababu15/Leet.AI.git
cd Leet.AI
```

### Step 2: Install dependencies

```bash
npm install
```

This downloads React, Vite, Tailwind, React Router, and the other packages listed in `package.json`.

### Step 3: Create your environment file

In the project root, create a file named `.env` and add:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Rules to remember:

- The name must be exactly `VITE_GEMINI_API_KEY`
- Vite only exposes variables that start with `VITE_` to the browser
- Do not commit `.env` to GitHub
- Restart the dev server after changing `.env`

### Step 4: Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Step 5: Test the app

1. Open `/Main`
2. Paste a sample problem, for example:

```text
LeetCode 1 - Two Sum: Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
```

3. Select a language
4. Click **Analyze Problem**
5. Expand each section in the report and try the **Copy** button on the code

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Routes

| Path | File | Description |
| --- | --- | --- |
| `/` | `components/Hero.jsx` | Landing page |
| `/Getstart` | `pages/GetStart.jsx` | Get Started page |
| `/about` | `pages/About.jsx` | About the project |
| `/learn` | `pages/LearnMore.jsx` | Learning philosophy |
| `/Guide` | `pages/Guide.jsx` | Step-by-step usage guide |
| `/Main` | `pages/Main.jsx` | AI problem analyzer |

Routes are defined in `src/App.jsx`.

---

## Gemini API Integration

File: `src/utils/geminiAPI.js`

How the request works:

1. Read the API key from `import.meta.env.VITE_GEMINI_API_KEY`
2. Send a `POST` request to:

```text
https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent
```

3. Pass the key in the `X-Goog-Api-Key` header
4. Ask Gemini for pure JSON using `responseMimeType: "application/json"`
5. Try `gemini-flash-latest` first
6. If that fails, retry with `gemini-flash-lite-latest`
7. Return the response text to `Main.jsx`, which parses and renders it

If something goes wrong (missing key, blocked prompt, network error), a clear error message is shown on the page.

---

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_GEMINI_API_KEY` | Yes | Your Google Gemini API key |

Security notes:

- Keep `.env` local only
- Never paste your real key into README, screenshots, or commits
- If a key is exposed, revoke it in Google AI Studio and create a new one

---

## Deployment

1. Build the app:

```bash
npm run build
```

2. Deploy the `dist/` folder to a static host such as Vercel, Netlify, or GitHub Pages.

3. Set `VITE_GEMINI_API_KEY` in the host environment settings before or during the build.

Because Vite replaces `import.meta.env` values at build time, the key must be available when `npm run build` runs.

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch for your change
3. Make your edits and test locally with `npm run dev`
4. Open a pull request that explains what you changed and why

---

## License and Credits

This project is for learning and portfolio use.

Credits:

- Google Gemini API for AI analysis
- LeetCode for the problem ecosystem the app is designed around
- React, Vite, and Tailwind CSS open source communities

Built by Veera.
