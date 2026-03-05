import { flex } from '../../../styled-system/patterns'
import { cx } from '../../../styled-system/css'

import { For, createSignal, createEffect, onMount, Show } from "solid-js"

import { openAddNotesModal } from '../modals/addNotesModalContent'

import { NoteCard } from '../ui/noteCard'

import { VsDash } from 'solid-icons/vs'
import { BasicButton } from '../ui/basicButton'

export const Notes = (props) => {

    const [pauseText, setPauseText] = createSignal("Pause")
    const [overflows, setOverflows] = createSignal(false)
    let containerRef;
    let carouselRef;

    const testNotes = [
        { content: "This is a note.", author: "Alice" },
        { content: "This is another note.", author: "Bob" },
        { content: "This is yet another note.", author: "Charlie" },
        { content: "This is a fourth note.", author: "David" },
        { content: "This is a fifth note.", author: "Eve" },
        { content: "This is a sixth note.", author: "Frank" },

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
            carouselRef.classList.remove('paused');
            if (!doesOverflow) {
                carouselRef.classList.add('paused');
            }
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
                        <BasicButton
                            onClick={
                                () => {
                                    if (carouselRef && overflows()) {
                                        if (carouselRef.classList.contains('paused')) {
                                            carouselRef.classList.remove('paused');
                                            setPauseText("Pause")
                                        } else {
                                            carouselRef.classList.add('paused');
                                            setPauseText("Resume")
                                        }
                                    }
                                }
                            } >
                            {pauseText()}
                        </BasicButton>
                    </Show>
                    <BasicButton
                        onClick={() => openAddNotesModal(setNotes)}
                    >
                        Add Note
                    </BasicButton>
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