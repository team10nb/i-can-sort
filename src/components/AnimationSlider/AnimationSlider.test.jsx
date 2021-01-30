import { render } from '@testing-library/react';
import AnimationSlider from './AnimationSlider';

it('should match snapshot', () => {
    const mockHandleChange = jest.fn();

    const props = {
        step: 1,
        max: 10,
        handleChange: mockHandleChange,
        value: 5,
    };

    const content = render(<AnimationSlider {...props} />);
    expect(content).toMatchSnapshot();
})