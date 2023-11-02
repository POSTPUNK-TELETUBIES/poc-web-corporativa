import { create } from '@storybook/theming/create';

import { addons } from '@storybook/manager-api';


addons.setConfig({
  theme: create({
    base: 'dark',
    brandImage: 
      'https://www.pacifico.com.pe/image/layout_set_logo?img_id=98478195'
  }),
});
