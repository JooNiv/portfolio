import { css, cx } from '../../../styled-system/css'
import { createSignal, Show } from "solid-js"
import { Portal } from "solid-js/web"

export const Tag = (props) => {
    const [showTip, setShowTip] = createSignal(false)
    const [pos, setPos] = createSignal({ x: 0, y: 0 })
    let tagRef

    const updatePos = () => {
        if (!tagRef) return
        const rect = tagRef.getBoundingClientRect()
        setPos({
            x: rect.left + rect.width / 2,
            y: rect.top - 8,
        })
    }

    const onEnter = () => {
        updatePos()
        setShowTip(true)
    }

    const onLeave = () => {
        setShowTip(false)
    }

    return (
        <div
            ref={tagRef}
            className={css({
                position: 'relative',
                display: 'inline-block',
            })}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <div
                className={cx(
                    css({
                        paddingX: '0.8rem 0.8rem',
                        paddingY: '0.1rem',
                        borderRadius: '5px',
                        borderColor: 'muted',
                        border: '1px solid',
                        fontSize: { base: 'xs', xs: 'sm' },
                        width: 'fit-content',
                        cursor: 'default',
                    })
                )}
            >
                {props.text}
            </div>
            <Show when={props.tip && showTip()}>
                <Portal>
                    <div
                        className={css({
                            position: 'fixed',
                            zIndex: 9999,
                            pointerEvents: 'none',
                            animation: 'tooltipIn 0.15s ease-out',
                            maxWidth: '150px',
                            })}
                        style={{
                            left: `${pos().x}px`,
                            top: `${pos().y}px`,
                            transform: 'translate(-50%, -100%)',
                        }}
                    >
                        <div
                            className={css({
                                paddingX: '0.6rem',
                                paddingY: '0.25rem',
                                borderRadius: '8px',
                                bg: 'surface',
                                color: 'muted',
                                fontSize: 'xs',
                                fontWeight: 'medium',
                                //whiteSpace: 'nowrap',
                                boxShadow: 'md',
                                border: '1px solid',
                                borderColor: 'faint',
                            })}
                        >
                            {props.tip}
                            <div
                                className={css({
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%) translateY(-1px)',
                                    width: 0,
                                    height: 0,
                                    borderLeft: '5px solid transparent',
                                    borderRight: '5px solid transparent',
                                    borderTop: '5px solid',
                                    borderTopColor: 'faint',
                                })}
                            />
                        </div>
                    </div>
                </Portal>
            </Show>
        </div>
    )
}

export default Tag;