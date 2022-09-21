import { useState } from "react"
import { signIn } from "next-auth/react"

export default function EmailLink() {
    const [email, setEmail] = useState('')

    const submitUser = (e) => {
        e.preventDefault()
        signIn('email', 
            {email, callbackUrl: '/dashboard', redirect: false}, 
            {addedParam: "My added parameter"}) // <- MY ADDITIONAL PARAMETER!
        }

    return (
        <form onSubmit={submitUser}>
            Email: <input type='email' placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Email Link</button>
        </form>
    )
}