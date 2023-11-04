import { create } from '@storybook/theming/create';

import { addons } from '@storybook/manager-api';

import pacificLogo from '../public/pacificoLogo.svg'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandImage: pacificLogo
  }),
});
