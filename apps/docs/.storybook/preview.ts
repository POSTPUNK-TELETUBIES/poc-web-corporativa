import type { Preview } from "@storybook/react";

import {withTheme} from '../src/helpers/MUIPacificoTheme'

const preview: Preview = {
  decorators:[withTheme],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
