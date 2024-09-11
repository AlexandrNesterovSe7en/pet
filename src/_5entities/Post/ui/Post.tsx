import cl from './Post.module.css'
import { UserAvatar } from '@/_6shared/UserAvatar'
import { Props } from '../model/Props'
import Button from '@/_6shared/Button'
import WaveSound from '../../../../public/Wave/Sound/ui/WaveSound'
function Post({ images, audios, texts, plugg }: Props) {
    if (!images && !audios && !texts) return

    return (
        <>
            <div className={cl.post}>
                {plugg ? (
                    <div className={cl.pluggAvatar}></div>
                ) : (
                    <UserAvatar _size="small" className={cl.avatar_user} />
                )}
                <div className={cl.post_edit}>
                    {images && plugg ? (
                        <div className={cl.pluggImageContainer}>
                            <div
                                className={`${cl.post_image} ${
                                    plugg ? cl.pluggImage : ''
                                }`}
                            >
                                {images.map((item, index) => (
                                    <div key={index} className={cl.item}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className={cl.pluggTime}>9:41 PM</div>
                        </div>
                    ) : images ? (
                        <div className={`${cl.post_image}`}>
                            {images.map((item, index) => (
                                <div key={index} className={cl.item}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ) : null}

                    {audios && (
                        <div className={cl.post_audios}>
                            {audios.map((item, index) => (
                                <Button
                                    key={index}
                                    _type="play"
                                    _svg="ArrowRightFill"
                                >
                                    <div className={cl.alert}>
                                        <WaveSound className={cl.WaveSound} />
                                    </div>
                                </Button>
                            ))}
                        </div>
                    )}

                    {texts && (
                        <div
                            className={`${cl.post_texts} ${
                                plugg ? cl.pluggText : ''
                            }`}
                        >
                            {texts}
                            <div
                                className={
                                    cl.pluggTime +
                                    ' ' +
                                    cl.pluggTime__transparent
                                }
                            >
                                9:41 PM
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Post
