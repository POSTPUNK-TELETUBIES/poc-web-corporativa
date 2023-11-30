import { Dispatch, SetStateAction, useContext } from "react"
import { contextMenu } from "../context"

export default function useMenu(): [string | undefined, Dispatch<SetStateAction<string | undefined>>]{
  const { currentMenu, setCurrentMenu } = useContext(contextMenu)

  if(!setCurrentMenu)
    throw new Error('Context not defined')

  return [currentMenu, setCurrentMenu ]
}

