import { flex } from '../../../styled-system/patterns'
import { ThemeSwitcher } from '../themeSwitcher'
import { onCleanup, onMount } from 'solid-js'
import gsap from 'gsap'

export const Header = () => {
    let headerRef

    onMount(() => {
        let lastScroll = window.scrollY
        const showHeader = () => gsap.to(headerRef, { y: 0, duration: 0.2, ease: 'power2.out' })
        const hideHeader = () => gsap.to(headerRef, { y: -80, duration: 0.2, ease: 'power2.in' })

        const onScroll = () => {
            const currentScroll = window.scrollY
            if (currentScroll > lastScroll && currentScroll > 50) {
                hideHeader()
            } else if (currentScroll < 50) {
                showHeader()
            }
            lastScroll = currentScroll
        }

        window.addEventListener('scroll', onScroll)
        onCleanup(() => window.removeEventListener('scroll', onScroll))
    })

    return (
        <div className={flex({
            position: 'fixed',
            top: '1rem',
            zIndex: 100,
            direction: 'row',
            maxWidth: '1000px',
            justify: 'space-between',
            color: 'muted',
            width: '100%',
            height: '4rem',
            align: 'center',
            transition: 'transform 0.2s',
            padding: '2rem'
        })}>
            <div ref={el => headerRef = el} className={flex({
                direction: 'row',
                gap: '1rem'
            })}>
                <p>JN </p>
                <p> / </p>
                <p> PORTFOLIO</p>
            </div>
            <div className={flex({
                direction: 'row',
                gap: '0.25rem'
            })}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}