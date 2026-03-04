import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'
import { makeColorCva } from '../utils/cva'

import { Switch, Match } from "solid-js"

import { AboutMe } from './aboutme'
import { Skills } from './skills'
import { Contact } from './contact'

const dynBorder = makeColorCva('borderColor', 'accent')

export const FolderContent = (props) => {

    return (
        <div ref={props.ref} className={css({
                bg: 'surface',
                boxShadow: 'md',
                borderRadius: '0 0 20px 20px',
                width: 'full',
                height: "0px",
                overflow: 'scroll',
                visibility: 'hidden',
                maxHeight: '350px',
            })}>
            <div className={flex({
                gap: '1rem',
                paddingX: {base: '1rem', xs:'2rem'},
                paddingY: '0.5rem',                
            })}>
                <div className={css(
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        borderY: '1px solid',
                        width: 'full',
                        paddingBottom: '1rem',
                        paddingTop: '1rem',
                        gap: '1rem',
                        color: 'text.muted',
                    },
                    dynBorder.raw({ color: props.color })
                )}>
                    

                    <Switch fallback={<div>Not Found</div>}>
                    <Match when={props.folderContent?.data?.id === "aboutme"}>
                        <AboutMe folderContent={props.folderContent} />
                    </Match>
                    <Match when={props.folderContent?.data?.id === "skills"}>
                        <Skills folderContent={props.folderContent} />
                    </Match>
                    <Match when={props.folderContent?.data?.id === "contact"}>
                        <Contact folderContent={props.folderContent} />
                    </Match>
                    </Switch>
                    
                </div>
            </div>
        </div>
    )
}