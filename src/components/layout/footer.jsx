import { flex } from '../../../styled-system/patterns'

import { openLoginModal } from '../modals/loginModalContent'

import { AiOutlineCopyrightCircle } from 'solid-icons/ai'

import { useAdmin } from '../state/adminState'

export const Footer = (props) => {
    const [isAdmin, setIsAdmin] = useAdmin()

    return (
        <div className={flex({
            direction: {base: 'column', xs: 'row'},
            justify: 'space-between',
            color: 'muted',
            width: '100%',
            //height: '4rem',
            align: 'center',
            paddingY: '2rem',
        })}>
            <div className={flex({
                direction: 'row',
                align: 'center',
                gap: '0.25rem'
            })}>
                <AiOutlineCopyrightCircle />
                <p> 2026 </p>
                <p onClick={() => openLoginModal(isAdmin, setIsAdmin) } > Joonas Nivala {isAdmin() ? 'Admin' : ''}</p>
            
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