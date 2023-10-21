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
console.log(drinkList);

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

const showMenu = (e) => {
	rollNav.classList.toggle('nav-closed');
};

navBtn.addEventListener('click', showMenu);
rollNav.addEventListener('click', showMenu);
