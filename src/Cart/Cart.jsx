import React, { useState } from "react";
import frontimg from "../assets/front-img.jpeg"
import "./cart.css";


function Cart({ id, img,selectHandler }) {
	const [isSelected, setIsSelected] = useState(false);
	const loseHandler =()=>{
		setIsSelected(false)
	}
	const clickHandler = () => {
		setIsSelected(true);
		selectHandler(id, loseHandler)
	};

	return (
		<div
			className={`${isSelected ? "cart selected" : "cart"}`}
			onClick={clickHandler}
		>
			<div className="cart-face cart-front">
				<img className="face-img" src={frontimg} />
			</div>
			<div className="cart-face cart-back">
				<img className="face-img" src={img} />
			</div>
		</div>
	);
}

export default Cart;
