import './styles.css';
import { Topic } from './Topic';
import beto from '../../assets/authors/beto.png';
import cezar from '../../assets/authors/cezar.png';
import clarissa from '../../assets/authors/clarissa.png';

export const Aside = () => {
	return (
		<div className="aside__container">
			<Topic label="Cidade" />
			<Topic label="Noticias" />
			<Topic label="Arte" />
			<Topic label="Entretenimento" />
			<Topic label="Colunistas">
				<div className="author">
					<img src={beto} />
					<span className="author__name">Bento Souze</span>
				</div>
				<div className="author">
					<img src={cezar} />
					<span className="author__name">Cezar Ubaldo</span>
				</div>
				<div className="author">
					<img src={clarissa} />{' '}
					<span className="author__name">Clarissa Macedo</span>
				</div>
			</Topic>
			<span className="aside__suport">Apoio Cultural</span>
		</div>
	);
};
