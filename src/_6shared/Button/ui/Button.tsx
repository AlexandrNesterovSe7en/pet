import { classNames } from '@/_7helpers/classnames/classNames'
import { ButtonProps } from '../model/Props/Props'
import cl from './Button.module.css'
import SVGicons from '../model/SVGicons/ui/SVGicons'

function Button({
    _svg,
    className,
    children,
    _type = 'primary',
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={classNames(cl.btn, [className, cl[_type]])}
        >
            {_svg && <SVGicons _SVG={_svg} />}
            {children}
        </button>
    )
}

export default Button
