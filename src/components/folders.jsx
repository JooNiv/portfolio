import { flex } from '../../styled-system/patterns'
import { cx } from '../../styled-system/css'

import { FolderButton } from "./folderButton"

import { For } from "solid-js"

const COLORS = ['blue', 'orange', 'green', 'purple']

export const Folders = (props) => {

    let buttonContents = [
        { id: "projects", title: "Projects", subtitle: "Selected works", pill: "Src" },
        { id: "aboutme", title: "About Me", subtitle: "Who?", pill: "README" },
        { id: "skills", title: "Skills", subtitle: "What I know", pill: "Stack" },
        { id: "contact", title: "Contact", subtitle: "Get in touch", pill: "Contact" },
    ]

    const sortedFolderContent = buttonContents.map(content => props.folderContent.find(fc => fc?.data?.id === content.id))

    console.log(sortedFolderContent)

    return (
        <div
            ref={(el) => props.setRef?.(el)}
            className={cx(
                flex({
                    direction: 'column',
                    width: '100%',
                    maxWidth: '800px',
                    gap: '1rem',
                }),
                props.className
            )}>
            <For each={COLORS} fallback={<div>No folders</div>}>
                {(color, index) => (
                    <FolderButton folderContent={sortedFolderContent[index()]} num={sortedFolderContent[index()]?.data?.len} key={color} content={buttonContents[index()]} color={color} />
                )}
            </For>

        </div>
    )
}