import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'
import { Show, For } from "solid-js"
import { Dynamic } from "solid-js/web"
import { Tag } from './tag'
import { makeColorCva } from '../utils/cva'
import { parseBold } from '../utils/text'
import { AiOutlineArrowRight } from 'solid-icons/ai'
import { MdFillContent_cut } from 'solid-icons/md'
import { CgWebsite } from 'solid-icons/cg'
import { VsSearchFuzzy } from 'solid-icons/vs'
import { FaBrandsReact } from 'solid-icons/fa'
import { TbFillMoodHappy } from 'solid-icons/tb'
import { openModal } from './modal'

const iconMap = {
    qcut: MdFillContent_cut,
    portfolio: CgWebsite,
    qcutfind: VsSearchFuzzy,
    fiqciweb: FaBrandsReact,
    moodpixels: TbFillMoodHappy,
}

let dynBg = makeColorCva('bg', 'accent', '/10')

export const openProjectModal = (project) => {
    openModal(() => <ProjectModalContent project={/*@once*/ project} />)
}

const ProjectModalContent = (props) => {
    const project = props.project

    return (
        <>
            {/* Header */}
            <div className={flex({
                direction: 'row',
                align: 'center',
                gap: '1rem',
                paddingX: '1.5rem',
                paddingBottom: '1rem',
            })}>
                <div className={css(
                    flex.raw({
                        width: '3rem',
                        height: '3rem',
                        justify: 'center',
                        align: 'center',
                        borderRadius: '8px',
                    }),
                    dynBg.raw({ color: project.color })
                )}>
                    <Dynamic
                        component={iconMap[project.id]}
                        className={css({
                            fill: 'muted',
                            width: '1.5rem',
                            height: '1.5rem',
                        })}
                    />
                </div>
                <div className={flex({
                    direction: 'column',
                    gap: '0.1rem',
                })}>
                    <h2 className={css({
                        color: 'text',
                        fontSize: 'lg',
                        fontWeight: '600',
                        lineHeight: '1.2',
                    })}>{project.title}</h2>
                    <p className={css({
                        color: 'muted',
                        fontSize: 'sm',
                    })}>{project.subtitle}</p>
                </div>
            </div>

            {/* Divider */}
            <div className={css({
                marginX: '1.5rem',
                borderBottom: '1px solid',
                borderColor: 'faint',
            })} />

            {/* Body */}
            <div className={css({
                paddingX: '1.5rem',
                paddingY: '1.25rem',
            })}>
                {/* Tags */}
                <Show when={project.tags?.length > 0}>
                    <div className={flex({
                        gap: '0.5rem',
                        wrap: 'wrap',
                        color: 'muted',
                        marginBottom: '1rem',
                    })}>
                        <For each={project.tags}>
                            {(tag) => <Tag text={tag} />}
                        </For>
                    </div>
                </Show>

                {/* Description */}
                <Show when={project.description}>
                    <p className={css({
                        color: 'muted',
                        fontSize: 'sm',
                        lineHeight: '1.6',
                    })}>
                        {parseBold(project.description)}
                    </p>
                </Show>

                {/* Links */}
                <Show when={project.link}>
                    <div className={flex({
                        marginTop: '1.25rem',
                        gap: '0.75rem',
                    })}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={css({
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                paddingX: '1rem',
                                paddingY: '0.4rem',
                                borderRadius: '8px',
                                fontSize: 'sm',
                                fontWeight: '500',
                                color: 'text',
                                border: '1px solid',
                                borderColor: 'faint',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                _hover: {
                                    bg: 'hover',
                                },
                                transitionDuration: '150ms',
                            })}
                        >
                            View Project
                            <AiOutlineArrowRight />
                        </a>
                    </div>
                </Show>
            </div>
        </>
    )
}