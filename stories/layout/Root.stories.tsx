import * as React from "react";
import { useState } from "react";
import {
  Root,
  View,
  Panel,
  PanelHeader,
  Group,
  CellButton,
} from "@vkontakte/vkui";

export default {
  title: "Layout/Root",
  component: Root,
};

export function Default() {
  const [view, setView] = useState("view1");
  return (
    <Root activeView={view}>
      <View id="view1" activePanel="panel1">
        <Panel id="panel1">
          <PanelHeader>View 1</PanelHeader>
          <Group>
            <CellButton onClick={() => setView("view2")}>
              Open View 2
            </CellButton>
          </Group>
        </Panel>
      </View>
      <View id="view2" activePanel="panel2">
        <Panel id="panel2">
          <PanelHeader>View 2</PanelHeader>
          <Group>
            <CellButton onClick={() => setView("view1")}>
              Open View 1
            </CellButton>
          </Group>
        </Panel>
      </View>
    </Root>
  );
}
