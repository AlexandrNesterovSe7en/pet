export function classNames(cls: string, arr?: (string | undefined)[]): string {
    let stroke: string = ''

    if (arr === undefined) return cls

    for (let item of arr) {
        if (item === undefined) continue
        stroke += item + ' '
    }
    return `${cls} ${stroke}`
}
