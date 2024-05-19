import React from "react";

// npx rtl-book serve query-notes.js to work on browser without react project
const Form = () => {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="search">Search</label>
      <input id="search" type="text" />
      <button>Submit</button>
      <button>Cancel</button>
      <button aria-label="sign in">
        <svg />
      </button>
      <button aria-label="sign out">
        <svg />
      </button>
    </div>
  );
};

export default Form;
