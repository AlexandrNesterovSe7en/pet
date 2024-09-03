import Button from '@/_6shared/Button'
import cl from './UserProfile.module.css'
import { UserAvatar } from '@/_6shared/UserAvatar'
import { type dataPosts, Posts } from '@/_3widgets/Posts'
import { UserStats } from '@/_5entities/User/Stats'
import { ProfileHead } from '@/_3widgets/ProfileHead'

const dataPosts: dataPosts = [
    {
        audios: ['asdf'],
        images: ['1', '1', '1', '1', '1', '1'],
        texts: 'strinsdaf',
    },
    {
        audios: ['asdf'],
        images: ['1', '1', '1', '1', '1', '1'],
        texts: 'strinsdaf',
    },
]

function UserProfile() {
    return (
        <>
            <div className={cl.container__header}>
                <div className={cl.header}>
                    <Button
                        className={cl.btn_back}
                        _type="transparent"
                        _svg="ArrowLeft"
                    />
                    <Button className={cl.btn_menu} _type="transparent">
                        <span></span>
                    </Button>
                </div>
            </div>
            <div className={cl.container__main}>
                <div className={cl.container__profile}>
                    <ProfileHead />
                    <Posts posts={dataPosts} />
                </div>
            </div>
        </>
    )
}

export default UserProfile
