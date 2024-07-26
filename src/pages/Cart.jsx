import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>

     <div className="flex">
      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>
       <div className="flex flex-col justify-between">
        <div className="fixed">
          <div className="text-xl text-green-600 capitalize font-bold mt-32 ">YOUR CART</div>
          <div className="text-6xl  font-extrabold text-green-600 ">SUMMARY</div>
          <p className="mt-5 font-bold">
            <span className="">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="fixed mt-[40%]">
          <p className="font-bold">Total Amount: ${totalAmount.toFixed(2)}</p>
          <div className="mt-5">
          <button className="bg-green-600 text-white w-full rounded-lg pl-20 pr-20 pt-3 pb-3">
            CheckOut Now
          </button>
          </div>
        </div>
       </div>

      </div>


    </div>) : 
    (<div className="flex justify-center items-center flex-col mt-[25%]">
      <h1 className="mb-10 text-3xl font-bold ">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 border rounded-lg text-2xl pl-5 pr-5 pt-2 pb-2">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
