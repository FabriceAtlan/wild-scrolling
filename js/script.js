document.addEventListener("DOMContentLoaded", () => {
	const wrapper = document.querySelector(".wrapper");

	if (!wrapper) return;

	const lowNbStar = 500;
	const middlebStar = 250;
	const farbStar = 100;
	
	for (let i = 0; i < lowNbStar; i++) {
		const newStar = document.createElement("div");
		newStar.style.top = Math.random() * 100 + '%';
		newStar.style.left = Math.random() * 100 + '%';
		newStar.classList.add("star");
		wrapper.appendChild(newStar);
	}
	
	for (let i = 0; i < middlebStar; i++) {
		const newStar = document.createElement("div");
		newStar.style.top = Math.random() * 100 + '%';
		newStar.style.left = Math.random() * 100 + '%';
		newStar.classList.add("star1");
		wrapper.appendChild(newStar);
	}
	
	for (let i = 0; i < farbStar; i++) {
		const newStar = document.createElement("div");
		newStar.style.top = Math.random() * 100 + '%';
		newStar.style.left = Math.random() * 100 + '%';
		newStar.classList.add("star2");
		wrapper.appendChild(newStar);
	}

	setTimeout(() => {
		window.location.href = "../index.html";
	}, 100000)
})