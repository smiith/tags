import { useCallback, useEffect, useState } from 'react';
import { stringToTags, tagsToString } from './utils';

export const useHash = () => {
	const [hash, setHash] = useState<string>(() => window.location.hash);

	const handleHashChange = useCallback(() => {
		setHash(window.location.hash);
	}, []);

	useEffect(() => {
		window.addEventListener('hashchange', handleHashChange);
		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, [handleHashChange]);

	const updateHash = useCallback((newHash: string) => (window.location.hash = newHash), []);

	return { hash, updateHash };
};

export const useTagStore = () => {
	const [tags, updateTags] = useState<string[]>([]);

	const { hash, updateHash } = useHash();

	useEffect(() => updateTags(stringToTags(hash)), [hash]);

	const appendTag = (newTag: string) => {
		updateHash(tagsToString([...tags, newTag]));
	};

	const removeTagByIndex = (tagIndex: number) => {
		const newTags = [...tags];
		newTags.splice(tagIndex, 1);
		updateHash(tagsToString(newTags));
	};

	return { tags, appendTag, removeTagByIndex };
};
