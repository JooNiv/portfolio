import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

import { parseBold } from '../utils/text'

import { Tag } from './tag'

import { For } from "solid-js"

export const AboutMe = (props) => {
    return (
        <div className={flex({ direction: 'column', gap: '1rem' })}>
            <div class="content-element" className={flex({
                            direction: {base: 'column', xs: 'row'},
                            gap: '0.5rem',
                            align: {base: 'start', xs: 'center'},
                        })}
                    >       
                            <For each={props.folderContent?.data?.tags} fallback={<div>No tags</div>}>
                                {(tag) => <Tag text={tag} />}
                            </For>
            </div>
            <For each={props.folderContent?.data?.chapters} fallback={<div>No content</div>}>
                {(chapter) => <p class="content-element">{parseBold(chapter)}</p>}
            </For>
            
        </div>
    )
}