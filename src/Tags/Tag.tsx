import React from 'react';

interface TagProps {
	tag: string;
	onClick: () => void;
}

export const Tag = ({ tag, onClick }: TagProps) => {
	return <li onClick={onClick}>{tag}</li>;
};
