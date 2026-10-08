'use client';
import React,{createContext,useContext,useEffect,useState} from 'react';
import {products} from '@/lib/data';
type StoreContext={cart:Record<string,number>;wishlist:string[];cartOpen:boolean;setCartOpen:(b:boolean)=>void;add:(id:string)=>void;remove:(id:string)=>void;change:(id:string,count:number)=>void;toggleWish:(id:string)=>void;toast:string;notify:(text:string)=>void};
const C=createContext<StoreContext|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}){const[cart,setCart]=useState<Record<string,number>>({});const[wishlist,setWishlist]=useState<string[]>([]);const[cartOpen,setCartOpen]=useState(false);const[toast,setToast]=useState('');const[ready,setReady]=useState(false);
useEffect(()=>{try{const c=JSON.parse(localStorage.getItem('chama-cart')||'{}');const w=JSON.parse(localStorage.getItem('chama-wishlist')||'[]');if(c&&typeof c==='object'&&!Array.isArray(c))setCart(Object.fromEntries(Object.entries(c).filter(([k,v])=>products.some(p=>p.id===k)&&typeof v==='number'&&v>0&&v<100)));if(Array.isArray(w))setWishlist(w.filter(x=>typeof x==='string'&&products.some(p=>p.id===x)))}catch{}setReady(true)},[]);
useEffect(()=>{if(ready)localStorage.setItem('chama-cart',JSON.stringify(cart))},[cart,ready]);useEffect(()=>{if(ready)localStorage.setItem('chama-wishlist',JSON.stringify(wishlist))},[wishlist,ready]);
function notify(t:string){setToast(t);window.setTimeout(()=>setToast(''),3200)}function add(id:string){setCart(p=>({...p,[id]:(p[id]||0)+1}));notify('Added to your bag')}function change(id:string,count:number){setCart(p=>{const n={...p};if(count<=0)delete n[id];else n[id]=Math.min(99,count);return n})}function remove(id:string){change(id,0);notify('Removed from bag')}function toggleWish(id:string){setWishlist(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);notify(wishlist.includes(id)?'Removed from wishlist':'Saved to wishlist')}
return <C.Provider value={{cart,wishlist,cartOpen,setCartOpen,add,remove,change,toggleWish,toast,notify}}>{children}</C.Provider>}
export function useStore(){const c=useContext(C);if(!c)throw Error('Store context missing');return c}
