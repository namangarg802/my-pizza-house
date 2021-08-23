import React from 'react'

function cartSingleItem() {
    return (
        <div>
            {console.log("naman")}
<div className="container   ml-10 pr-20">
<h1 className="font-bold my-5 mx-40">Cart Items</h1>
<ul>
    <li className="mb-12">
        <div className="flex items-center justify-between">
        <div className="mx-40 flex items-center">
            <img className="h-20 w-30 "src="/images/pizza3.jpg" alt="" />
            <span className="ml-5 font-bold ">Tuesday special</span>
        </div>
        <div>
            <button className="bg-yellow-500 py-2 px-4 rounded-full leading-none">-</button>
            <span className="font-bold px-4">2</span>
            <button className="bg-yellow-500 py-2 px-4 rounded-full leading-none">+</button>
        </div>
        <span >₹500</span>
        <button className="bg-red-500 px-4 py-2 rounded-full mr-20 leading-none">Delete</button>
        </div>
    </li>
</ul>
<hr className="my-6"/>
<div className="text-right pr-20"> <span className="font-bold"> Grand Total:</span>₹500</div>
<div className="text-right mt-6 pr-20" ><button className="bg-yellow-500 px-4 py-2 rounded-full">Order Now</button></div>

</div>
</div>
    )
}

export default cartSingleItem


