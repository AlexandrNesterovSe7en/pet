import { ComponentProps } from 'react'

type TypesProps = 'primary' | 'transparent'
type TypesOnlySVG = 'play'

type ButtonOnlySVGProps = {
    _type?: TypesOnlySVG
    _svg: SVGiconsProps
}
type ButtonOwnProps = {
    _type?: TypesProps
}
export type SVGiconsProps = 'ArrowRightFill'

export type ButtonProps = {
    _svg?: SVGiconsProps
} & ComponentProps<'button'> &
    (ButtonOwnProps | ButtonOnlySVGProps)
