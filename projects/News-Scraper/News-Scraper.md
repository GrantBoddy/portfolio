---
title: "QA Wolf Take-Home: News Scraper"
date: 2025-08-02
thumbnail: "/projects/QA_Wolf_Take_Home/wolf_art-thumbnail.png"
tags: ["Node.js", "Playwright", "CLI", "Web Scraping", "Data Visualization", "QA"]
layout: project.njk
github: "https://github.com/GrantBoddy/QA_Wolf_Take_Home"
demo: ""
---

## Tagline

🐺 **QA Wolf News Scraper**  
A terminal adventure in web scraping, data analysis, and QA automation — with a wolfish sense of humor.

---

## Overview

QA Wolf Take-Home is a fully interactive CLI tool that patrols the front page of Hacker News, validating its sort order, analyzing trends, and letting users explore the data through playful and powerful terminal features.

- **Automated web scraping** of Hacker News (100 newest posts)
- **QA validation**: Checks if posts are truly sorted by publish time
- **Data export**: Instantly save results as CSV or JSON
- **Interactive charts**: Visualize domains, categories, and word frequencies in your browser
- **Multiple modes**: Choose between a serious QA experience or a “fun” mode with stats, jokes, and surprises

---

## 🧭 Main Features

| Feature | Description |
|---------|-------------|
| **Sorting Validation** | Scrapes 100 HN articles and checks if they're sorted by timestamp |
| **Normal & Fun QA Modes** | Choose between standard QA stats or playful, quirky analysis |
| **Data Export** | Save your crawl as CSV or JSON for further analysis |
| **Interactive CLI Menu** | Navigate features with a sleek, colorful terminal menu |
| **Charts & Visuals** | View your data in beautiful charts (launches a local web server) |
| **Browser Preview** | Instantly open results in your browser for easy review |

---

## How It Works

1. **Launch the CLI**  
   The program greets you with custom ASCII wolf art and a menu.  
2. **Automated Scraping**  
   Uses Playwright to launch a browser, paginate through Hacker News, and collect 100 articles.
3. **Sorting Validation**  
   Parses timestamps and checks if the articles are sorted from newest to oldest.
4. **Stats & Analysis**  
   - Normal Mode: Presents clean stats (article counts, domain diversity, busiest posting times, etc.)
   - Fun Mode: Adds playful metrics (clickbaitiest headline, domain oddities, and more)
5. **Export & Visualize**  
   - Export results as CSV/JSON
   - Launch a local server to view interactive charts (React + Vite frontend)
   - Open raw results in your browser
6. **All from the Terminal**  
   Every feature is accessible from a single, interactive terminal menu.

---

## 🛠️ Tech Stack & Architecture

- **Node.js** (ESM modules)
- **Playwright** for browser automation & scraping
- **Inquirer** for interactive CLI menus
- **Chalk** for colorful terminal output
- **Open** for launching browsers/files
- **React + Vite** (in `react-wolf-results/`) for data visualization
- **Custom CSV/JSON utilities** for data handling
- **ASCII art** for branding and fun

---

## 🐾 Unique Touches

- **Fun Mode**: Stats with personality! Get the “clickbaitiest” headline, domain weirdness, and even wolf howls.
- **Wolf Branding**: Custom ASCII art and playful copy throughout.
- **Seamless Data Flow**: From scraping to export to visualization, all in one workflow.
- **Robust QA Logic**: Validates sort order, handles pagination, and deals with missing data gracefully.

---

## 🖼️ Screenshots & Visuals

![Screenshot 1](/projects/News-Scraper/images/screenshot-1.png)  
![Screenshot 2](/projects/News-Scraper/images/screenshot-2.png)  
![Screenshot 3](/projects/News-Scraper/images/screenshot-3.png)  
![Screenshot 4](/projects/News-Scraper/images/screenshot-4.png)  
![Screenshot 5](/projects/News-Scraper/images/screenshot-5.png)  
![Screenshot 6](/projects/News-Scraper/images/screenshot-6.png)  
![Screenshot 7](/projects/News-Scraper/images/screenshot-7.png)  
![Screenshot 8](/projects/News-Scraper/images/screenshot-8.png)  
![Screenshot 9](/projects/News-Scraper/images/screenshot-9.png)  
![Screenshot 10](/projects/News-Scraper/images/screenshot-10.png)  
![Screenshot 11](/projects/News-Scraper/images/screenshot-11.png)

---

## Lessons Learned & Challenges

- **Browser automation quirks**: Handling dynamic content and pagination on Hacker News
- **Data integrity**: Ensuring no duplicates and robust timestamp parsing
- **User experience**: Balancing technical QA features with playful, engaging UX
- **Separation of concerns**: Cleanly splitting scraping, analysis, and visualization logic

---

## 📚 Documentation

- [GitHub Repository](https://github.com/GrantBoddy/QA_Wolf_Take_Home)
- See included [README.md](cci:7://file:///c:/Users/17707/Desktop/QA_Wolf_Take_Home/README.md:0:0-0:0) for install and usage instructions

---

## Links

[Button] 🐺 GitHub Repository  
[Button] 📊 Download & Explore

---


