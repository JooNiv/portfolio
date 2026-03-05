import { css, cx } from '../../styled-system/css'
import { grid, flex } from '../../styled-system/patterns'

import { Tag } from './tag'

import { For } from "solid-js"

export const Skills = (props) => {


    return (
        <div
            className={css({
                display: 'grid',
                gridTemplateColumns: { base: 'repeat(1, minmax(0, 1fr))', xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' },
                gap: '1px',
                marginY: '-1rem',
                bg: 'accent.green',
        })}>
            {Object.entries(props.folderContent?.data?.skills ?? {}).map(([category, items]) => (

                <div className={css({
                    bg: 'surface',
                    _hover: {
                        bg: 'hover',
                    },
                    transitionTimingFunction: 'linear',
                    transitionDuration: '200ms',
                    borderRadius: '0px',
                    paddingTop: '0.5rem',
                    paddingX: '0.5rem',
                    paddingBottom: '0.5rem',

                })}
                    key={category}>
                    <h3 className={css({
                        color: 'text/70',
                        fontSize: 'sm',
                        marginBottom: '1rem',

                    })}>
                        {category}</h3>
                    <div className={cx(
                        "content-element",
                        flex({
                            gap: '0.5rem',
                            wrap: 'wrap',
                        })
                    )}>
                        <For each={items} fallback={<div>No skills listed</div>}>
                            {(item) =>
                                <Tag text={item.name} tip={item.tip} name={item.name} />
                            }
                        </For>
                    </div>
                </div>
            ))}
        </div>
    )
}