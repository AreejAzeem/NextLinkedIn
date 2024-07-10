import Link from "next/link";
import contacts from "../api/contacts";
import Layout from "../../components/Layout";

export default function Home() {
    return<>
   <Layout/>
   {contacts.map(contact => (
                <Link href={`/contacts/${contact.id}`}  key={contact.id}>
                    <li style={{ marginRight: "10px", cursor: "pointer", textDecoration: "none" }}>
                        {contact.name}
                    </li>
                </Link>
            ))}
   
    </>
    
}