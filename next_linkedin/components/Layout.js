import Link from "next/link"
import { useRouter } from "next/router";


function Menu(){
 const router = useRouter(); 
    return <div>
         <a href="#" onClick={() => router.back()}>Back</a>
 <ul style={{ listStyle: "none", padding: 5 , display:"flex", flexDirection:"row"}}>
            <li style={{ marginBottom: "10px" }}>
                <Link href="/" style={{textDecorationLine:"none"}}> 
                    Home
                </Link>
            </li>
            <li style={{ marginBottom: "10px" ,marginLeft:"10px"}}>
                <Link href="/contacts" style={{textDecorationLine:"none"}}>
                   Contacts
                </Link>
            </li>
            <li style={{ marginBottom: "10px" ,marginLeft:"10px"}}>
                <Link href="/news" style={{textDecorationLine:"none"}}>
                   News
                </Link>
            </li>
        </ul>
    </div>
}
export default function Layout({children}){
    return <>
    <Menu/>
    {children}
    </>
}