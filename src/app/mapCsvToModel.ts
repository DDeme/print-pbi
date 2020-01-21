const UNIQUE_FIELD = `ID`

// TODO: improve don´t do double loop 
export const mapCsvToModel = (lines: any[]): App.RenderingArgs => {
    const refObj: App.ReferenceObj = {}
    const keys: string[] = []
    lines.forEach(line => {
        const key = line.hasOwnProperty(UNIQUE_FIELD) ? line[UNIQUE_FIELD] : ``
        if (key !== ``) {
            keys.push(key)
            refObj[key] = line
        }
    })
    return [keys, refObj]
}