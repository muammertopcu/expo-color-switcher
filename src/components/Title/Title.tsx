import {Text} from "react-native";
import {TitleProps} from "./Title.types";

const Title = ({title, ...props}: TitleProps) => {
  return <Text testID={'title'} {...props}>{title}</Text>
}

export default Title
