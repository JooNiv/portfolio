import { flex } from '../../../styled-system/patterns'
import { cx } from '../../../styled-system/css'

import { FolderButton } from "../folder/folderButton"

import { For, createSignal } from "solid-js"

import { VsDash } from 'solid-icons/vs'

export const Folders = (props) => {

    const [activeFolder, setActiveFolder] = createSignal(null)

    const handleFolderClick = (folder) => {
        if (activeFolder() === folder) {
            setActiveFolder(null)
            return
        }
        setActiveFolder(folder)
    }

    return (
        <div
            ref={(el) => props.setRef?.(el)}
            className={cx(
                flex({
                    direction: 'column',
                    width: '100%',
                    gap: '1rem',
                    color: 'muted',
                }),
                props.className
            )}>
            <p className={flex({align: 'center'})} ><VsDash /> FILES </p>
            <For each={props.folderContent} fallback={<div>No folders</div>}>
                {(content) => (
                    <FolderButton folderContent={content} key={content.data.id} active={activeFolder() === content} handleFolderClick={() => handleFolderClick(content)} />
                )}
            </For>
        </div>
    )
}