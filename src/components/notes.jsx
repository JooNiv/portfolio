import { flex } from '../../styled-system/patterns'
import { cx } from '../../styled-system/css'

import { For, createSignal, createEffect, onMount, Show } from "solid-js"

import { openAddNotesModal } from './addNotesModalContent'

import { NoteCard } from './noteCard'

import { VsDash } from 'solid-icons/vs'

export const Notes = (props) => {

    const [pauseText, setPauseText] = createSignal("Pause")
    const [overflows, setOverflows] = createSignal(false)
    let containerRef;
    let carouselRef;

    const testNotes = [
        { content: "This is a note.", author: "Alice" },

    ]

    const [notes, setNotes] = createSignal(testNotes)

    const checkOverflow = () => {
        if (!carouselRef || !containerRef) return false;
        return carouselRef.scrollWidth > containerRef.clientWidth;
    }

    const checkAndSetOverflow = () => {
        const doesOverflow = notes().length > 0 && checkOverflow();
        setOverflows(doesOverflow);
        if (carouselRef) {
            carouselRef.style.animationPlayState = doesOverflow ? 'running' : 'paused';
            setPauseText(doesOverflow ? "Pause" : "Resume");
        }
    }

    createEffect(() => {
        notes();
        requestAnimationFrame(() => requestAnimationFrame(checkAndSetOverflow));
    })

    onMount(() => {
        const el = containerRef?.parentElement;
        if (!el) return;
        el.addEventListener('check-overflow', checkAndSetOverflow);
    })

    return (
        <div
            ref={(el) => props.setRef?.(el)}
            className={cx(
                flex({
                    display: 'none',
                    direction: 'column',
                    width: '100%',
                    gap: '1rem',
                    color: 'muted',
                    paddingBottom: '4rem',
                    overflowX: 'clip',
                }),
                props.className
            )}>
            <div className={flex({
                direction: { base: 'column', sm: 'row' },
                align: { base: 'start', sm: 'center' },
                gap: { base: '0.5rem', sm: '2rem' }
            })}>
                <p className={flex({ align: 'center' })} ><VsDash /> NOTES </p>
                <div className={flex({ direction: 'row', gap: '1rem' })}>
                    <Show when={overflows()}>
                        <button
                            className={flex({
                                paddingX: '0.8rem 0.8rem',
                                paddingY: '0.1rem',
                                borderRadius: '5px',
                                borderColor: 'muted',
                                border: '1px solid',
                                fontSize: { base: 'xs', xs: 'sm' },
                                width: 'fit-content',
                                cursor: 'default',
                                bg: 'surface',
                                _hover: {
                                    bg: 'hover',
                                    cursor: 'pointer',
                                },
                                zIndex: 1,
                            })}
                            onClick={
                                () => {
                                    if (carouselRef && overflows()) {
                                        if (carouselRef.style.animationPlayState === 'paused') {
                                            carouselRef.style.animationPlayState = 'running';
                                            setPauseText("Pause")
                                            return
                                        }
                                        else {
                                            carouselRef.style.animationPlayState = 'paused';
                                            setPauseText("Resume")
                                        }
                                    }
                                }
                            } >
                            {pauseText()}
                        </button>
                    </Show>
                    <button
                        onClick={() => openAddNotesModal(setNotes)}
                        className={flex({
                            paddingX: '0.8rem 0.8rem',
                            paddingY: '0.1rem',
                            borderRadius: '5px',
                            borderColor: 'muted',
                            border: '1px solid',
                            fontSize: { base: 'xs', xs: 'sm' },
                            width: 'fit-content',
                            cursor: 'default',
                            bg: 'surface',
                            _hover: {
                                bg: 'hover',
                                cursor: 'pointer',
                            },
                            zIndex: 1,
                        })}>
                        Add Note
                    </button>
                </div>
            </div>
            <div
                ref={containerRef}
                className={flex({
                    direction: 'row',
                    width: '100%',
                })}>
                <div
                    ref={carouselRef}
                    className={cx(
                        flex({
                            direction: 'row',
                            gap: '1rem',
                            width: 'max-content',
                        }),
                        'carousel carousel-track'
                    )}>
                    <For each={overflows() ? [...notes(), ...notes()] : notes()} fallback={<div>No notes</div>}>
                        {(note) => (
                            <NoteCard note={note} />
                        )}
                    </For>
                </div>
            </div>
        </div>
    )
}