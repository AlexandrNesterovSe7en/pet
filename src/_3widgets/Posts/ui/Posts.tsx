import { Post } from '@/_5entities/Post'
import { Props } from '../model/Props'
import cl from './Posts.module.css'

function Posts({ posts }: Props) {
    return (
        <div className={cl.posts_container}>
            <div className={cl.posts_wrapper}>
                {posts.map((item, index) => {
                    return (
                        <Post
                            key={index}
                            images={item.images}
                            audios={item.audios}
                            texts={item.texts}
                            plugg={item.plugg}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Posts
