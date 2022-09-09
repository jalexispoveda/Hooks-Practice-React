const tareas = {
	id: 1,
	todo: "Recolectar la piedra del alma",
	done: false,
};

const initialState = [tareas];

//Si no envian nada envio por default el estado inicial y una accion vacia
const todoReducer = (state = initialState, action = {}) => {
	//Evaluamos la accion
	if (action.type === "[TODO] add todo") {
		//hago copia del estado anterior y le mando el nuevo objeto
		//state.push no se puede usar aqui porque es mala practica mutarlo, debemos crear una copia
		//*con el spread operator
		return [...state, action.payload];
	}

	//reducer siempre debe regresar un estado
	return state;
};

let todos = todoReducer();
//Se lo envio al reducer para que produzca un nuevo estado
const newTodo = {
	id: 2,
	todo: "Bañarse",
	done: false,
};

const addTodoAction = {
	type: "[TODO] add todo",
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
