import {
useContext
} from "react";

import {
CartContext
} from "../context/CartContext";

const ProductCard = ({
product
}) => {

const {
addToCart
}
=
useContext(
CartContext
);

return (

<div
className="
bg-white
rounded-3xl
shadow-md
overflow-hidden
hover:scale-105
transition
"
>

<img
src={product.image}
alt=""
className="
h-[260px]
w-full
object-cover
"
/>

<div className="p-5">

<h2
className="
text-2xl
font-bold
"
>
{product.name}
</h2>

<p
className="
text-3xl
font-semibold
my-3
"
>
₹{product.price}
</p>

<button
onClick={()=>
addToCart(
product
)
}

className="
bg-black
text-white
w-full
py-3
rounded-xl
hover:bg-purple-600
"
>

Add To Cart

</button>

</div>

</div>

);

};

export default ProductCard;