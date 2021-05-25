interface PrintConfig {
  rowsPerPage: number
  itemsPerRow: number
  page: {
    size: PAGE_SIZE
    orientation: PAGE_ORIENTATION
  }
}

enum PAGE_ORIENTATION {
  PORTRAIT = `portrait`,
  LANDSCAPE = `landscape`,
}

enum PAGE_SIZE {
  A4 = `A4`,
}

const CONFIG: PrintConfig = {
  rowsPerPage: 3,
  itemsPerRow: 3,
  page: {
    size: PAGE_SIZE.A4,
    orientation: PAGE_ORIENTATION.LANDSCAPE,
  },
}

type RecursiveWrapperAccumulator = [string[], string]

export const recursiveWrapper = (
  numOfItems: number,
  openTag = `<div>`,
  closingTag = `</div>`
) => (items: string[]): string[] => {
  const rendered = items.reduce(
    (acc: RecursiveWrapperAccumulator, item, i) => {
      if (i % numOfItems === 0) {
        acc[1] += openTag
      }
      acc[1] += item

      if (i % numOfItems === numOfItems - 1 || i === items.length - 1) {
        acc[1] += closingTag
        acc[0].push(acc[1])
        acc[1] = ``
      }

      return acc
    },
    [[], ``]
  )[0]

  return rendered
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

const renderItem = (item: App.PbiDto, refObj: App.ReferenceObj): string =>
  `<div class="item">
				<div class="main-title">
					<div class="id">${item.ID}${getDelimiter(item.ID, item.Priority)}${
    item.Priority
  }</div>
					<div class="points">${item[`Story Point Est`]}</div>
				</div>
				<div class="title">${item.Title}</div>
				<div class="feature-text">${item.Parent}</div>
				<div class="feature-text">${getParentTitle(item.Parent, refObj)}</div>
		</div>`

// render row
const renderRows = recursiveWrapper(CONFIG.itemsPerRow, `<div class="row">`)

// render page
const renderPages = recursiveWrapper(CONFIG.rowsPerPage, `<div class="canvas">`)

// generateHtml
const generateHtml = ([keys, refObj]: App.RenderingArgs): string =>
  renderPages(
    renderRows(keys.map(key => renderItem(refObj[key], refObj)))
  ).join(``)

export const renderPrintView = (
  renderArgs: App.RenderingArgs,
  printContainer: HTMLElement
): void => {
  printContainer.innerHTML = generateHtml(renderArgs)
}
