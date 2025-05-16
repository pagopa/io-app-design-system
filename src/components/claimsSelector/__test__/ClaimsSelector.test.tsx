import React from "react";
import * as TestRenderer from "react-test-renderer";
import { ClaimsSelector } from "../ClaimsSelector";

describe("ClaimsSelector", () => {
  it("ClaimsSelector Snapshot (controlled)", () => {
    const claimsSelector = TestRenderer.create(
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
    expect(claimsSelector).toMatchSnapshot();
  });

  it("ClaimsSelector Snapshot (uncontrolled)", () => {
    const claimsSelector = TestRenderer.create(
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
    expect(claimsSelector).toMatchSnapshot();
  });

  it("ClaimsSelector Snapshot (unselectable items)", () => {
    const claimsSelector = TestRenderer.create(
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
    expect(claimsSelector).toMatchSnapshot();
  });

  it("ClaimsSelector Snapshot (custom component)", () => {
    const claimsSelector = TestRenderer.create(
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
    expect(claimsSelector).toMatchSnapshot();
  });
});
