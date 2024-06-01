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
    (<div className="flex flex-row justify-center p-3 gap-5">


      <div className=" flex flex-col gap-4">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className=" h-[420px] border-1 border-black pt-7 flex flex-col justify-between" >

        <div>
          <div className=" text-xl font-semibold text-green-500">Your Cart</div>
          <div className=" text-4xl font-bold text-green-500">Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="font-semibold">Total Amount: ${totalAmount}</p>
          <button className=" bg-green-700  rounded-lg w-[150px] text-white">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
