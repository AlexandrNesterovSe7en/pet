import Button from '@/_6shared/Button'
import cl from './pageChat.module.css'
import { type dataPosts, Posts } from '@/_3widgets/Posts'
import { ShareIcon } from '../../../public/Share'

const dataPosts: dataPosts = [
    {
        audios: ['asdf', 'asdf'],
        images: ['1', '2', '3'],
        texts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        plugg: true,
    },
]

function page() {
    return (
        <div className={cl.container}>
            <header className={cl.header}>
                <div className={cl.container_back}>
                    <Button
                        _svg="ArrowLeft"
                        _type="transparent"
                        className={cl.link_back}
                    ></Button>
                </div>
                <div className={cl.container_headUserName}>
                    <h1>nickname</h1>
                    <p>в сети</p>
                </div>
                <div className={cl.container_avatar}></div>
            </header>
            <main className={cl.container_main}>
                <Posts posts={dataPosts}></Posts>
            </main>
            <footer className={cl.contaienr_footer}>
                <button className={`${cl.share} ${cl.plugg_circle}`}>
                    <ShareIcon />
                </button>
                <div className={`${cl.container_masseging}`}>
                    <input
                        placeholder="Сообщение"
                        type="text"
                        className={cl.masseging}
                    ></input>
                    <Button _type="transparent" className={cl.smile}></Button>
                </div>
                <button
                    className={`${cl.send_video} ${cl.plugg_circle}`}
                ></button>
                <button
                    className={`${cl.send_audio} ${cl.plugg_circle}`}
                ></button>
            </footer>
        </div>
    )
}

export default page
