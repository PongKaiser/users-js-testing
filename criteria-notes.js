[
  {
    content:
      'import { render, screen, within } from \'@testing-library/react\';\nimport React, { useState, useEffect } from \'react\';\nfunction CriteriaExample() {\n  const [email, setEmail] = useState(\'abc@abc.com\');\n  return (\n    <div>\n      <h3>Enter text</h3>\n      <div data-testid="image-wrapper">\n        <img src="data.jgp" alt="aldata" />\n      </div>\n      <label htmlFor="email">Email</label>\n      <input\n        id="email"\n        type="text"\n        value={email}\n        onchange={(e) => setEmail(e.target.value)}\n      />\n      <label htmlFor="color">Color</label>\n      <input id="color" type="text" placeholder="Red" />\n      <button title="click when ready">Submit</button>\n    </div>\n  );\n}\nrender(<CriteriaExample />);',
    type: "code",
    id: "0ja7q",
  },
  {
    content:
      'test("test all criteria", () => {\n  render(<CriteriaExample />);\n  const elements = [\n    screen.getByText("Enter text"),\n    screen.getByTestId("image-wrapper"),\n    screen.getByAltText("aldata"),\n    screen.getByLabelText("Email"),\n    screen.getByDisplayValue("abc@abc.com"),\n    screen.getByPlaceholderText("Red"),\n    screen.getByTitle(/click/i)\n  ]\n  for(element of elements){\n    expect(element).toBeInTheDocument();\n  }\n})',
    type: "code",
    id: "gtf9h",
  },
  {
    content:
      'function GetAllExample() {\n  return (\n    <div>\n      <button>Go Back</button>\n      <form aria-label="form">\n        <button>Submit</button>\n        <button>Cancel</button>\n      </form>\n    </div>\n  );\n}\nrender(<GetAllExample />);',
    type: "code",
    id: "82h5n",
  },
  {
    content:
      'test("test getbyall", () => {\n  render(<GetAllExample />);\n  const role = screen.getByRole("form");\n  const roles = within(role).getAllByRole("button");\n  expect(roles).toHaveLength(2)\n})',
    type: "code",
    id: "16ad9",
  },
  {
    content:
      "function FakeApi() {\n  return Promise.resolve(['red, green, blue']);\n}\nrender(<FakeApi />);\nfunction FindExample() {\n  const [colors, setColors] = useState([]);\n  useEffect(() => FakeApi().then((c) => setColors(c)));\n  return (\n    <ul>\n      {colors.map((c, i) => (\n        <li key={i}>{c}</li>\n      ))}\n    </ul>\n  );\n}\nrender(<FindExample />);",
    type: "code",
    id: "nyn7v",
  },
];
