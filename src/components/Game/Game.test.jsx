import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event/';
import { MemoryRouter } from 'react-router-dom';
import Game from './Game';

describe('Game tests', () => {
	test('should render with a title and a button', () => {
		render(
			<MemoryRouter>
				<Game />
			</MemoryRouter>
		);

		expect(screen.queryByRole('heading')).toBeInTheDocument();
		expect(screen.queryByTestId('easy-button')).toBeInTheDocument();
		expect(screen.queryByTestId('hard-button')).toBeInTheDocument();
	});
	test('should start game on button click', async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter>
				<Game />
			</MemoryRouter>
		);

		await user.click(expect(screen.queryByTestId('easy-button')));

		expect(screen.queryByRole('heading')).not.toBeInTheDocument();
		expect(screen.queryByTestId('easy-button')).not.toBeInTheDocument();
		expect(screen.queryByTestId('hard-button')).not.toBeInTheDocument();
	});
	test('should start game on button click', async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter>
				<Game />
			</MemoryRouter>
		);

		await user.click(expect(screen.queryByTestId('hard-button')));

		expect(screen.queryByRole('heading')).not.toBeInTheDocument();
		expect(screen.queryByTestId('easy-button')).not.toBeInTheDocument();
		expect(screen.queryByTestId('hard-button')).not.toBeInTheDocument();
	});
});
