const showBtn = document.querySelector('.show-btn');
const sectionContainer = document.querySelector('.container-handle');
const gradient = document.querySelector('.gradient-div');

const showSection = () => {
	sectionContainer.classList.toggle('container-show');
	if (sectionContainer.classList.contains('container-show')) {
		showBtn.innerHTML = 'Zwiń';
		gradient.style.visibility = 'hidden';
		showBtn.style.marginBottom = '-3em';
	} else {
		showBtn.textContent = 'Rozwiń';
		gradient.style.visibility = 'visible';
	}
};

showBtn.addEventListener('click', showSection);

document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('.navbar-nav .nav-link');
	const inputSearch = document.querySelector('.input-search');

	links.forEach(function (link, index) {
		link.addEventListener('click', function (event) {
			if (index === links.length - 1) {
				event.preventDefault();

				if (inputSearch.style.display === 'block') {
					inputSearch.style.display = 'none';
				} else {
					inputSearch.style.display = 'block';
				}
			}
		});
	});
});
const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(:last-child)');
const navbarCollapse = document.querySelector('.navbar-collapse');
const inputSearch = document.querySelector('.input-search');

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		if (window.innerWidth <= 992) {
			navbarCollapse.classList.remove('show'); 
			inputSearch.style.display = 'none'; 
		}
	});
});

var elem = document.querySelector('.gri-item');
var msnry = new Masonry(elem, {
	itemSelector: 'gri-item',
});

AOS.init({
	startEvent: 'DOMContentLoaded',
	offset: 200,
	once: true,
});
