import React from 'react';
import Tags from './Tags';
import Container from 'react-bootstrap/Container';

function App() {
	return (
		<Container className="p-3">
			<Container className="p-5 mb-4 bg-light rounded-3">
				<h1 className="header">Tags demo</h1>
				<Tags />
				<Tags />
				<Tags />
			</Container>
		</Container>
	);
}

export default App;
