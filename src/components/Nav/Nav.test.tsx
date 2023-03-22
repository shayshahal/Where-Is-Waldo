import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import Nav from './Nav';

describe('Nav tests', () => {
	test('should be collapsed on mount', () => {
		render(<Nav />);

		expect(screen.getByRole('navigation')).toContainElement(
			screen.getByRole('button')
		);
		expect(screen.queryByRole('link', { name: 'Game' })).toHaveLength(0);
	});
	test('should be expanded on click', async () => {
		const user = userEvent.setup();

		await user.click(screen.getByRole('Button'));

		expect(screen.getByRole('navigation').childElementCount).toBe(4);
		expect(screen.queryByRole('link', { name: 'Game' })).toHaveLength(1);
	});

	test('should be collapsed after two click', async () => {
		const user = userEvent.setup();

		await user.click(screen.getByRole('Button'));
		await user.click(screen.getByRole('Button'));

		expect(screen.getByRole('navigation').childElementCount).toBe(1);
		expect(screen.queryByRole('link', { name: 'Game' })).toHaveLength(0);
	});
});
