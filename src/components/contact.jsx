import { flex } from '../../styled-system/patterns'
import { css, cx } from '../../styled-system/css'
import { Tag } from './tag'
import { makeColorCva } from '../utils/cva'
import { For } from "solid-js"
import { Dynamic } from "solid-js/web"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'solid-icons/ai'
import { FiArrowUpRight } from 'solid-icons/fi'

let dynBg = makeColorCva('bg', 'accent', '/10')

const iconClass = css({ 
    fill: 'muted',
    width: '1.5rem',
    height: '1.5rem',
})

const iconMap = {
    email: AiOutlineMail,
    github: AiFillGithub,
    linkedin: AiFillLinkedin,
}

export const Contact = (props) => {

    return (
        <div className={flex({ direction: 'column', gap: '0rem', marginY: '-1rem', marginX: '-2rem' })}>
            <For each={Object.entries(props.folderContent?.data?.links)} fallback={<div>No contacts</div>}>
                {([key, contact]) =>
                <a
                    href={contact.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cx(
                        "content-element",
                        flex({
                        paddingY: '0.25rem',
                        paddingX: '2rem',
                        direction: "row",
                        align: "center",
                        _hover: {
                            bg: 'hover',
                        },
                        justify: "space-between",
                    }))}
                >
                <div 
                    className={
                        flex({
                            direction: "row",
                            gap: "0.5rem",
                            align: "center",
                            height: '4rem',
                            transitionTimingFunction: 'linear',
                            transitionDuration: '200ms',
                        })
                    }
                >

                    <div className={
                        css(
                        flex.raw({
                            width: '3rem',
                            height: '3rem',
                            justify: 'center',
                            align: 'center',
                            borderRadius: '5px',
                        }),
                        dynBg.raw({ color: contact.color })
                        )}
                    >
                        <Dynamic 
                            component={iconMap[contact.id]} 
                            className={iconClass} 
                        />
                    </div>
                    
                    <div className={flex({
                        direction: 'column',
                        lineHeight: '1rem',
                    })}>
                        <p className={css({
                            color: 'text',
                            transitionTimingFunction: 'linear',
                            transitionDuration: '200ms',
                        })}>{contact.text}</p>
                        <p className={css({
                            display: {base: 'none', xs: 'block'},
                            color: 'muted',
                            fontSize: 'xs',
                        })}>{contact.url}</p>
                    </div>

                </div>
                <FiArrowUpRight />
                </a>
                }
            </For>
        </div>
    )
}