import { useRouter } from "next/router";
import contacts from "../api/contacts";
import Link from "next/link";
import Layout from "../../components/Layout";
export default function Contacts(){
    const router = useRouter();
const {contactId} =router.query;
if (!contactId) return <div>Loading Contacts...</div>
const contact = contacts.find(contact => contact.id === contactId)
if(!contact) return <div>Contact not found</div>
    return <>
     <Layout/>
    <h3>Contact :</h3>
    <h4>{contact.name}</h4>
    </>
    
}