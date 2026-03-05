import { flex } from '../../styled-system/patterns'
import { ThemeSwitcher } from './themeSwitcher'

import { AiOutlineCopyrightCircle } from 'solid-icons/ai'

export const Footer = () => {
    return (
        <div className={flex({
            direction: {base: 'column', xs: 'row'},
            justify: 'space-between',
            color: 'muted',
            width: '100%',
            height: '4rem',
            align: 'center',
            paddingY: '3rem',
        })}>
            <div className={flex({
                direction: 'row',
                align: 'center',
                gap: '0.25rem'
            })}>
                <AiOutlineCopyrightCircle />
                <p> 2026 </p>
                <p> Joonas Nivala</p>
            
            </div>
            <div className={flex({
                direction: 'row',
                align: 'center',
                gap: '0.25rem'
            })}>
                <p>Made in Helsinki, FI </p>

            </div>
        </div>
    )
}