import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'
import { openModal, closeModal } from './modal'

import { createSignal } from 'solid-js'

import { isProfane } from 'no-profanity';

export const openAddNotesModal = (setNotes) => {
    openModal(() => <AddNotesModalContent setNotes={setNotes}/>)
}

const AddNotesModalContent = (props) => {

    const [noteText, setNoteText] = createSignal("")
    const [authorName, setAuthorName] = createSignal("")
    const [error, setError] = createSignal("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!noteText() || !authorName()) {
            setError("Please fill in all fields.")
            return
        }
        else if (noteText().length > 30 || authorName().length > 30) {
            setError("Fields must be 30 characters or less.")
            return
        }
        else if (isProfane(noteText()) || isProfane(authorName())) {
            setError("Bruh.")
            return
        }
        setError("")
        props.setNotes((prev) => [...prev, { content: noteText(), author: authorName() }])
        closeModal()
    }

    return (
        <>
            {/* Header */}
            <div className={flex({
                direction: 'row',
                align: 'center',
                gap: '2rem',
                paddingX: '1.5rem',
                paddingY: '1rem',
                paddingBottom: '1rem',
                color: 'muted'
            })}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="New note"
                        value={noteText()}
                        onInput={(e) => setNoteText(e.target.value)}
                        className={css({
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            border: '1px solid',
                            borderColor: 'muted',
                            bg: 'bg',
                            color: 'text',
                            width: '100%',
                            marginBottom: '1rem',
                        })}
                    />
                    <input
                        type="text"
                        placeholder="Author name"
                        value={authorName()}
                        onInput={(e) => setAuthorName(e.target.value)}
                        className={css({
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            border: '1px solid',
                            borderColor: 'muted',
                            bg: 'bg',
                            width: '100%',
                            color: 'text',
                            marginBottom: '1rem',
                        })}
                    />
                    {error() && <p className={css({ color: 'accent.orange/70', marginBottom: '1rem' })}>{error()}</p>}
                    <button
                        type="submit"
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
                </form>
            </div>
        </>
    )
}