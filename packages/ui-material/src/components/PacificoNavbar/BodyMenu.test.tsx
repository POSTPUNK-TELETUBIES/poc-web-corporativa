import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import BodyMenu from "./BodyMenu";
import { Column } from "./types";

describe("BodyMenu", () => {
  const columns: Column[] = [
    {
      groups: [
        {
          label: "Group 1",
          items: [{
            label: "Item 1",
            url: "#",
          },
          {
            label: "Item 2",
            items: [{
              label: "Sub Item 1",
              url: "#",
            }]
          }]
        }
      ],
    },
  ];

  it("renders the BodyMenu component", () => {
    const { getByText } = render(<BodyMenu columns={columns} />);
    const groupElement = getByText("Group 1");

    expect(groupElement).toBeInTheDocument();
  });
});

 