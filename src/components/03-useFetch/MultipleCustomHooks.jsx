import React from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://breakingbadapi.com/api/quotes/${state}`
  );

  // !!null = false
  //Se hace necesario cuando retorna un arreglo
  //Si retorna un objeto no
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad Quotes</h1>
      <hr></hr>
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment()}>
        Hola
      </button>
    </>
  );
};
