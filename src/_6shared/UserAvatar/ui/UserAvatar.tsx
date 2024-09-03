import { classNames } from '@/_7helpers/classnames/classNames'
import AvatarUser from '../../../../public/User/PhotoAvatar/ui/Photo'
import { Props } from '../model/Props'
import cl from './UserAvatar.module.css'

function UserAvatar({ className, _size = 'normal', _type = 'primary' }: Props) {
    return (
        <div className={classNames(cl.container, [className])}>
            <div
                className={classNames(cl.container_user, [
                    cl[_size],
                    cl[_type],
                ])}
            >
                <div className={cl.user_photo}>
                    <svg className={cl.user_photo__canva}>
                        <circle cx={48} cy={48} r={45} fill="none"></circle>
                    </svg>
                    <AvatarUser className={cl.avatarUser} />
                </div>
                <div className={cl.user_tag_name}>@Morsh</div>
            </div>
        </div>
    )
}

export default UserAvatar
