import {render} from "@testing-library/react-native";
import {Title} from "@/components";

describe('Title Component', () => {
  it('should be render with correctly', () => {
    const { getByTestId } = render(<Title title={'Hello World!'} />);

    const title = getByTestId('title');

    expect(title).toBeDefined();
  })
})
