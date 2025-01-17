import React, { useState } from "react";

const Common = () => {
  const [email, setEmail] = useState("abc@abc.com");
  return (
    <>
      <div>
        <a href="/">Link</a>
        <button>Button</button>
        <img src="" alt="desc" />
        Img
        <input type="checkbox" />
        Checkbox
        <input type="radio" />
        Radio
        <input type="number" />
        SpinButton
        <input type="text" />
        Textbox
        <li>ListItem</li>
        <ul>ListGroup</ul>
      </div>
      <div>
        <h3>Enter text</h3>
        <div data-testid="image-wrapper">
          <img src="data.jgp" alt="aldata" />
        </div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="color">Color</label>
        <input id="color" type="text" placeholder="Red" />
        <button title="click when ready">Submit</button>
      </div>
      <div>
        <form aria-label="form"></form>
        <button>Submit</button>
        <button>Cancel</button>
      </div>
      <div></div>
    </>
  );
};

export default Common;
