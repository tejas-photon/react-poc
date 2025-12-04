import type { Preview } from '@storybook/react-vite'
import "../src/untitled-ui/tokens/generated/raw.css";
import "../src/untitled-ui/tokens/styles/globals.css";
import "./colors.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;