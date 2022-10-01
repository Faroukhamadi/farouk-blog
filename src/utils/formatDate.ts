import { format, parseISO } from 'date-fns';
const formatDate = (date: string): string =>
	format(parseISO(date), 'LLL d, yyyy');

export default formatDate;
