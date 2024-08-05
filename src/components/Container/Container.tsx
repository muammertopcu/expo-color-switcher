import {View} from "react-native";
import type {ContainerProps} from "./Container.types";

import styles from './Container.styles'

const Container = ({children}: ContainerProps) => {
  return (
    <View testID={'container'} style={styles.container}>
      {children}
    </View>
  )
}

export default Container
