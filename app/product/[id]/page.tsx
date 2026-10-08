import {notFound} from 'next/navigation';import type {Metadata} from 'next';import {products} from '@/lib/data';import {ProductView} from './product-view';
export function generateStaticParams(){return products.map(p=>({id:p.id}))}
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{const{id}=await params;const p=products.find(x=>x.id===id);return{title:p?.name||'Product',description:p?.description}}
export default async function ProductPage({params}:{params:Promise<{id:string}>}){const{id}=await params;const p=products.find(x=>x.id===id);if(!p)notFound();return <ProductView product={p}/>}
