export const todoReducer = (state, action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...state, action.payload];
    case "[TODO] Complete todo":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    case "[TODO] Remove Todo":
      //filter retorna una copia del arreglo, entonces si podemos usarlo
      //RECUERDA: Solo se debe retornar copias del arreglo no mutar el inicial
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
