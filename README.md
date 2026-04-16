# My Profile & CI/CD Learning Project

This is a personal portfolio project designed to showcase my professional background while serving as a hands-on sandbox for mastering **CI/CD (Continuous Integration and Continuous Deployment)** workflows using GitHub Actions.

## 🚀 Project Overview

The goal of this project was to move beyond a static profile and build a modern, automated deployment pipeline. Every change pushed to the repository is automatically tested, built, and deployed, ensuring the live profile is always up-to-date and stable.

## 🛠 Tech Stack

- **Frontend:** React with Next.js
- **Styling:** Material UI (MUI)
- **CI/CD:** GitHub Actions
- **Testing:** Jest
- **Deployment:** Vercel

## ⚙️ CI/CD Pipeline Features

The project utilizes a custom GitHub Actions workflow (`.github/workflows/main.yml`) that automates the following stages:

1.  **Continuous Integration (CI):** - Automatically runs on every push and pull request.
    - Executes `npm run lint` to maintain code standards.
    - Runs the **Jest** test suite to ensure component stability.
2.  **Continuous Deployment (CD):**
    - Triggers automatically after tests pass on the `main` branch.
    - Builds the production-ready Next.js bundle.
    - Deploys the latest version to the hosting environment.

## 📈 Learning Objectives

Through this project, I have gained experience in:
- [x] Writing and configuring YAML-based GitHub Action workflows.
- [x] Automating unit testing within a deployment pipeline.
- [x] Managing environment variables and repository secrets.
- [x] Implementing a "fail-fast" strategy (blocking deployment if tests fail).
