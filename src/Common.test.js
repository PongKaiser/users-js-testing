import { render, screen } from "@testing-library/react";
import Common from "./Common";

test("test all roles", () => {
  render(<Common />);
  const roles = [
    "link",
    "checkbox",
    "radio",
    "spinbutton",
    "listitem",
    "list",
  ];
  for (const role of roles) {
    const el = screen.getByRole(role);
    expect(el).toBeInTheDocument();
  }
});
