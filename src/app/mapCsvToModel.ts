const UNIQUE_FIELD = `ID`

const DefaultRowValue: App.PbiDto = {
  ID: ``,
  Parent: ``,
  Title: ``,
  [`Work Item Type`]: ``,
  [`Story Point Est`]: ``,
  Priority: ``,
}

// TODO: improve don´t do double loop
export const mapCsvToModel = (lines: any[]): App.RenderingArgs => {
  const refObj: App.ReferenceObj = {}
  const keys: string[] = []
  lines.forEach(line => {
    const key = line.hasOwnProperty(UNIQUE_FIELD) ? line[UNIQUE_FIELD] : ``
    if (key !== ``) {
      keys.push(key)
      refObj[key] = Object.assign({}, DefaultRowValue, line)
    }
  })
  return [keys, refObj]
}
