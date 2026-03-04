import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

import { parseBold } from '../utils/text'

import { Tag } from './tag'

import { For, Match } from "solid-js"

import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'solid-icons/ai'
import { FiArrowUpRight } from 'solid-icons/fi'


export const Contact = (props) => {
    return (
        <div className={flex({ direction: 'column', gap: '0rem', marginY: '-1rem' })}>
            <For each={Object.entries(props.folderContent?.data?.links)} fallback={<div>No contacts</div>}>
                {([key, contact]) =>
                <a class="content-element" href={contact.href} target="_blank" rel="noopener noreferrer" className={flex({
                    direction: "row",
                    align: "center",
                    paddingRight: '0.5rem',
                    _hover: {
                        bg: 'surface.hover',
                    },
                    justify: "space-between",
                })}>
                <div className={flex({
                    direction: "row",
                    gap: "0.5rem",
                    align: "center",
                    
                    paddingX: '0.5rem',
                    height: '4rem',
                    transitionTimingFunction: 'linear',
                    transitionDuration: '200ms',
                })}>
                    <Switch fallback={<div>Not Found</div>}>
                        <Match when={contact.id === "email"}>
                            <div className={flex({
                                width: '3rem',
                                height: '3rem',
                                bg: 'accent.email',
                                justify: 'center',
                                align: 'center',
                                borderRadius: '5px',
                            })}>
                            <AiOutlineMail className={css({ 
                                fill: 'text.muted',
                                width: '1.5rem',
                                height: '1.5rem',
                                })} />
                            </div>
                        </Match>
                        <Match when={contact.id === "linkedin"}>
                            <div className={flex({
                                width: '3rem',
                                height: '3rem',
                                bg: 'accent.linkedin',
                                justify: 'center',
                                align: 'center',
                                borderRadius: '5px',
                            })}>
                            <AiFillLinkedin className={css({ 
                                fill: 'text.muted',
                                width: '1.5rem',
                                height: '1.5rem',
                                })} />
                            </div>
                        </Match>
                        <Match when={contact.id === "github"}>
                            <div className={flex({
                                width: '3rem',
                                height: '3rem',
                                bg: 'accent.github',
                                justify: 'center',
                                align: 'center',
                                borderRadius: '5px',
                            })}>
                            <AiFillGithub className={css({ 
                                fill: 'text.muted',
                                width: '1.5rem',
                                height: '1.5rem',
                                })} />
                            </div>
                        </Match>
                    </Switch>
                    <div className={flex({
                        direction: 'column',
                        lineHeight: '1rem',
                    })}>
                        <p className={css({
                            color: 'text.muted',
                            _hover: {
                                color: 'text',
                            },
                            transitionTimingFunction: 'linear',
                            transitionDuration: '200ms',
                        })}>{contact.text}</p>
                        <p className={css({
                            color: 'text/70',
                            fontSize: 'sm',
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