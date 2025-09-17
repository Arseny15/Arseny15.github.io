# Portfolio Website 

<!-- Updated: $(date) -->

## Website
You can find the website here: https://arseny15.github.io 


## Features
- Fully responsive design for all devices
- Fetches GitHub repositories dynamically via GitHub API
- Modern UI built with Tailwind CSS
- Optimized for fast performance and SEO
- Hosted on GitHub Pages

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Arseny15/Arseny15.github.io
    cd Arseny15.github.io
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm start
    ```

4. **Build for production:**

    ```bash
    npm run build
    ```

5. **Deploy to GitHub Pages:**

    ```bash
    npm run deploy
    ```

## Folder Structure

```bash
portfolio-website/
├── public/                 # Static assets (accessible in production)
│   ├── assets/             # Image & media assets
│   │   ├── my-image.JPG
│   │   
│   ├── favicon.ico         # Site icon
│   ├── index.html          # Main HTML file
│   ├── robots.txt          # SEO-related configurations
│   └── ...
├── src/                    # React application source files
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx
│   │   └── ...
│   ├── pages/              # Page-specific components
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── CV.tsx
│   │   └── Contact.tsx
│   ├── App.tsx             # Root React component
│   ├── index.css           # Global styles
│   ├── index.tsx           # React entry point
│   └── ...
├── .gitignore              # Git ignore file
├── package.json            # Node.js project metadata
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```


## Tech Stack

- Languages: TypeScript, HTML, CSS, JavaScript
- Frameworks & Libraries: React.js, Tailwind CSS, Node.js
- Tools & Deployment: GitHub Pages, Vite/Webpack, ESLint
