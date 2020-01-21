export interface PbiDto {
  	ID: string,
  	Title: string,
  	[`Work Item Type`]: string,
	[`Story Point Est`]: string | number | null,
	Parent: string | number | null,  
  	ParentTitle: string,
}

interface PrintConfig {
	rowsPerPage: number,
	itemsPerRow: number,
}

const CONFIG: PrintConfig = {
	rowsPerPage: 3,
	itemsPerRow: 3,
}

type RecursiveWrapperAccumulator = [string[], string]

export const recursiveWrapper = (numOfItems: number, openTag = `<div>`, closingTag = `</div>`) => (items: string[]): string[] => {
  const rendered = items.reduce((acc: RecursiveWrapperAccumulator, item,i) => {
    if (i % numOfItems === 0) {
      acc[1] += openTag
    }
      acc[1] += item 

    if (i % numOfItems === (numOfItems - 1 ) || i  === items.length - 1 ) {
      acc[1] += closingTag
      acc[0].push(acc[1])
      acc[1] = ``
    }
    
    return acc
  }, [[], ``])[0]

  return rendered
}

// render item
const renderItem = (item:PbiDto): string => 
		`<div class="item">
				<div class="main-title">
					<div class="id">${item.ID}</div>
					<div class="points">${item[`Story Point Est`]}</div>
				</div>
				<div class="title">${item.Title}</div>
				<div class="feature-text">${item.Parent}</div>
				<div class="feature-text">${item.ParentTitle}</div>
		</div>`

// render row 
const renderRows = recursiveWrapper(CONFIG.itemsPerRow, `<div class="row">`)

// render page
const renderPages = recursiveWrapper(CONFIG.rowsPerPage, `<div class="canvas">`)

// generateHtml
const generateHtml = (items: PbiDto[]): string => renderPages(renderRows(items.map(renderItem))).join(``)

const addFeatureTag = (data: PbiDto[]): PbiDto[] => {
	let remeberedTitle = ''

	// TODO: BUG: better mapping regardles order 
	return data.map(item => {
		if(item["Work Item Type"] === `Feature`){
			remeberedTitle = item.Title
			item.ParentTitle = ''
		} else {
			item.ParentTitle = remeberedTitle
		}

		return item
	})
}

export const renderPrintView = (items: PbiDto[], printContainer: HTMLElement): void => {
  printContainer.innerHTML = generateHtml(addFeatureTag(items))
}

