import { flex } from '../../../styled-system/patterns'
import { css } from '../../../styled-system/css'

import { gsap } from "gsap"

import { onMount, Show, createEffect } from "solid-js";

import { FolderContent } from "./folderContent"
import { dynFill, dynText, dynBg } from '../../utils/cva'

export const FolderButton = (props) => {

    let buttonRef;
    let contentRef;

    let color = props.folderContent?.data?.color || 'blue'

    const open = () => {

        gsap.to(buttonRef, { 
            borderBottomWidth: '0px', 
            duration: 0, 
        })

        gsap.to(contentRef, { 
            borderTopWidth: '0px', 
            duration: 0, 
        })

        const tl = gsap.timeline()
        tl.set(buttonRef, { borderRadius: '20px 20px 0 0', boxShadow: 'none' })
        tl.call(() => { contentRef.style.visibility = 'visible' })
        tl.fromTo(contentRef,
            { opacity: 0, height: 0 },
            { opacity: 1, height: 'auto', duration: 0.5, ease: "power2.inOut" }
        )
        tl.fromTo(contentRef.querySelectorAll('.content-element'),
            { opacity: 0, scale: 0.8, y: 10 },
            { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)", stagger: 0.05 },
            "-=0.2"
        )
    }

    const close = () => {

        gsap.to(buttonRef, { 
            borderBottomWidth: '1px', 
            duration: 0.3, 
            ease: "power2.inOut" 
        })


        const tl = gsap.timeline()
        tl.to(contentRef.querySelectorAll('.content-element'),
            { opacity: 0, scale: 0.8, y: -10, duration: 0.2, ease: "power2.in", stagger: 0.03 }
        )
        tl.to(contentRef, {
            opacity: 0, height: 0, duration: 0.5, ease: "power2.inOut",
            onComplete: () => { contentRef.style.visibility = 'hidden' }
        }, "-=0.1")
        tl.set(buttonRef, { borderRadius: '20px', duration: 0.01 }, "-=0.3")
    }

    const onClick = () => {
        if (!props.active) {
            open()
        } else {
            close()
        }
        props.handleFolderClick()
    }

    createEffect((prev) => {
        const isActive = props.active
        if (prev === true && isActive === false) {
            close()
        }
        return isActive
    })


    onMount(() => {
        gsap.fromTo(buttonRef, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power3.in", delay: 0.2 })
        gsap.fromTo(buttonRef, { scale: 0 }, { scale: 1, duration: 1, ease: "power3.out" })
    })

    return (
        <div>
            <button
                ref={buttonRef}
                onclick={onClick}
                className={flex({
                    bg: 'surface',
                    boxShadow: 'md',
                    _hover: {
                        bg: 'hover',
                        boxShadow: 'lg',
                    },
                    transitionTimingFunction: 'linear',
                    transitionDuration: '200ms',
                    direction: 'row',
                    borderRadius: '20',
                    padding: { base: '1rem', xs: '1rem 2rem' },
                    align: 'center',
                    gap: '1rem',
                    width: 'full',
                    borderColor: 'bg',
                    userSelect: 'text',
                    _dark: {
                        border: '1px solid',
                        borderColor: 'faint',
                    },
                })}>
                <div className={flex({
                    width: 'full',
                    direction: { base: 'column', xxs: 'row' },
                    align: { base: 'start', xxs: 'center' },
                    justify: 'space-between',
                    gap: '1rem',
                })}>
                    <div className={flex({
                        align: 'center',
                        gap: '1rem',
                    })}>
                        <div className={css({
                        position: 'relative',
                        width: '40px',
                        flexShrink: 0,
                    })}>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className={css({
                            width: '100%',
                            display: 'block',
                        },
                            dynFill.raw({ color })
                        )}>
                            <path d="M2 10C2 8.343 3.343 7 5 7h8.172a2 2 0 011.414.586L16.414 9.414A2 2 0 0017.828 10H31a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
                        </svg>
                        <Show when={!props.active}>
                            <span className={css({
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                
                            })}>{props.folderContent?.data?.len}</span>
                        </Show>
                    </div>
                        <div className={flex({
                            direction: 'column',
                            align: 'start',
                        })}>
                            <h1 className={css({
                                fontSize: { base: 'md', xs: 'xl' },
                                fontWeight: { base: "semibold", xs: "semibold" },
                                color: 'text',
                                textWrap: 'pretty',
                                textAlign: { base: 'left', xxs: 'left' }
                            })} >
                                {props.folderContent?.data?.title}
                            </h1>
                            <p className={css({
                                fontSize: { base: 'xs', xxs: 'sm' },
                                color: 'muted',
                                display: { base: 'block', xs: 'block' }
                            })}>
                                {props.folderContent?.data?.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className={css({
                        paddingX: '0.8rem 0.8rem',
                        paddingY: '0.1rem',
                        borderRadius: '20px',
                        fontSize: { base: 'xs', xs: 'sm' },
                        display: { base: 'block', xxs: 'block' }
                    },
                        dynBg.raw({ color })
                    )}>
                        <p className={css({
                            fontWeight: 'medium',
                        },
                            dynText.raw({ color })
                        )}>
                            {props.folderContent?.data?.pill}
                        </p>
                    </div>
                </div>
            </button>
            <FolderContent folderContent={props.folderContent} ref={contentRef} />
        </div>
    )
}