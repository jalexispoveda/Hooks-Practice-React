import React from "react";
import useFetch from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://breakingbadapi.com/api/quotes/1"
  );

  // !!null = false
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

      <button className="btn btn-primary">Hola</button>
    </>
  );
};
