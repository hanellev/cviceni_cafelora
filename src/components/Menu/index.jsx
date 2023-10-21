import { Drink } from '../Drink';
import './style.css';

export const Menu = () => {
	return (
		<section id="menu" className="menu">
			<div className="container">
				<h2>Naše nabídka</h2>
				<p className="menu-intro">
					Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
				</p>
				<Drink
					name="Espresso"
					ordered={false}
					image="https://localhost:4000/assets/cups/romano.png"
					layers={[
						{
							color: '#fbdf5b',
							label: 'citrón',
						},
						{
							color: '#613916',
							label: 'espresso',
						},
					]}
				/>
				<div className="order-detail">
					<a href="/objednavka">Detail objednávky</a>
				</div>
			</div>
		</section>
	);
};
