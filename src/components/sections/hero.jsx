import { flex } from '../../../styled-system/patterns'
import { css } from '../../../styled-system/css'

import { FolderButton } from '../folder/folderButton'
import { HeroFolderButton } from '../folder/heroFolderButton'
import { Folders } from '../sections/folders'
import { Header } from '../layout/header'
import { Footer } from '../layout/footer'
import { Intro } from './intro'
import { Notes } from './notes'
import { Modal } from '../layout/modal'

import { gsap } from "gsap"

export const Hero = ({folderContent, heroContent}) => {

    let foldersRef;
    let buttonRef;
    let heroRef;
    let introRef;
    let notesRef;

    const onClick = () => {
        if (!buttonRef || !foldersRef) return

        const tl = gsap.timeline()

        // Animate button out
        tl.to(buttonRef, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power3.in",
            onComplete: () => { buttonRef.style.display = 'none' }
        })

        tl.fromTo(heroRef,
            { alignItems: 'center', justifyContent: 'center' },
            { alignItems: 'center', justifyContent: 'flex-start', duration: 0.1, ease: "power3.inOut" }
        )

        // Show folders container, then animate in
        tl.call(() => {
            foldersRef.style.display = 'flex'
            introRef.style.display = 'flex'
            notesRef.style.display = 'flex'
        })

        // After notes are visible, trigger overflow check
        tl.call(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // Dispatch a custom event that Notes can listen to
                    notesRef.dispatchEvent(new CustomEvent('check-overflow'))
                })
            })
        })
        tl.fromTo(introRef, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        )

        tl.fromTo(foldersRef, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out"},
            "-=0.5"
        )

        // Stagger each folder button child
        tl.fromTo(foldersRef.children,
            { opacity: 0, y: 20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out", stagger: 0.1 },
            "-=0.3"
        )
    }

    return (
        <div 
            role="main"
            className={flex({
            direction: 'column',
            bg: 'transparent',
            align: 'center',
            maxWidth: '1000px',
            minHeight: '100vh',
            width: 'full',
            padding: '2rem',
        })}>
            <Header />

            <Intro setRef={(el) => (introRef = el)}/>

            <Notes setRef={(el) => (notesRef = el)} />
            
            <div ref={(el) => (heroRef = el)} className={flex({
                direction: 'column',
                align: 'center',
                justify: 'center',
                flex: '1',
                width: 'full',
                gap: '2rem',
            })}>
            
            <HeroFolderButton content={heroContent} setRef={(el) => (buttonRef = el)} onClick={onClick} />
            <Folders folderContent={folderContent} setRef={(el) => (foldersRef = el)} className={css({
                display: 'none',
            })} />
            </div>

            <Footer />
            <Modal />
        </div>
    )
}