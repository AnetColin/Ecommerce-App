import ProductCard from "../components/ProductCard";

const dummyProducts = [
{
id:1,
name:"Headphones",
price:1999,
image:
"https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
},

{
id:2,
name:"Smart Watch",
price:2999,
image:
"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
},

{
id:3,
name:"Shoes",
price:1499,
image:
"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
},

{
id:4,
name:"Backpack",
price:1299,
image:
"https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg"
},

{
id:5,
name:"Perfume",
price:799,
image:
"https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
},

{
id:6,
name:"Sunglasses",
price:599,
image:
"https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg"
}
];

const Home = () => {
return (

<div>

{/* HERO */}

<section
className="
mx-10
mt-10
rounded-3xl
bg-gradient-to-r
from-purple-100
to-pink-100
p-20
flex
justify-between
items-center
"
>

<div>

<p className="text-purple-600">
BEST PRODUCTS
</p>

<h1
className="
text-6xl
font-bold
mb-4
"
>
Discover Amazing
Products
</h1>

<p className="text-gray-600 mb-8">

Find products at
great prices

</p>

<button
className="
bg-black
text-white
px-8
py-4
rounded-xl
hover:scale-105
transition
"
>
Shop Now
</button>

</div>

<img
className="
w-[450px]
rounded-3xl
"
src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
alt=""
/>

</section>

{/* PRODUCTS */}

<section className="p-10">

<h2
className="
text-4xl
font-bold
mb-8
"
>
Featured Products
</h2>

<div
className="
grid
md:grid-cols-3
gap-10
"
>

{
dummyProducts.map((p)=>(

<ProductCard
key={p.id}
product={p}
/>

))
}

</div>

</section>

</div>

);
};

export default Home;