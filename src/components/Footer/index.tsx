import './styles.css';

export const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footer__sectionContainer">
				<section className="footer__section">
					<span className="section__title">Viva Links</span>
					<span>Fale Conosco</span>
					<span>Política Pública</span>
					<span>Utilidade Pública</span>
					<span>Links Feirenses</span>
					<span>Acesse sua conta</span>
				</section>
				<section className="footer__section">
					<span className="section__title">Social</span>
					<span>Facebook</span>
					<span>Twitter</span>
				</section>
			</div>
			<p>
				&copy; 2022 - Todos os direitos reservado -{' '}
				<a rel="license" target="_blank" href="www.vivafeira.com.br">
					www.vivafeira.com.br
				</a>
			</p>
		</div>
	);
};
