import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";

describe('login page', () => {

    test('correct email', () => {
        render(renderWithRouter('/login'));
        const login = screen.getByTestId('email-input')
        userEvent.type(login, 'test@test.com')
        expect(screen.queryByTestId('email-error')).toBeNull();
    });

    test('uncorrected login', () => {
        render(renderWithRouter('/login'));
        const login = screen.getByTestId('email-input')
        const submit = screen.getByTestId('submit-button')
        userEvent.type(login, 'test.test.coms')
        userEvent.click(submit)
        expect(screen.getByTestId('email-error')).toBeInTheDocument();
    });

    test('correct password', () => {
        render(renderWithRouter('/login'));
        const password = screen.getByTestId('password-input')
        userEvent.type(password, '1234qwe')
        expect(screen.queryByTestId('password-error')).toBeNull();
    });

    test('empty password', () => {
        render(renderWithRouter('/login'));
        const submit = screen.getByTestId('submit-button')
        userEvent.click(submit)
        expect(screen.getByTestId('password-error')).toBeInTheDocument();
    });


    test('correct data and redirect to dashboard', () => {
        render(renderWithRouter('/login'));
        const login = screen.getByTestId('email-input');
        const password = screen.getByTestId('password-input');
        const submit = screen.getByTestId('submit-button');
        userEvent.type(login, 'test@gmail.com');
        userEvent.type(password, '1234qwe');
        userEvent.click(submit);
        expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    });
})