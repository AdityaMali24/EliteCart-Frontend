import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems, removeFromCart, updateQuantity } from "../Redux/Cart/Action"; // Import your action

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.cartitems); // Assuming your cart state is named "cart"
  const [cart, setCart] = useState(cartitems);
  const [subtotal, setSubtotal] = useState(0);
  const taxes = 1.99; // You can adjust the tax amount as needed
  const shipping = 0.00; // You can adjust the shipping amount as needed

  const updatequantity = (id)=>{
    let type = "increment";
    dispatch(updateQuantity(id, type)).then(()=>{
      dispatch(getCartItems());
    });
  };
  const deletequantity = (id)=>{
    let type = "decrement";
    dispatch(updateQuantity(id, type)).then(()=>{
      dispatch(getCartItems());
    });
  };

  const removeCart = (id)=>{
    dispatch(removeFromCart(id)).then(()=>{
      dispatch(getCartItems());
    });
  };

    // Calculate subtotal
    const calculateSubtotal = () => {
      let total = 0;
      cartitems.forEach((item) => {
        total += item.subtotal;
      });
      return total;
    };
  
    // Update subtotal when cart items change
    React.useEffect(() => {
      setSubtotal(calculateSubtotal());
    }, [cartitems]);

      // Calculate total
  const total = subtotal + taxes + shipping;

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        {cartitems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-center font-semibold">Product</th>
                    <th className="text-center font-semibold">Price</th>
                    <th className="text-center font-semibold">Quantity</th>
                    <th className="text-center font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map your cart items here */}
                  {cartitems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-4">
                        <div className="flex justify-evenly items-center">
                          <img
                            className="h-24 w-24 mr-4"
                            src={`http://localhost:8006/uploads/products/${item.thumbnail}`}
                            alt={item.Name}
                          />
                          <span className="font-semibold">{item.Name}</span>
                        </div>
                      </td>
                      <td className="py-4">${item.price}</td>
                      <td className="py-4">
                        <div className="flex justify-center items-center">
                          <button
                            className="border rounded-md py-2 px-4 mr-2"
                            onClick={()=> deletequantity(item._id)}
                          >
                            -
                          </button>
                          <span className="text-center w-8">
                            {item.quantity}
                          </span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2"
                            onClick={()=> updatequantity(item._id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">${item.subtotal}</td>
                      <td className="py-4">
                        <button
                          className="bg-red-500 text-white py-2 px-4 rounded-lg"
                          onClick={()=> removeCart(item._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* End of cart item mapping */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
    // <div className="container mx-auto my-8">
    //   <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
    //   {cartitems && cartitems.length === 0 ? (
    //     <p>Your cart is empty.</p>
    //   ) : (
    //     <div>
    //       {cartitems.map((item) => (
    //         <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
    //           <div className="flex items-center">
    //             <img src={item.thumbnail} alt={item.Name} className="w-12 h-12 object-cover rounded-lg" />
    //             <div className="ml-4">
    //               <p className="text-lg font-semibold">{item.Name}</p>
    //               <p className="text-gray-600">${item.price}</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center">
    //             <button className="bg-red-500 text-white px-2 py-1 rounded-lg">Remove</button>
    //           </div>
    //         </div>
    //       ))}
    //       <div className="mt-4">
    //         <p className="text-xl font-semibold">Total: $XX.XX</p>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Checkout</button>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default Cart;
