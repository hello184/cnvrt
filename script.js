const cards = document.querySelectorAll(".feature-card, .pricing-card, .phone-card");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	},
	{ threshold: 0.15 }
);

cards.forEach((card) => {
	card.style.opacity = "0";
	card.style.transform = "translateY(18px)";
	card.style.transition = "opacity 700ms ease, transform 700ms ease";
	observer.observe(card);
});

const style = document.createElement("style");
style.innerHTML = `
	.visible {
		opacity: 1 !important;
		transform: translateY(0) !important;
	}
`;
document.head.appendChild(style);
