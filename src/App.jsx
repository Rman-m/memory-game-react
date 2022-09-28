import Cart from "./Cart/Cart";
import "./App.css";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpeg";
import img7 from "./assets/img7.jpeg";
import img8 from "./assets/img8.jpeg";
import img9 from "./assets/img9.jpeg";
import img10 from "./assets/img 10.jpeg";

function App() {
	let selectedItems = [];
	function CreateCard(cartId, img) {
		return [
			{ cartId, img, id: CreateCard.idCount++ },
			{ cartId, img, id: CreateCard.idCount++ },
		];
	}
	CreateCard.idCount = 0;
	const carts = [
		...CreateCard("1", img1),
		...CreateCard("3", img3),
		...CreateCard("4", img4),
		...CreateCard("5", img5),
		...CreateCard("6", img6),
		...CreateCard("7", img7),
		...CreateCard("8", img8),
		...CreateCard("9", img9),
		...CreateCard("10", img10),
	];

	const cartShuffler = () => {
		const newCarts = [];
		const originalLength = carts.length;
		for (let i = 0; originalLength > i; i++) {
			let randomNum = Math.floor(Math.random() * carts.length);
			const [cutItem] = carts.splice(randomNum, 1);
			newCarts.push(cutItem);
		}
		console.log(newCarts);
		return newCarts;
	};

	const shuffledCarts = cartShuffler();

	function selectHandler(id, loseHandler) {
		selectedItems.push({ id, loseHandler });

		if (selectedItems.length === 2) {
			if (selectedItems[0].id !== selectedItems[1].id) {
				console.log("lose");
				selectedItems.forEach((item) => {
					setTimeout(() => {
						item.loseHandler();
					}, 1000);
				});
			}
			selectedItems = [];
		}
	}
	return (
		<div className="cartList">
			{shuffledCarts.map((cart) => (
				<Cart
					selectHandler={selectHandler}
					key={cart.id}
					id={cart.cartId}
					img={cart.img}
				/>
			))}
		</div>
	);
}

export default App;
