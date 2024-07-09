import { useRouter } from "next/router";
import contacts from "../api/contacts";
import Link from "next/link";
export default function Contacts(){
    const router = useRouter();
const {contactId} =router.query;
if (!contactId) return <div>Loading Contacts...</div>
const contact = contacts.find(contact => contact.id === contactId)
if(!contact) return <div>Contact not found</div>
    return <>
      <Link href="/contacts"><h1>Back</h1></Link> 
    <h3>Contact :</h3>
    <h4>{contact.name}</h4>
    </>
    
}