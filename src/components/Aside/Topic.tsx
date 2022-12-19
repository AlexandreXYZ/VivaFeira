import { Children, FC } from 'react';
import './styles.css';

interface TopicProps {
	label: string;
	children?: JSX.Element | JSX.Element[] | string;
}

export const Topic: FC<TopicProps> = ({ label, children }) => {
	return (
		<div className="aside__topic">
			{label}
			{children}
		</div>
	);
};
