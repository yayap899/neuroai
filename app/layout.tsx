import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Dynasty AI Studio',description:'Dynasty AI Studio — chat, image, video and voice powered by xAI'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
