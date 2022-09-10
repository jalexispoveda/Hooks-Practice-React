export const todoReducer = (state, action) => {
	switch (action.type) {
		case "ABC":
			throw new Error("ABC action no esta implementada");
		case "add":
			return [...state, action.payload];
		case "remove":
			console.log(action);
			return [
				...state.slice(
					state.indexOf(e => e.id === action.payload),
					1
				),
			];
		default:
			return state;
	}
};
