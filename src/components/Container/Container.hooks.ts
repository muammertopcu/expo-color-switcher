import {useLayoutEffect, useState} from "react";
import {colorGenerator} from "@/utils";

export const useChangeBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>()

  useLayoutEffect(() => {
    setBackgroundColor(colorGenerator())
  }, []);

  const changeBackground = () => {
    setBackgroundColor(colorGenerator())
  }

  return {backgroundColor, changeBackground}
}
