import React from "react";
import ReactDOM from "react-dom";
// import CounterApp from "./components/01-useState/CounterApp";
// import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
// import SimpleForm from "./components/02-useEffect/SimpleForm";
// import { MultipleCustomHooks } from "./components/03-useFetch/MultipleCustomHooks";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import { Layout } from "./components/05-useLayoutEffect/Layout";
// import { MemoHook } from "./components/06-useMemo/MemoHook";
// import { CallbackHook } from "./components/06-useMemo/CallbackHook";
import { Padre } from "./components/07-tarea-memo/Padre";
// import HookApp from "./HookApp";

import "./components/08-useReducer/intro-reducer";

ReactDOM.render(
	// <React.StrictMode>
	<Padre />,
	// </React.StrictMode>,
	document.getElementById("root")
);
