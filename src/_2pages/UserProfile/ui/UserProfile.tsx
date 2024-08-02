import ArrowsRightFill from '../../../../public/Arrows/RightFill/ui/ArrowsRightFill'
import ArrowLeft from '../../../../public/Arrows/ui/ArrowLeft'
import AvatarUser from '../../../../public/User/PhotoAvatar/ui/Photo'
import WaveSound from '../../../../public/Wave/Sound/ui/WaveSound'
import cl from './UserProfile.module.css'

function UserProfile() {
    return (
        <>
            <div className={cl.container__header}>
                <div className={cl.header}>
                    <button className={cl.btn_back}>
                        <ArrowLeft />
                    </button>
                    <button className={cl.btn_menu}>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className={cl.container__main}>
                <div className={cl.container__profile}>
                    <div className={cl.container__profile_stats}>
                        <div className={cl.container_user__plug}>
                            <div className={cl.container_user}>
                                <div className={cl.user_photo}>
                                    <svg className={cl.user_photo__canva}>
                                        <circle
                                            cx={48}
                                            cy={48}
                                            r={45}
                                            fill="none"
                                        ></circle>
                                    </svg>
                                    <AvatarUser className={cl.avatarUser} />
                                </div>
                                <div className={cl.user_tag_name}>@Morsh</div>
                            </div>
                        </div>
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
                    <div className={cl.user_about}>
                        It is a truth universally acknowledged, that a single
                        man in possession of a good fortune.
                    </div>
                    <div className={cl.edit_profile}>
                        <button className={cl.btn_edit_profile}>
                            Edit profile
                        </button>
                        <button className={cl.btn_add_profile}>+</button>
                    </div>
                    <div className={cl.posts}>
                        <div className={cl.containerPosts}>
                            <div className={cl.container_posts_1}>
                                <div className={cl.container_user__plug}>
                                    <div
                                        className={
                                            cl.container_user +
                                            ' ' +
                                            cl.container_user_1
                                        }
                                    >
                                        <div className={cl.user_photo}>
                                            <svg
                                                className={cl.user_photo__canva}
                                            >
                                                <circle
                                                    cx={48}
                                                    cy={48}
                                                    r={45}
                                                    fill="none"
                                                ></circle>
                                            </svg>
                                            <AvatarUser
                                                className={cl.avatarUser}
                                            />
                                        </div>
                                        <div className={cl.user_tag_name}>
                                            @Morsh
                                        </div>
                                    </div>
                                </div>
                                <div className={cl.posts1}>
                                    <div className={cl.item1}>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                </div>
                            </div>
                            <div
                                className={
                                    cl.container_posts_1 + ' ' + cl.center
                                }
                            >
                                <div className={cl.container_user__plug}>
                                    <div
                                        className={
                                            cl.container_user +
                                            ' ' +
                                            cl.container_user_1
                                        }
                                    >
                                        <div className={cl.user_photo}>
                                            <svg
                                                className={cl.user_photo__canva}
                                            >
                                                <circle
                                                    cx={48}
                                                    cy={48}
                                                    r={45}
                                                    fill="none"
                                                ></circle>
                                            </svg>
                                            <AvatarUser
                                                className={cl.avatarUser}
                                            />
                                        </div>
                                        <div className={cl.user_tag_name}>
                                            @Morsh
                                        </div>
                                    </div>
                                </div>
                                <div className={cl.text1}>
                                    a single man in possession of a good
                                    fortune, must be.
                                </div>
                                <button className={cl.btn_play}>
                                    <div>
                                        <ArrowsRightFill
                                            className={cl.ArrowsRightFill}
                                        />
                                    </div>
                                </button>
                            </div>
                            <div
                                className={
                                    cl.container_posts_1 + ' ' + cl.center
                                }
                            >
                                <div className={cl.container_user__plug}>
                                    <div
                                        className={
                                            cl.container_user +
                                            ' ' +
                                            cl.container_user_1
                                        }
                                    >
                                        <div className={cl.user_photo}>
                                            <svg
                                                className={cl.user_photo__canva}
                                            >
                                                <circle
                                                    cx={48}
                                                    cy={48}
                                                    r={45}
                                                    fill="none"
                                                ></circle>
                                            </svg>
                                            <AvatarUser
                                                className={cl.avatarUser}
                                            />
                                        </div>
                                        <div className={cl.user_tag_name}>
                                            @Morsh
                                        </div>
                                    </div>
                                </div>
                                <button className={cl.btn_play}>
                                    <div>
                                        <ArrowsRightFill
                                            className={cl.ArrowsRightFill}
                                        />
                                    </div>
                                    <div className={cl.alert}>
                                        <WaveSound className={cl.WaveSound} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
