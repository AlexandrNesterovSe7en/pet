import UserProfile from '@/_2pages/UserProfile'
import cl from './page.module.css'
export default function Home() {
    return (
        <main className={cl.main}>
            <UserProfile />
        </main>
    )
}
