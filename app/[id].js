import { useRouter } from "next/router"


export default function myID() {
    
    const router = useRouter()

    return (
        <>
            <h1>This is the Users {router.query.id} Page</h1>
        </>
    )
}