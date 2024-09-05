# Journal App

## Description

This is a simple journal application built using Next.js 14 and Tailwind CSS. Users can add, edit, and delete journal entries. The application is hosted on Vercel.

## Features

- `Add`, `edit`, and `delete` journal entries.
- Responsive design with Tailwind CSS.
- Tags-based revalidation for fetching updated data.

## Architecture

- **Frontend** : Built with Next.js.
- **Backend**: The app interacts with a mock API hosted on [MockAPI](https://66d6d676006bfbe2e64ec73d.mockapi.io/journal/:journals).
- **Styling**: Tailwind CSS is used for all the UI components.
- **Data Fetching**: Server-side data fetching with `fetch` as per requirement and client-side with Axios.

## Challenges Faced

- **Issue with Refreshing Data**: Initially, there were challenges in refreshing data after a journal added or edited. Using `router.refresh()` worked but had some issues. The problem was resolved by firstly navigate to `/` page then call `router.refresh()`.

  **Code Snippet**

  ```js
  router.push("/");
  router.refresh({ tags: ["journalEntries"] });
  ```

## How to Run the Project Locally

### Prerequisites

- Node.js installed on your local machine.
- Git installed on your local machine.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/lazyDeveloperAkash/journal_app
   ```

2. **Navigate to the project directory :**
   ```bash
   cd journal-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open in browser :** `http://localhost:3000`