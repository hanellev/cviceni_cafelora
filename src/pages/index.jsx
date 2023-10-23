import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const drinkList = data.result;
/* const currentDrink = drinkList.find((drink) => drink.id === id); 
Tahle funkce mi ukládá id nápoje, na který se zrovna kliklo. Měla bych přes ní přečíst property ordered (jestli je true a nebo false), ale nevím jak. Tahle konstanta by nejspíš měla být v tý funkci orderForm.forEach() */

document.querySelector('#root').innerHTML = render(
	<div className="page">
		<Header />
		<main>
			<Banner />
			<Menu drinks={drinkList} />
			<Gallery />
			<Contact />
		</main>
		<Footer />
	</div>
);

const navBtn = document.querySelector('.nav-btn');
const rollNav = document.querySelector('.rollout-nav');
const orderForm = document.querySelectorAll('form');

const showMenu = (e) => {
	rollNav.classList.toggle('nav-closed');
};

orderForm.forEach((form) => {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formElement = e.target;
		const id = Number(formElement.querySelector('input').value);
		const currentDrink = drinkList.find((drink) => drink.id === id);
		const orderStatus = currentDrink.ordered;

		fetch(`http://localhost:4000/api/drinks/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify([
				{ op: 'replace', path: '/ordered', value: !orderStatus },
			]),
		});
		window.location.reload();
	});
});

navBtn.addEventListener('click', showMenu);
rollNav.addEventListener('click', showMenu);
