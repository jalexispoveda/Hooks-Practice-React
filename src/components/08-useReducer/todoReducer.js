export const todoReducer = (state, action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...state, action.payload];
    case "remove":
      console.log(action);
      return [
        ...state.slice(
          state.indexOf((e) => e.id === action.payload),
          1
        ),
      ];
    default:
      return state;
  }
};
