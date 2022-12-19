import { Topic } from './Topic';
import { Title } from '../../assets/Title';
import banner from '../../assets/banner.png';

export const Header = () => {
	return (
		<>
			<div className="container">
				<Title />
				<div className="container__topics">
					<Topic title="Noticias" link="" />
					<Topic title="Agenda Cultura" link="" />
					<Topic title="Pontos Turisticos" link="" />
					<Topic title="Contato" link="" />
				</div>
			</div>
			<img style={{ width: '100%', height: '450px' }} src={banner} />
		</>
	);
};
