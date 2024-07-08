import Link from "next/link";
export default function Home() {
    return<>
    <h1>Hello, World!</h1>
    <Link href="/learn/next">
        <h1>Learn NEXT13</h1>        
    </Link>
    <Link href="/learn/react">
        <h1>Learn about React js in quizzes</h1>        
    </Link>
    <Link href="/learn/vue">
        <h1>Learn about vue js in quizzes</h1>        
    </Link>
    <Link href="/learn/angular">
        <h1>Learn about Angular js in quizzes</h1>        
    </Link>
    </>
}