import {fireEvent, render} from "@testing-library/react-native";
import {Container} from "@/components";
import {Text} from "react-native";

describe('Container component', () => {
  it('should be render correctly', () => {
    const { getByTestId } = render(<Container />);

    expect(getByTestId('container'))
  })

  it('should be render correctly with children', () => {
    const Children = () => <Text testID={'children'}>Hello World!</Text>

    const { getByTestId } = render(<Container><Children /></Container>)

    expect(getByTestId('container'))
    expect(getByTestId('children'))
  })

  it('should be change bg color when pressed container', () => {
    const { getByTestId } = render(<Container />);

    const container = getByTestId('container')

    const color = container.props.style.backgroundColor

    fireEvent(container, 'onPress')

    expect(container.props.style.backgroundColor).not.toEqual(color)
  })
})
