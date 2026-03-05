import { flex } from '../../../styled-system/patterns'
import { css } from '../../../styled-system/css'
import { makeColorCva } from '../../utils/cva'

import { Switch, Match } from "solid-js"

import { AboutMe } from '../aboutme'
import { Skills } from '../skills'
import { Contact } from '../contact'
import { Projects } from '../projects'

const dynBorder = makeColorCva('borderColor', 'accent')

const contentComponents = {
    aboutme: AboutMe,
    skills: Skills,
    contact: Contact,
    projects: Projects,
}

export const FolderContent = (props) => {

    const Component = contentComponents[props.folderContent?.data?.id]

    return (
        <div ref={props.ref} className={css({
            bg: 'surface',
            boxShadow: 'md',
            borderRadius: '0 0 20px 20px',
            width: 'full',
            height: "0px",
            overflow: 'auto',
            overflowX: 'hidden',
            visibility: 'hidden',
            maxHeight: '350px',
            borderColor: 'bg',
            paddingBottom: '1rem',
            _dark: {
                border: '1px solid',
                borderTopWidth: '0px',
                borderColor: 'faint',
            },
        })}>
            <div className={flex({
                gap: '1rem',
                paddingX: { base: '1rem', xs: '2rem' },
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
                        color: 'muted',
                    },
                    dynBorder.raw({ color: props.folderContent?.data?.color })
                )}>


                    {Component ? 
                    <Component folderContent={props.folderContent} /> 
                    : <div class="content-element">Not Found</div>}

                </div>
            </div>
        </div>
    )
}