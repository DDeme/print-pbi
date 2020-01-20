export interface PbiDto {
  ID: string,
  Title: string,
  featureID: string,
  featureTitle: string,
  ["Work Item Type"]: string,
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
				<div class="id">${item.ID}</div>
				<div class="title">${item.Title}</div>
				<div class="feature-text">${item.featureID}</div>
				<div class="feature-text">${item.featureTitle}</div>
		</div>`

// render row 
const renderRows = recursiveWrapper(3, `<div class="row">`)

// rednder page
const renderPages = recursiveWrapper(3, `<div class="canvas">`)

// generateHtml
const generateHtml = (items: PbiDto[]): string => renderPages(renderRows(items.map(renderItem))).join(``)

const addFeatureTag = (data: PbiDto[]): PbiDto[] => {
	//data.filter(data => ['Product Backlog Item', ].includes(data['']) )
	let remeberedId = ``
	let remeberedTitle = ''
	return data.map(item => {

		if(item["Work Item Type"] === `Feature`){
			remeberedId = item.ID
			remeberedTitle = item.Title
			item.featureID = ''
			item.featureTitle = ''
		} else {
			item.featureID = remeberedId
			item.featureTitle = remeberedTitle
		}

	//	remeberedId =  item["Work Item Type"] === `Feature` ? item.ID : remeberedId

		return item
	})
}



export const renderPrintView = (items: PbiDto[], printContainer: HTMLElement): void => {
  printContainer.innerHTML = generateHtml(addFeatureTag(items))
}
