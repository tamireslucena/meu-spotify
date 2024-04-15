import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import GreenButton from ".";

describe("components | GreenButton", () => {
  it("should display a button role element", async () => {
    // ARRANGE
    const label = "test";
    const mockOnClick = jest.fn();
    render(<GreenButton label={label} onClick={mockOnClick} />);

    // ACT
    const button = await screen.findByRole("button");

    // ASSERT
    expect(button).toBeDefined();
  });

  it("should display the label as expected", async () => {
    // ARRANGE
    const label = "test";
    const mockOnClick = jest.fn();
    render(<GreenButton label={label} onClick={mockOnClick} />);

    // ACT
    const text = screen.getByText(label);

    // ASSERT
    expect(text).toBeInTheDocument();
  });

  it("should call the expected method when clicking the button", async () => {
    // ARRANGE
    const label = "test";
    const mockOnClick = jest.fn();
    render(<GreenButton label={label} onClick={mockOnClick} />);

    // ACT
    const button = await screen.findByRole("button");
    await userEvent.click(button);

    // ASSERT
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
