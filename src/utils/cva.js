import { cva } from '../../styled-system/css'

const COLORS = ['gold', 'blue', 'orange', 'green', 'purple']

export const makeColorCva = (prop, tokenBase, suffix = '') =>
    cva({
        variants: {
            color: Object.fromEntries(
                COLORS.map((c) => [c, { [prop]: `${tokenBase}.${c}${suffix}` }])
            ),
        },
        defaultVariants: { color: 'blue' },
    })