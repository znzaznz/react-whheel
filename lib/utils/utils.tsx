export const classes = (...names: (string | undefined)[]) => {
    return names.filter(Boolean).join(' ')
}