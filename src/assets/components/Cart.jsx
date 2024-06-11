import { useCart } from 'react-use-cart'
import { ImSad2 } from "react-icons/im";
import App from '../../App';
export default function Cart(){
        const {
            isEmpty,
            totalUniqueItems,
            items,
            updateItemQuantity,
            cartTotal,
            removeItem,
        }=useCart()

        // if(isEmpty) return <div className=' mx-9 font-bold md:text-3xl text-white *:italic flex mt-6'> cart is carting <ImSad2 className='ml-4 animate-ping'/> </div>
    return(
        <div className='top-0 absolute  right-0 w-[60%] md:w-[30%] min-h-[100%]'>
            <div className="flex flex-col bg-gray-900 rounded-lg shadow-md overflow-scroll">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h1 className="text-xl font-medium text-gray-200">Cart</h1>
                <h1 className="text-xl font-medium text-gray-500"><p>Total</p> {cartTotal} /=</h1>
            </div>
                    <ul className="px-4 py-3">
                            {items.map((item) => (
                            <li key={item.id} className="flex items-center justify-between py-2 border-b border-gray-200">
                                <div className="flex items-center">
                                    <span className="text-gray-100 mr-2">{item.quantity} x</span>
                                    <span className="text-gray-100 font-medium">{item.name}</span>
                                    <img src={item.img} alt="" className="w-10 h-10 rounded-full ml-2" />
                                </div>
                                <div className="flex space-x-2">
                                <button
                                    className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                >
                                    remove
                                </button>
                                <button
                                    className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                >
                                    add
                                </button>
                                <button
                                    className="px-2 py-1 text-xs font-medium text-red-500 hover:text-red-700 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    onClick={() => removeItem(item.id)}
                                >
                                    cancel
                                </button>
                                <div>
                                    sub total: {item.price * item.quantity}/=
                                </div>
                                </div>
                            </li>
                            ))}
                    </ul>
            </div>
            
        </div>
    )
}