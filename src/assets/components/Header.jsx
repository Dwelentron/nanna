import { useCart } from "react-use-cart"
import {BrowserRouter , Route , Router , NavLink, Routes} from 'react-router-dom'
import {LuShoppingCart } from "react-icons/lu";
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { ImPinterest2, ImWhatsapp } from 'react-icons/im';
import Cakes from "./Cakes";
import Cart from "./Cart";

export default function Header(){
    const{totalUniqueItems}= useCart()
    return(
        <div>
        <header className=' h-fit top-0 sticky'>
              <nav className=' bg-black grid'>
                <section className='flex items-center'>
                  <NavLink className='p-0'>
                    <img src="https://www.pngitem.com/pimgs/m/18-183526_jb-cakes-sweets-treats-cakes-and-sweets-logo.png" alt="" className='w-24 md:w-44 rounded-r-full'/>
                  </NavLink>
                  <NavLink to="cart" className='float-right mx-auto hover:border-b duration-1000 flex
                  '>
                  <LuShoppingCart size={30} className='fill-white hover:ml-4 duration-1000 text-red-700' />
                  
                  <p className='text-white'>{totalUniqueItems}</p>
                  </NavLink>
                </section> 
                
                <hr />
                <section className='m-2'>
                    <p className='one text-center md:text-2xl p-2 text-white sm:text-[50px]'>
                      Hello there, welcome to Annie's cakes where taste meets You 
                    </p> 
                   
                </section>

              </nav>
              <div className='md:min-h-dvh  bg-black w-full md:w-40 p-7 md:p-0 block md:hidden 
                '>

                <section className="flex md:grid bg-black text-white px-4 py-2">
                  <NavLink to="all" className="text-lg font-medium hover:text-gray-200 active:underline underline">Home</NavLink>
                  <hr className="md:hidden border-gray-700 my-2" />

                  <section className="ml-auto items-center md:ml-0 md:justify-end">
                    <p className="text-base font-medium mx-auto">About</p>
                    <span className="flex space-x-4">
                      <CiInstagram size={20} className="hover:fill-indigo-500 duration-500 ease-in-out" />
                      <CiFacebook size={20} className="hover:fill-indigo-500 duration-500 ease-in-out" />
                      <ImWhatsapp size={17} className="hover:fill-indigo-500 duration-500 ease-in-out" />
                      <ImPinterest2 size={17} className="hover:fill-indigo-500 duration-500 ease-in-out" />
                    </span>
                  </section>
                </section>


              </div> 
              
            </header>
            <Routes>
                <Route path='all' element={<Cakes />}/>
                <Route path='cart' element={<Cart/>} />
            </Routes>


        </div>
    )
}