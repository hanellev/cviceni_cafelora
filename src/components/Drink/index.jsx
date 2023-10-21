import { Layer } from '../Layer';
import './style.css';

export const Drink = ({ name, ordered, image, layers }) => {
	return (
		<div className="drink">
			<div className="drink__product">
				<div className="drink__cup">
					<img src={image} />
				</div>
				<div className="drink__info">
					<h3>{name}</h3>
					{layers.map((layer) => {
						return <Layer color={layer.color} label={layer.label} />;
					})}
				</div>
			</div>
			<div className="drink__controls">
				<button className="order-btn">Objednat</button>
			</div>
		</div>
	);
};
