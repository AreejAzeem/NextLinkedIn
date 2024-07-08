import { useRouter } from "next/router";
import topics from "../api/topics";
export default function Learn(){
    const router = useRouter();
const {name} =router.query;
if (!name) return <div>Loading...</div>
const topic = topics.find(topic => topic.id === name)
if(!topic) return <div>Topic not found</div>
    return <div>Welcome to Learn {topic.id}</div>
}