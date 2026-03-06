import { flex } from '../../styled-system/patterns'
import { css, cx } from '../../styled-system/css'
import { Tag } from './ui/tag'
import { openProjectModal } from './modals/projectModalContent'
import { dynBgLight, dynText } from '../utils/cva'
import { For } from "solid-js"
import { Dynamic } from "solid-js/web"
import { AiOutlineArrowRight } from 'solid-icons/ai'
import { projectIconMap } from '../utils/iconMaps'

let dynBg = dynBgLight

const iconClass = css({ 
    fill: 'muted',
    width: '1.5rem',
    height: '1.5rem',
})

const iconMap = projectIconMap

const pillColorMap = {
    "New": 'green',
    "Work": 'blue',
    "School": 'purple',
    "Highlight": 'orange',
}

const Pill = (props) => {
    return (
        <div className={css({
            padding: '0.1rem 0.5rem',
            borderRadius: '5px',
            fontSize: 'xs',
            fontWeight: '500',
            width: 'fit-content',
            },
            dynText.raw({ color: pillColorMap[props.type] || props.color }),
            dynBg.raw({ color: pillColorMap[props.type] || props.color }),
        )}>
            {props.type}
        </div>
    )
}

export const Projects = (props) => {

    return (
        <div className={flex({ direction: 'column', gap: '0rem', marginY: '-1rem', marginX: '-2rem' })}>
            <For each={Object.entries(props.folderContent?.data?.projects)} fallback={<div>No projects</div>}>
                
                {([key, project]) => 
                <div 
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openProjectModal(project)}
                    onClick={(e) => {
                        e.preventDefault()
                        openProjectModal(project)
                    }}
                    
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
                    <div className={css({
                        display: {base: 'none', sm: 'block'},
                    })}>
                        <Pill type={project.pill} color={project.color} />
                    </div>
                    

                </div>
                <div className={css({
                        display: {base: 'none', xxs: 'block', sm: 'none'},
                    })}>
                        <Pill type={project.pill} color={project.color} />
                    </div>
                <button 
                    onClick={(e) => {
                        e.preventDefault()
                        openProjectModal(project)
                    }}
                    className={flex({
                        display: {base: 'none', sm: 'flex'},
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
                
                </div>
                }
            </For>
        </div>
    )
}