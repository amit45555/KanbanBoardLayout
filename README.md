# KanbanBoardLayout
Created with CodeSandbox
# Kanban Board Application

This project is a Kanban Board built with **ReactJS**, allowing users to manage tasks across different stages: To Do, In Progress, Peer Review, and Done. It includes drag-and-drop functionality, a search feature, and task creation capabilities.

## Features

### Core Features
- **Drag-and-Drop Functionality**: Move tasks between columns using drag-and-drop.
- **Task Management**:
  - Add new tasks to the "To Do" column.
  - View tasks in a visually organized way across four columns: To Do, In Progress, Peer Review, and Done.
- **Search Functionality**: Filter tasks by title in all columns.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

### Optional Features
- Consumes data from local storage for persistence.
- Includes modular components for reusability and maintainability.

## Tech Stack

- **Frontend**: ReactJS
- **State Management**: Redux Toolkit
- **Styling**: Plain CSS
- **Drag-and-Drop**: `react-beautiful-dnd`

## Folder Structure

```plaintext
src/
├── components/
│   ├── Board.js         # Main board component
│   ├── Column.js        # Individual column component
│   ├── TaskCard.js      # Task card component
│   ├── SearchBar.js     # Search bar component
│   ├── TaskModal.js     # Modal for adding tasks
├── redux/
│   ├── store.js         # Redux store setup
│   ├── taskSlice.js     # Task-related reducers and actions
├── App.js               # Entry point for the app
├── index.js             # React DOM render file
├── styles.css           # Global CSS styles
```

## Setup Instructions

### Prerequisites
- Node.js installed (v14 or higher recommended)
- Package manager: npm or yarn

### Steps to Run the Application
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kanban-board
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```

### Build for Production
To create a production build:
```bash
npm run build
# or
yarn build
```

## Usage

### Adding a Task
1. Click the floating "Add Task" button.
2. Fill in the task title and description.
3. Submit the form to add the task to the "To Do" column.

### Moving Tasks
1. Drag a task card from one column to another.
2. Drop the task card in the desired column.

### Searching for Tasks
1. Type a keyword into the search bar.
2. The board will display tasks matching the keyword.

## Dependencies

- **ReactJS**: Library for building user interfaces.
- **Redux Toolkit**: State management.
- **react-beautiful-dnd**: Drag-and-drop functionality.

## Best Practices

- Follows modular design for components.
- Implements Redux for centralized state management.
- Fully responsive design using plain CSS.
- Includes comments and meaningful variable names for better code readability.

## Future Improvements

- Add user authentication.
- Integrate with an external database for persistence.
- Enhance task management with due dates and priority levels.

## Contact
For any questions or feedback, please reach out to [Your Name or Email].

