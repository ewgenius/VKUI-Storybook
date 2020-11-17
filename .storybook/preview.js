import "../../VKUI/src/styles/styles.css";
import { Platform } from "@vkontakte/vkui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export { decorators } from "./decorators";

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "VKUI Theme Scheme",
    defaultValue: "bright_light",
    toolbar: {
      items: [
        {
          value: "bright_light",
          title: "Bright Light",
          right: "🌝",
        },
        {
          value: "space_gray",
          right: "🌚",
          title: "Space Gray",
        },
      ],
    },
  },
  platform: {
    name: "Platform",
    description: "VKUI App Platform",
    defaultValue: Platform.VKCOM,
    toolbar: {
      items: [
        {
          value: Platform.VKCOM,
          title: "VKCOM",
        },
        {
          value: Platform.IOS,
          title: "IOS",
        },
        {
          value: Platform.ANDROID,
          title: "ANDROID",
        },
      ],
    },
  },
};
