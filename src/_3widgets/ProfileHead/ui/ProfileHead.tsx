import cl from './ProfileHead.module.css'
import Button from '@/_6shared/Button'
import { UserStats } from '@/_5entities/User/Stats'
import { UserAbout } from '@/_5entities/User/About'

function ProfileHead() {
    return (
        <>
            <UserStats />
            <UserAbout />
            <div className={cl.edit_profile}>
                <Button>Edit profile</Button>
                <Button className={cl.btn_add_profile} _type="transparent">
                    +
                </Button>
            </div>
        </>
    )
}

export default ProfileHead
