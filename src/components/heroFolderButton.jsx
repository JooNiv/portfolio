import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'
import { cva } from '../../styled-system/css'

import { gsap } from "gsap"

import { onMount } from "solid-js";

import { makeColorCva } from '../utils/cva'

const dynFill = makeColorCva('fill', 'folder')
const dynText = makeColorCva('color', 'accent')
const dynBg = makeColorCva('bg', 'accent', '/30')

export const HeroFolderButton = ({ content, setRef, onClick }) => {

    let el

    let color = content?.data?.color || 'gold'

    onMount(() => {
        if (!el) return
        gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.1, ease: "power3.in" })
        gsap.fromTo(el, { scale: 0 }, { scale: 1, duration: 0.1, ease: "power3.out" })
    })

    return (
        <button
            ref={(node) => {
                el = node
                setRef?.(node)
            }}
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
                userSelect: 'text',
                opacity: 0,
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
                        <span className={css({
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            
                        })}>{content?.data?.len}</span>
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
                            {content?.data?.title}
                        </h1>
                        <p className={css({
                            fontSize: { base: 'xs', xxs: 'sm' },
                            color: 'muted',
                            display: { base: 'block', xs: 'block' }
                        })}>
                            {content?.data?.subtitle}
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
                        {content?.data?.pill}
                    </p>
                </div>
            </div>
        </button>
    )
}