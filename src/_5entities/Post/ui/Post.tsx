import cl from './Post.module.css'
import { UserAvatar } from '@/_6shared/UserAvatar'
import { Props } from '../model/Props'
import Button from '@/_6shared/Button'
import WaveSound from '../../../../public/Wave/Sound/ui/WaveSound'
function Post({ images, audios, texts }: Props) {
    if (!images && !audios && !texts) return

    return (
        <>
            <div className={cl.post}>
                <UserAvatar _size="small" className={cl.avatar_user} />
                <div className={cl.post_edit}>
                    {images && (
                        <div className={cl.post_image}>
                            {images.map((item, index) => (
                                <div key={index} className={cl.item}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}

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

                    {texts && <div className={cl.post_texts}>{texts}</div>}
                </div>
            </div>
        </>
    )
}

export default Post
