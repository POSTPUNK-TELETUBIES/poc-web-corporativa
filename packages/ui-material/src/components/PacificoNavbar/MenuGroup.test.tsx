import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuGroup from './MenuGroup';
import { describe, expect, it } from 'vitest';

describe('MenuGroup', () => {
  const items = [
    { label: 'Item 1', url: '/item1' },
  ];

  

  it('renders the label and items correctly', () => {
    const { getByText } = render(<MenuGroup label='Menu Group' items={items} />);

    const groupLabel = getByText('Menu Group');
    expect(groupLabel).toBeInTheDocument();

    const item1Link = getByText('Item 1');
    expect(item1Link).toHaveAttribute('href', '/item1');
  });
});
