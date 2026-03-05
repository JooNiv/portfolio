import { flex } from '../../styled-system/patterns'
import { css, cx } from '../../styled-system/css'
import { Tag } from './tag'
import { openProjectModal } from './projectModalContent'
import { makeColorCva } from '../utils/cva'
import { For } from "solid-js"
import { Dynamic } from "solid-js/web"
import { MdFillContent_cut } from 'solid-icons/md'
import { AiOutlineArrowRight } from 'solid-icons/ai'
import { CgWebsite } from 'solid-icons/cg'
import { VsSearchFuzzy } from 'solid-icons/vs'
import { FaBrandsReact } from 'solid-icons/fa'
import { TbFillMoodHappy } from 'solid-icons/tb'

let dynBg = makeColorCva('bg', 'accent', '/10')

const iconClass = css({ 
    fill: 'muted',
    width: '1.5rem',
    height: '1.5rem',
})

const iconMap = {
    qcut: MdFillContent_cut,
    portfolio: CgWebsite,
    qcutfind: VsSearchFuzzy,
    fiqciweb: FaBrandsReact,
    moodpixels: TbFillMoodHappy,
}

export const Projects = (props) => {

    return (
        <div className={flex({ direction: 'column', gap: '0rem', marginY: '-1rem', marginX: '-2rem' })}>
            <For each={Object.entries(props.folderContent?.data?.projects)} fallback={<div>No projects</div>}>
                
                {([key, project]) => 
                <a  
                    onClick={(e) => {
                        e.preventDefault()
                        openProjectModal(project)
                    }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cx(
                        "content-element",
                        flex({
                        paddingY: '0.25rem',
                        direction: "row",
                        align: "center",
                        paddingX: {base: '2rem', md: '2rem'},
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
                            gap: "1rem",
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
                            flexShrink: '0',
                        }),
                        dynBg.raw({ color: project.color })
                        )}
                    >
                        <Dynamic 
                            component={iconMap[project.id]} 
                            className={iconClass} 
                        />
                    </div>
                    
                    <div className={flex({
                        direction: 'column',
                        gap: '0.25rem',
                        lineHeight: '1rem',
                    })}>
                        <div className={
                            flex({
                                direction: {base: "column", md: "row"},
                                gap: {base: '0.0rem', md: '0.5rem'},
                                align: {base: "start", md: "center"},
                                color: 'text',
                                fontWeight: '500',
                                transitionTimingFunction: 'linear',
                                transitionDuration: '200ms',
                            })
                        }>
                        <p>{project.title}</p>
                        <p className={css({
                            display: {base: 'none', md: 'block'},
                        })}>-</p>
                        <p className={css({
                            display: {base: 'none', xxs: 'block'},
                            color: {base: 'muted', md: 'text'},
                            fontSize: {base: 'xs', md: 'sm'},
                        })}>{project.subtitle}</p>
                        </div>
                        <div className={flex({
                            display: {base: 'none', xs: 'flex'},
                            marginTop: '-0.25rem',
                            color: 'muted',
                            fontSize: 'xs',
                            gap: '0.25rem',
                            align: 'center',
                            wrap: 'wrap',
                        })}>
                            <For each={project.tags} fallback={<div>No tags</div>}>
                                {(tag, index) => <>
                                    {index() > 0 && <span>·</span>}
                                    <p>{tag}</p>
                                </>}
                            </For>
                        </div>
                    </div>

                </div>
                <button 
                    onClick={(e) => {
                        e.preventDefault()
                        openProjectModal(project)
                    }}
                    className={flex({
                        display: {base: 'none', xxs: 'flex'},
                        align: 'center',
                        justify: 'center',
                        gap: '0.25rem',
                        paddingX: '0.8rem 0.8rem',
                        paddingY: '0.1rem',
                        borderRadius: '5px',
                        borderColor: 'muted',
                        border: '1px solid',
                        fontSize: { base: 'xs', xs: 'sm' },
                        width: 'fit-content',
                        _hover: {
                            bg: 'surface',
                            cursor: 'pointer',
                        },
                    })}>
                    <p>View</p>
                    <AiOutlineArrowRight className={css({
                        marginTop: '0.1rem',
                    })} />
                </button>
                
                </a>
                }
            </For>
        </div>
    )
}