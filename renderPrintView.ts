const csv = ``


interface PbiDto {
  ID: string,
  Title: string,
  featureID: string,
  featureTitle: string,
  ["Work Item Type"]: string,
}

const sampleData: PbiDto[] = [
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '45678979',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
]


export const renderCards = (): string => dataLoop(sampleData)



type RecursiveWrapperAccumulator = [string[], string]

export const recursiveWrapper = (items: string[], numOfItems: number, openTag = `<div>`, closingTag = `</div>`): string[] => {
  return items.reduce((acc: RecursiveWrapperAccumulator, item,i) => {
    
    if (i % numOfItems === 0) {
      acc[1] += openTag
    }
    acc[1] += item 

    if (i % numOfItems + 1 === numOfItems || i + 1  === items.length ) {
      acc[1] += closingTag
      acc[0].push(acc[1])
      acc[1] === ``
    }
    return acc
  }, [[], ``])[0]
}



// render row 

// rednder page



export const renderPrintView = () => {
  const printElement = document.querySelector('#print')
  printElement.innerHTML = renderCards()
}

const makeItem = (item:PbiDto): string => 
		`<div class="grid-item">
				<div class="Id">${item.ID}</div>
				<div class="Title">${item.Title}</div>
				<div class="fId">${item.featureID}</div>
				<div class="fTitle">${item.featureTitle}</div>
		</div>`

const dataLoop = (items: PbiDto[]) => 
	`<div class="grid-container">${items.map(makeItem).join('')}</div>`


const generateHtml = (items) => dataLoop(items)


const addFeatureTag = (data: any) => {
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
		return item
	})
}

