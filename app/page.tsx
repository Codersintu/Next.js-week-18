import Link from "next/link";

export default function page() {
    return (
    <div className="h-screen flex justify-center items-center">
        <div className="text-4xl flex flex-col font-bold">
            Welcome to the Home Page
            <Link href="/signIn" className="border mt-5 bg-amber-700">click to go SIGNIn</Link>
            <Link href="/signUp" className="border mt-5 bg-amber-700">click to go signUp</Link>
        </div>
    </div>
    )
}