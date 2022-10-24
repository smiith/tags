import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App view render snapshot', () => {
	const view = render(<App />);
	expect(view).toMatchSnapshot();
});
