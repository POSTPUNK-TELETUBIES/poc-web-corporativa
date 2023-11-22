import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NavSubmenu from ".";
import userEvent from "@testing-library/user-event";

describe.concurrent('Nav submenu', ()=>{
  it('renders', async ()=>{
    const handleClick = vi.fn()

    const items = Array
      .from({length: 4})
      .map((_, index)=>({
        children: `Item ${index}`,
        key: index,
        'data-testid': 'item'
      }))
  

    const labelText = "Test header"

    
    const { getAllByTestId } =render(<NavSubmenu 
      onClick={handleClick}
      label={labelText} 
      items={items}/>
    )
    
    
    expect(getAllByTestId('item').length).toBe(items.length)

    await userEvent.click(screen.getByText(labelText))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
