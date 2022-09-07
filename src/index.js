import React from "react";
import ReactDOM from "react-dom";
// import CounterApp from "./components/01-useState/CounterApp";
// import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
// import SimpleForm from "./components/02-useEffect/SimpleForm";
// import { MultipleCustomHooks } from "./components/03-useFetch/MultipleCustomHooks";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
import { Layout } from "./components/05-useLayoutEffect/Layout";
// import HookApp from "./HookApp";

ReactDOM.render(
	// <React.StrictMode>
	<Layout />,
	// </React.StrictMode>,
	document.getElementById("root")
);
