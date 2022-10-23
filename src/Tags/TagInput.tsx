import React, { useState } from 'react';
import { useTagStore } from './hooks';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const TagInput = () => {
	const [tagInput, updateTagInput] = useState('');
	const { appendTag } = useTagStore();

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateTagInput(event.target.value);
	};

	const handleOnSubmit = () => {
		const newTag = tagInput.replaceAll(',', '');

		if (newTag.length === 0) {
			return;
		}

		appendTag(newTag);
		updateTagInput('');
	};

	return (
		<Row>
			<Col>
				<InputGroup>
					<Form.Control placeholder="Tag" value={tagInput} onChange={handleOnChange} />
				</InputGroup>
			</Col>
			<Col>
				<Button onClick={handleOnSubmit}>Add Tag</Button>
			</Col>
		</Row>
	);
};
