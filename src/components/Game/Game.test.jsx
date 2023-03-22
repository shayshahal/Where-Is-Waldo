import Game from './Game';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event/';

describe('Game tests', () => {
    test('should render with a title and a button', ()=>{
        render(<MemoryRouter>
            <Game/>
        </MemoryRouter>);

        expect(screen.queryByRole('heading')).toBeInTheDocument();
        expect(screen.queryByTestId('easy-button')).toBeInTheDocument();
        expect(screen.queryByTestId('hard-button')).toBeInTheDocument();
    })
	test('should start game on button click', async() => {
        const user = userEvent.setup()
		render(<MemoryRouter>
            <Game/>
        </MemoryRouter>);

        await user.click(expect(screen.queryByTestId('easy-button')).toBeInTheDocument());

        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
        expect(screen.queryByTestId('easy-button')).not.toBeInTheDocument();
        expect(screen.queryByTestId('hard-button')).not.toBeInTheDocument();
	});
});
