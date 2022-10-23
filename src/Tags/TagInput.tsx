import React, { useState } from 'react';
import { useTagStore } from './hooks';

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
		<div>
			<input value={tagInput} onChange={handleOnChange} />
			<button onClick={handleOnSubmit}>Add Tag</button>
		</div>
	);
};
