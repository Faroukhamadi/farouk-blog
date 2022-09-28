const getSlugFromPath = (path: string) =>
	path.split('/').at(-1)?.replace('.md', '');

export default getSlugFromPath;
