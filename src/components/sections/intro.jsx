import { flex } from '../../../styled-system/patterns'
import { css, cx } from '../../../styled-system/css'
import { dynText } from '../../utils/cva'



const COLORS = ['gold', 'blue', 'orange', 'green', 'purple']

export const Intro = (props) => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]

    return (
        <div
            ref={(el) => props.setRef?.(el)}
            className={flex({
                direction: 'column',
                justify: 'center',
                color: 'muted',
                width: '100%',
                align: 'start',
                paddingY: '4rem',
                display: 'none',
                gap: "1rem"
            })}>
            <div className={flex({
                direction: { base: 'column', xs: 'row' },
                gap: '0.25rem',
                fontSize: '4rem',
            })}>
                <h1 className={css({ fontWeight: 'bold', color: 'text' })}> Joonas </h1>
                <h1 className={cx(css({ fontWeight: 'bold' }), dynText({ color: randomColor }))}> Nivala </h1>

            </div>
            <div className={flex({
                direction: { base: 'column', xs: 'row' },
                gap: { base: '1rem', xs: '2rem' }

            })}>
                <p>Quantum Computing Specialist & Software Developer</p>
                <p className={css({ display: { base: 'none', xs: 'block' } })} > | </p>
                <p className={css({ color: 'faint', textWrap: 'nowrap' })}>Helsinki, Finland</p>
            </div>
        </div>
    )
}