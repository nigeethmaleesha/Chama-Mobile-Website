import type {Metadata,Viewport} from 'next';
import './globals.css';
import {StoreProvider} from '@/components/store';
import {Header,Footer} from '@/components/shell';
export const metadata:Metadata={title:{default:'Chama Mobile | iPhones & Mobile Services in Sri Lanka',template:'%s | Chama Mobile'},description:'Explore iPhones, smartphones, accessories, phone repairs and customisation at Chama Mobile, Sri Lanka.',keywords:['Chama Mobile','iPhone shop Sri Lanka','iPhone','phone repairs','mobile accessories'],robots:{index:false,follow:false},openGraph:{title:'Chama Mobile | Your Next iPhone Starts Here',description:'Discover iPhones, mobile accessories, repairs and device customisation.',type:'website'}};
export const viewport:Viewport={themeColor:'#101010',width:'device-width',initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider><Header/>{children}<Footer/></StoreProvider></body></html>}
