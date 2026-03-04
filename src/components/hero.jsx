import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

import { FolderButton } from './folderButton'
import { HeroFolderButton } from './heroFolderButton'
import { Folders } from './folders'

import { gsap } from "gsap"

export const Hero = ({folderContent}) => {

    let foldersRef;
    let buttonRef;

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

        // Show folders container, then animate in
        tl.call(() => {
            foldersRef.style.display = 'flex'
        })
        tl.fromTo(foldersRef, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        )

        // Stagger each folder button child
        tl.fromTo(foldersRef.children,
            { opacity: 0, y: 20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out", stagger: 0.1 },
            "-=0.3"
        )
    }

    let heroContent = {
        title: "Joonas Nivala",
        subtitle: "Let's go!",
        pill: "JooNiv"
    }

    return (
        <div className={flex({
            direction: 'column',
            align: 'center',
            justify: 'center',
            height: '100vh',
            bg: 'bg',
            padding: '2rem',
            gap: '2rem',
        })}>
        
        <HeroFolderButton content={heroContent} num={folderContent?.length} setRef={(el) => (buttonRef = el)} color="gold" onClick={onClick} />
        <Folders folderContent={folderContent} setRef={(el) => (foldersRef = el)} className={css({
            display: 'none',
        })} />
        </div>
    )
}