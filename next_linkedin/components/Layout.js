import Link from "next/link"
function Menu(){
    return <div>
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
        </ul>
    </div>
}
export default function Layout({children}){
    return <>
    <Menu/>
    {children}
    </>
}