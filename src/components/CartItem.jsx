
import { MdDelete } from "react-icons/md";

import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >

      <div className="flex flex-row gap-1 h-[210px] w-[520px] border-b-2 border-black">

        <div className="h-full w-[210px]  flex flex-col justify-center">
          <img src={item.image} className="pl-3" width="120px" height="240px"
           />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full p-2">
          <h1 className="text-gray-700 font-semibold text-lg">{item.title}</h1>
          <h1 className="text-gray-400 font-normal ">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex justify-between  w-full ">
            <p className="text-green-600 font-semibold">{item.price}</p>
            <div 
            onClick={removeFromCart}>
              <MdDelete  className="text-lg text-red-700"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
