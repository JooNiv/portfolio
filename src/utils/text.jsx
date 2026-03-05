import { css } from '../../styled-system/css'

export function parseBold(text) {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <span key={i} className={css({ fontWeight: '700', color: 'text/70' })}>{part.slice(2, -2)}</span>
        }
        return part
    })
}