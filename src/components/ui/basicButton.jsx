import { flex } from '../../../styled-system/patterns'

export const BasicButton = (props) => (
    <button
        onClick={props.onClick}
        type={props.type ?? 'button'}
        className={flex({
            paddingX: '0.8rem',
            paddingY: '0.1rem',
            borderRadius: '5px',
            borderColor: 'muted',
            border: '1px solid',
            fontSize: { base: 'xs', xs: 'sm' },
            width: 'fit-content',
            cursor: 'default',
            bg: 'surface',
            _hover: { bg: 'hover', cursor: 'pointer' },
            zIndex: 1,
            ...props.styles,
        })}>
        {props.children}
    </button>
)