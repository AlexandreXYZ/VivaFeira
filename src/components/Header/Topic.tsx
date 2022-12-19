import { FC } from 'react';
import './styles.css';

interface TopicProps {
	title: string;
	link: string;
}

export const Topic: FC<TopicProps> = ({ title, link }) => {
	return (
		<a className="topic" href={link}>
			{title}
		</a>
	);
};
