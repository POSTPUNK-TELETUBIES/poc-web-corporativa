import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import SubMenuButton from "./SubMenuButton";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe.concurrent("SubMenuButton", () => {
  const handleClick = vi.fn();
  const { getByText } = render(<SubMenuButton label="Menu" onClick={handleClick} />);

  it("renders label and toggle icon", () => {
    const labelElement = getByText("Menu");

    expect(labelElement).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const toggleIcon = getByText("Menu");
  
    await userEvent.click(toggleIcon);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
