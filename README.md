# File Viewer Project

This project is a file viewer application that dynamically loads and displays files in a grid view as the user scrolls down. It uses lazy loading for images, enhancing performance, and ensuring a smooth user experience with optimizations for error handling and scroll events.

## Features

- **Lazy Loading**: Files are loaded as the user scrolls down, improving performance and user experience.
- **Grid View**: Files are displayed in a responsive grid layout.
- **Memoized Components**: Prevents unnecessary re-renders of components to improve performance.
- **Error Handling**: Gracefully handles API request failures and displays error messages.
- **Debounced Scroll Event**: Limits the number of times the API is called when the user scrolls.

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Indra211/labellers.git
   cd labellers
   ```

2. Install dependencies

   ```bash
   npm install
   #or
   yarn install
   ```

3. Start the development server

   ```bash
   npm start
   # or
   yarn start
   ```

Open the app in your browser at http://localhost:5173.

# Note

Initially, it may take some time to load images because a free image hosting service is being used.

# Happy Coding
