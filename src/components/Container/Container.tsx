import {Pressable} from "react-native";
import {useChangeBackground} from "./Container.hooks";
import type {ContainerProps} from "./Container.types";

import styles from './Container.styles'

const Container = ({children}: ContainerProps) => {
  const {backgroundColor, changeBackground} = useChangeBackground()

  return (
    <Pressable
      testID={'container'}
      style={{...styles.container, ...{backgroundColor}}}
      onPress={() => changeBackground()}>
      {children}
    </Pressable>
  )
}

export default Container
