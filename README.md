# create-vuedosam

A custom Vue 3 project scaffold CLI. Quickly bootstrap your Vue 3 project with a personalized template using:

```bash
npm create vuedosam@latest
```

---

## 🚀 Features

- Vue 3 + Vite-based template
- Typescript
- Routes
- Preconfigured project structure
- Supports creation in the current directory or a new folder
- Fast and simple setup

---

## 📦 Usage

### Create a new project in a **new folder**:

```bash
npm create vuedosam@latest my-app
```

This will:

1. Create a folder named `my-app`
2. Copy the template files into it

---

### Create a project in the **current directory**:

```bash
npm create vuedosam@latest .
```

This will:

1. Copy the template files into the current folder
2. (Optional) Install dependencies automatically

> ⚠️ Make sure the current directory is empty or ready to receive project files.

---

## 📁 Project Structure

Your new project will have a structure similar to this:

```
my-app/
├── .vscode/
│   └── extensions.json
├── public/
├── src/
│   ├── components/
|   ├── i18n/
|       ├── locales/
|       └── index.ts
|   ├── router/
|       └── index.ts
│   ├── views/
|   ├── App.vue
|   ├── style.css
|   ├── main.ts
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🛠 Requirements

- Node.js 16 or newer
- NPM 7 or newer

---

## 🧩 What's Included

- Vue 3
- Vite
- Optional: additional libraries depending on your template (e.g., Vue Router)
