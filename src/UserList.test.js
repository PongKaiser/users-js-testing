import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "test", email: "test@test.com" },
    { name: "amy", email: "amy@amy.com" },
  ];
  render(<UserList users={users} />);
  return {
    users,
  };
}
test("render one row per user", () => {
  renderComponent();
  // get URL from below link in the terminal/CMD prompt to see and find elements and
  // it requires only once after showing URL
  // screen.logTestingPlaygroundURL();

  // first approach using data-testid but not recommended
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // second approach using container query and ---> eslint-disable-next-line (add this specific sentence when shows warning/error)
  // const rows = container.querySelectorAll("tbody tr");
  expect(rows).toHaveLength(2);
});

test("render name and email of each user", () => {
  const { users } = renderComponent();
  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
