import { flex } from '../../../styled-system/patterns'
import { openModal } from '../layout/modal'

import { BasicButton } from '../ui/basicButton';

import { deleteNote } from '../../utils/notesAPI';
import { getToken } from '../../utils/loginAPI';

export const openManageNotesModal = (setNotes, notes) => {
    openModal(() => <ManageNotesModalContent setNotes={setNotes} notes={notes} />, "Manage Notes")
}

const ManageNotesModalContent = (props) => {

    return (
        <>
            {/* Header */}
            <div className={flex({
                direction: 'row',
                align: 'center',
                justify: 'center',
                gap: '2rem',
                paddingX: '1.5rem',
                paddingY: '1rem',
                paddingBottom: '1rem',
                color: 'muted'
            })}>
                <div
                    className={flex({
                        direction: 'column',
                        align: 'center',
                        justify: 'center',
                        gap: '1rem'
                    })}
                >
                    {props.notes() && props.notes().length > 0 ? (
                        props.notes().map(note => (
                            <div
                                key={note.id}
                                className={flex({
                                    direction: { base: 'column', sm: 'row' },
                                    justify: 'space-between',
                                    borderBottom: '1px solid #eee',
                                    gap: '1rem',
                                    width: { base: '100%' },
                                    wordBreak: 'break-word',
                                })}
                            >
                                <div className={flex({
                                    direction: 'column',
                                    gap: '0.25rem',
                                })}>
                                    <div><strong>Author:</strong> {note.author}</div>
                                    <div><strong>Content:</strong> {note.content}</div>
                                    <div><strong>ID:</strong> {note.id}</div>
                                </div>
                                <div className={flex({
                                    direction: 'column',
                                    justify: 'center',
                                    flexWrap: 'no-wrap',
                                    flexShrink: 0,
                                })}>
                                    <BasicButton
                                        onClick={async () => {
                                            const token = await getToken();
                                            await deleteNote(note.id, token);
                                            let curNotes = props.notes();
                                            props.setNotes(curNotes.filter(n => n.id !== note.id));
                                        }}
                                    >
                                        Delete
                                    </BasicButton>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No notes available.</div>
                    )}
                </div>
            </div>
        </>
    )
}