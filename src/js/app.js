const showBtn = document.querySelector('.show-btn');
const arrowIcon = document.querySelector('.fas');
const sectionContainer = document.querySelector('.container-handle');
const gradient = document.querySelector('.gradient-div');

const showSection = () => {
	sectionContainer.classList.toggle('container-show');
	if (sectionContainer.classList.contains('container-show')) {
		arrowIcon.style.transform = 'rotate(180deg)';
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
			event.preventDefault();

			if (index === links.length - 1) {
				if (inputSearch.style.display === 'block') {
					inputSearch.style.display = 'none';
				} else {
					inputSearch.style.display = 'block';
				}
			}
		});
	});
});

var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
	
	itemSelector: '.grid-item',
	columnWidth: 200,
});
