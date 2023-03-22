import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

describe('Nav tests', () => {
	test('should be collapsed on mount', () => {
		render(
			<MemoryRouter>
				<Nav />
			</MemoryRouter>
		);

		expect(screen.getByRole('navigation')).toContainElement(
			screen.getByRole('button')
		);
		expect(screen.queryByTestId('nav-links')).not.toBeInTheDocument();
	});
	test('should be expanded on click', async () => {
		render(
			<MemoryRouter>
				<Nav />
			</MemoryRouter>
		);
		const user = userEvent.setup();

		await user.click(screen.getByRole('button'));

		expect(screen.queryByTestId('nav-links')).toBeInTheDocument();
	});

	test('should be collapsed after two click', async () => {
		render(
			<MemoryRouter>
				<Nav />
			</MemoryRouter>
		);
		const user = userEvent.setup();

		await user.click(screen.getByRole('button'));
		await user.click(screen.getByRole('button'));

		expect(screen.queryByTestId('nav-links')).not.toBeInTheDocument();
	});
});
