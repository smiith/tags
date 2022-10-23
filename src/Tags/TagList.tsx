import React from 'react';
import { useTagStore } from './hooks';
import { Tag } from './Tag';

export const TagList = () => {
	const { tags, removeTagByIndex } = useTagStore();
	return (
		<ul>
			{tags.map((tag, index) => (
				<Tag key={`${tag}${index}`} tag={tag} onClick={() => removeTagByIndex(index)} />
			))}
		</ul>
	);
};
