const TAGS_TOKEN = '#tags=';

export const stringToTags = (inputString: string): string[] => {
	if (inputString.startsWith(TAGS_TOKEN)) {
		const parsedTags = inputString.replace(TAGS_TOKEN, '').split(',');
		if (!parsedTags.includes('')) {
			return parsedTags;
		}
	}
	return [];
};

export const tagsToString = (tags: string[]): string => `${TAGS_TOKEN}${tags.join(',')}`;
