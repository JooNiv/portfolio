import { css } from "../../../styled-system/css"
import { flex } from "../../../styled-system/patterns"

export const NoteCard = (props) => {
    return (
        <div className={flex({
            direction: 'column',
            gap: '1rem',
            padding: '1rem',
            _light: {
                boxShadow: 'md',
            },
            _dark: {
                        border: '1px solid',
                        borderColor: 'faint',
                    },
            borderRadius: '0.5rem',
            bg: 'surface',
            color: 'text',
            minWidth: {base: '100px', sm: '250px'},
            zIndex: 1,
        })}>
            <p>{props.note.content}</p>
            <p>- {props.note.author}</p>
        </div>
    )
}