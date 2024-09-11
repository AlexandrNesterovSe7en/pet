import { ReactNode } from 'react'

export type PostProps = {
    images?: ReactNode[]
    audios?: ReactNode[]
    texts?: string
    plugg?: boolean
}

export type Props = PostProps
