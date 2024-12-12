import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {
    todo: [
      { id: "1", title: "Task 1", description: "Description of Task 1" },
      { id: "2", title: "Task 2", description: "Description of Task 2" },
    ],
    inProgress: [],
    peerReview: [],
    done: [],
  },
  searchQuery: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.todo.push(action.payload);
    },
    moveTask: (state, action) => {
      const { source, destination, taskId } = action.payload;

      const taskIndex = state.tasks[source].findIndex(
        (task) => task.id === taskId
      );
      const [task] = state.tasks[source].splice(taskIndex, 1);

      state.tasks[destination].push(task);
    },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, moveTask, updateSearchQuery } = taskSlice.actions;
export default taskSlice.reducer;
