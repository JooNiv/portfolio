import { css } from '../../styled-system/css'

export const Tag = ({ text }) => {
    return (
        <div className={css({
            paddingX: '0.8rem 0.8rem',
            paddingY: '0.1rem',
            borderRadius: '5px',
            borderColor: 'text.muted',
            border: '1px solid',
            fontSize: { base: 'xs', xs: 'sm' },
            width: 'fit-content',
        })}>
            {text}
        </div>
    )
}

export default Tag;