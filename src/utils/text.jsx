export function parseBold(text) {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <span key={i} style={{ "font-weight": "600" }}>{part.slice(2, -2)}</span>
        }
        return part
    })
}