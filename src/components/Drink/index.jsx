import './style.css';

export const Drink = (props) => {
	const drinkName = props.name;

	return (
		<div className="drinks-list">
			<div className="drink">
				<div className="drink__product">
					<div className="drink__cup">
						<img src="/cups/espresso.png" />
					</div>
					<div className="drink__info">
						<h3>{drinkName}</h3>
						<div className="layer">
							<div
								className="layer__color"
								style={{ backgroundColor: '#613916' }}
							></div>
							<div className="layer__label">espresso</div>
						</div>
					</div>
				</div>
				<div className="drink__controls">
					<button className="order-btn">Objednat</button>
				</div>
			</div>
		</div>
	);
};
