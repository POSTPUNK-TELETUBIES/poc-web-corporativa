import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import LogoPacifico from "../src/components/icons/LogoPacifico";
import userEvent from "@testing-library/user-event";
import { ConcaveWave } from "../src";

describe.concurrent('icons', ()=>{
  it('logo pacifico', async ({ expect })=>{
    const handleClick = vi.fn()

    const {container} = render(<LogoPacifico onClick={handleClick} />)

    const element = container.firstElementChild

    if(!element)
      throw new Error('There is no children')

    await userEvent.click(element)

    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('waves', async ({ expect })=>{
    const handleClick = vi.fn()

    const {container} = render(<ConcaveWave onClick={handleClick} />)

    const element = container.firstElementChild

    if(!element)
      throw new Error('There is no children')

    await userEvent.click(element)

    expect(handleClick).toHaveBeenCalledOnce()
  })
})
