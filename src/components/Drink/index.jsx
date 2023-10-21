import { Layer } from '../Layer';
import './style.css';

export const Drink = ({ id, name, ordered, image, layers }) => {
	return (
		<div className="drink">
			<div className="drink__product">
				<div className="drink__cup">
					<img src={image} />
				</div>
				<div className="drink__info">
					<h3>{name}</h3>
					{layers.map((layer) => {
						return (
							<Layer
								key={layer.color}
								color={layer.color}
								label={layer.label}
							/>
						);
					})}
				</div>
			</div>
			<div className="drink__controls">
				<form>
					<button
						className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}
						type="submit"
					>
						{ordered ? 'Zrušit' : 'Objednat'}
					</button>
					<input type="hidden" value={id} />
				</form>
			</div>
		</div>
	);
};
