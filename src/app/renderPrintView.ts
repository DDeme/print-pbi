export const recursiveWrapper = (className: string) => (items: HTMLElement[], numOfItems: number): HTMLElement[] => {
  const leftOver = items.length % numOfItems
  const numOfWrappers = ((items.length - leftOver) / numOfItems) + (leftOver > 0 ? 1 : 0)
  const wrappers: HTMLElement[] = []
  for (let i: number = 1; i < numOfWrappers;i++) {
    const max = (i * numOfItems)
    const min = max - numOfItems
    wrappers.push(createElementWithChildren(className, items.slice(min, max)))
  }

  return wrappers
}

const getParentTitle = (
  key: App.BasicValue,
  refObj: App.ReferenceObj
): App.BasicValue =>
  key !== null && refObj[key] && refObj[key]['Title']
    ? refObj[key]['Title']
    : ``

// render item
const getDelimiter = (...args: App.BasicValue[]): string =>
  args.some(v => v === null || v === ``) ? `` : ` - `


const createElementWithChildren = (className = ``, children: Array<HTMLElement | string> = [], el: string = `div`): HTMLElement => {
  const doc: HTMLElement = document.createElement(el)
  doc.className = className
  children.forEach(child => {

    if (typeof child === `string` && child !== ``) {
      const childEl: Text = document.createTextNode(child)
      doc.appendChild(childEl)
    }
    if (typeof child === `object`) {
      doc.appendChild(child)
    }

  })
  
  return doc
}


const renderItem = (item: App.PbiDto, refObj: App.ReferenceObj): HTMLElement => {
  
  const mainTitleEl: HTMLElement = createElementWithChildren(`main-title`)
  const idEl = createElementWithChildren(`id`, [`${item.ID}${getDelimiter(item.ID, item.Priority)}${item.Priority}`])
  const pointsEl = createElementWithChildren(`points`, [`${item[`Story Point Est`]}`])
  mainTitleEl.appendChild(idEl)
  mainTitleEl.appendChild(pointsEl)

  const itemEl: HTMLElement = createElementWithChildren(`item`, [mainTitleEl])
  const titleEl = createElementWithChildren(`title`, [`${item.Title}`])
 
  itemEl.appendChild(titleEl)

  const parentFeatureID = createElementWithChildren(`feature-text`, [`${item.Parent}`])
  const parentFeatureTitle = createElementWithChildren(`feature-text`, [`${getParentTitle(item.Parent, refObj)}`])

  itemEl.appendChild(parentFeatureID)
  itemEl.appendChild(parentFeatureTitle)
  return itemEl
}

// render row
const renderRows = recursiveWrapper(`row`)

// render page
const renderPages = recursiveWrapper(`canvas`)

// generateHtml
const generateHtml = ([keys, refObj]: App.RenderingArgs, [rows, cols]: [number, number]): HTMLElement[] =>
 renderPages(renderRows(keys.map(key => renderItem(refObj[key], refObj)), rows), cols)
  

export const renderPrintView = (
  renderArgs: App.RenderingArgs,
  printContainer: HTMLElement,
  rowscols: [number, number], 
): void => {
  const toPrint = generateHtml(renderArgs, rowscols)
  printContainer.innerHTML = ""
  toPrint.forEach((el) => {
    printContainer.appendChild(el)
  })
}
