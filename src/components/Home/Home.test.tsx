import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

describe('Home tests', () => {
	test('should render with a title and a button', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);

		expect(screen.queryByRole('heading')).toBeInTheDocument();
		expect(screen.queryByTestId('easy-button')).toBeInTheDocument();
		expect(screen.queryByTestId('hard-button')).toBeInTheDocument();
	});

	test('should start Home on button click', async () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);
		const user = userEvent.setup();

		await user.click(screen.getByTestId('easy-button'));

		expect(screen.queryByRole('heading')).not.toBeInTheDocument();
		expect(screen.queryByTestId('easy-button')).not.toBeInTheDocument();
		expect(screen.queryByTestId('hard-button')).not.toBeInTheDocument();
	});

	test('should start Home on button click', async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);

		await user.click(screen.getByTestId('easy-button'));

		expect(screen.queryByRole('heading')).not.toBeInTheDocument();
		expect(screen.queryByTestId('easy-button')).not.toBeInTheDocument();
		expect(screen.queryByTestId('hard-button')).not.toBeInTheDocument();
	});

	test.todo('should increment score timer by 1 a second after Home start', async () => {
		vi.useFakeTimers();
		const user = userEvent.setup();
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);

		await user.click(screen.getByTestId('easy-button'));

		expect(screen.getByTestId('time')).toHaveTextContent('2');
	});
});
