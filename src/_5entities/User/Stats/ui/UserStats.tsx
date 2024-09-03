import { UserAvatar } from '@/_6shared/UserAvatar'
import cl from './UserStats.module.css'

function UserStats() {
    return (
        <>
            <div className={cl.container__profile_stats}>
                <UserAvatar className={cl.avatar} _type="second" />
                <div className={cl.container_user__stats}>
                    <div className={cl.user_name}>
                        <h1>Denis Morosov</h1>
                    </div>
                    <div className={cl.container_stats}>
                        <div className={cl.stats}>
                            <h2>10</h2>
                            <p>Posts</p>
                        </div>
                        <div className={cl.stats}>
                            <h2>100</h2>
                            <p>Followers</p>
                        </div>
                        <div className={cl.stats}>
                            <h2>5</h2>
                            <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserStats
