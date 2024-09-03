import { ReactNode } from 'react'
import { SVGiconsProps } from '../../Props/Props'
import ArrowsRightFill from '../../../../../../public/Arrows/RightFill/ui/ArrowsRightFill'
import ArrowLeft from '../../../../../../public/Arrows/ui/ArrowLeft'

const SVG_DATA: Record<SVGiconsProps, ReactNode> = {
    ArrowRightFill: <ArrowsRightFill />,
    ArrowLeft: <ArrowLeft />,
}

function SVGicons({ _SVG }: { _SVG: SVGiconsProps }) {
    const nodeElemSVG = SVG_DATA[_SVG]
    return <div>{nodeElemSVG}</div>
}

export default SVGicons
