import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Score from './Score';
import { describe, expect, test } from 'vitest';

describe('Score tests', () => {
	test('should render score and amount to be found', () => {
		render(
			<MemoryRouter>
				<Score
					time={0}
					found={2}
					toBeFound={5}
				/>
			</MemoryRouter>
		);

		expect(screen.getByText('00:00:00')).toBeInTheDocument();
		expect(screen.getByText('2/5')).toBeInTheDocument();
	});
});
