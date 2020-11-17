import * as React from "react";
import { Button, Div } from "@vkontakte/vkui";
import { Icon16Add, Icon24Camera, Icon24Shuffle } from "@vkontakte/icons";

export default {
  title: "Blocks/Button",
  component: Button,
};

export function Default({ text, ...buttonProps }) {
  return (
    <Div>
      <Button {...buttonProps}>{text}</Button>
    </Div>
  );
}

Default.args = {
  text: "button text",
  mode: "primary",
  stretched: false,
  size: "m",
};

Default.argTypes = {
  mode: {
    control: {
      type: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "outline",
        "commerce",
        "destructive",
        "overlay_primary",
        "overlay_secondary",
        "overlay_outline",
      ],
    },
  },
  size: {
    control: {
      type: "select",
      options: ["s", "m", "l"],
    },
  },
};

export function ButtonTypes() {
  return (
    <>
      <Div>
        <Button>Primary</Button>
      </Div>
      <Div>
        <Button mode="secondary">Secondary</Button>
      </Div>
      <Div>
        <Button mode="tertiary">Tertiary</Button>
      </Div>
      <Div>
        <Button mode="outline">Outline</Button>
      </Div>
      <Div>
        <Button mode="commerce">Commerce</Button>
      </Div>
      <Div>
        <Button mode="destructive">Destructive</Button>
      </Div>
      <Div style={{ background: "#232323" }}>
        <Button mode="overlay_primary">Overlay Primary</Button>
      </Div>
      <Div style={{ background: "#232323" }}>
        <Button mode="overlay_secondary">Overlay Secondary</Button>
      </Div>
      <Div style={{ background: "#232323" }}>
        <Button mode="overlay_outline">Overlay Outline</Button>
      </Div>
    </>
  );
}

export function ButtonSizes() {
  return (
    <>
      <Div>
        <Button size="s">Small</Button>
      </Div>
      <Div>
        <Button>Medium</Button>
      </Div>
      <Div>
        <Button size="l">Large</Button>
      </Div>
    </>
  );
}

export function ButtonStretch() {
  return (
    <>
      <Div>
        <Button size="l">No stretch</Button>
      </Div>
      <Div style={{ display: "flex" }}>
        <Button size="l" stretched style={{ marginRight: 8 }}>
          Stretched
        </Button>
        <Button size="l" stretched mode="secondary">
          Stretched
        </Button>
      </Div>
    </>
  );
}

export function ButtonWithIcons() {
  return (
    <>
      <Div>
        <Button before={<Icon16Add />}>Add item</Button>
      </Div>
      <Div>
        <Button before={<Icon24Camera />} size="l">
          Take a photo
        </Button>
      </Div>
      <Div>
        <Button mode="secondary" before={<Icon24Shuffle />} size="l">
          Shuffle
        </Button>
      </Div>
    </>
  );
}

export function ButtonLink() {
  return (
    <Div>
      <Button href="#">I am link</Button>
    </Div>
  );
}
