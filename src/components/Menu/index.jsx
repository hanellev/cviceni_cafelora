import { Drink } from '../Drink';
import './style.css';

export const Menu = ({ drinks }) => {
	return (
		<section id="menu" className="menu">
			<div className="container">
				<h2>Naše nabídka</h2>
				<p className="menu-intro">
					Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
				</p>
				<div className="drinks-list">
					{drinks.map((drink) => {
						return (
							<Drink
								id={drink.id}
								name={drink.name}
								ordered={false}
								image={drink.image}
								layers={drink.layers}
							/>
						);
					})}
					;
				</div>
				<div className="order-detail">
					<a href="/objednavka">Detail objednávky</a>
				</div>
			</div>
		</section>
	);
};
