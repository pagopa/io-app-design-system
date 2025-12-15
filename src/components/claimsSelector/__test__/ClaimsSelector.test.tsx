import React from "react";
import { render } from "@testing-library/react-native";
import { ClaimsSelector } from "../ClaimsSelector";

describe("ClaimsSelector", () => {
  it("ClaimsSelector Snapshot (controlled)", () => {
    const { toJSON } = render(
      <ClaimsSelector
        title="Patente di guida"
        selectedItemIds={["name"]}
        items={[
          {
            id: "name",
            value: "Mario Rossi",
            description: "Nome e cognome"
          }
        ]}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("ClaimsSelector Snapshot (uncontrolled)", () => {
    const { toJSON } = render(
      <ClaimsSelector
        title="Patente di guida"
        items={[
          {
            id: "name",
            value: "Mario Rossi",
            description: "Nome e cognome"
          }
        ]}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("ClaimsSelector Snapshot (unselectable items)", () => {
    const { toJSON } = render(
      <ClaimsSelector
        title="Patente di guida"
        selectionEnabled={false}
        items={[
          {
            id: "name",
            value: "Mario Rossi",
            description: "Nome e cognome"
          }
        ]}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("ClaimsSelector Snapshot (custom component)", () => {
    const { toJSON } = render(
      <ClaimsSelector
        title="Patente di guida"
        selectionEnabled={false}
        items={[
          {
            id: "name",
            value: "data:image/png;base64,iVBORw0KGgoAAAANSUh",
            description: "Nome e cognome",
            type: "image"
          }
        ]}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
