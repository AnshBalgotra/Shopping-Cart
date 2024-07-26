
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();


  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div>

      <div className="flex ml-20 mt-20">

        <div className="flex flex-col justify-center items-center " >
         <img src={item.image} className="h-[250px] w-[250px] mr-10 " />
        </div>
        <div className="max-w-md">
          <h1 className="text-lg font-bold text-gray-800">{item.title}</h1> 
          <br></br>
          <h1 className="text-md text-gray-600">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex justify-between relative">
            <p className="text-green-600 font-bold mt-10 ml-5">${item.price}</p>
            <div className="text-3xl mr-20 mt-8 rounded-full cursor-pointer"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>
      <br/>

      <div className="border-b-4 border-solid w-[85%] mx-auto"></div>

    </div>
  );
};

export default CartItem;
