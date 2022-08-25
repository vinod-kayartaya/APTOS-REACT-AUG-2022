import { render, screen, fireEvent } from '@testing-library/react';
import Greetings from './Greetings';

describe('Greetings Components Tests', () => {
    test('The component must render with the default message', async () => {
        await render(<Greetings />);
        const elem = screen.getByTestId('msg');
        // assertions
        expect(elem).toHaveTextContent('Hello, World!');
    });

    test('The component must render with a custom message', async () => {
        await render(<Greetings message='React is Awesome!' />);
        const elem = screen.getByTestId('msg');
        // assertions
        expect(elem).toHaveTextContent('React is Awesome!');
    });

    test('Clicking on "change to uppercase" button should chnage the mssage', async () => {
        await render(<Greetings message='React is Awesome!' />);
        await fireEvent.click(screen.getByTestId('btnChangeToUpper'));
        const elem = screen.getByTestId('msg');
        // assertions
        expect(elem).toHaveTextContent('REACT IS AWESOME!');
    });
});

export {};
