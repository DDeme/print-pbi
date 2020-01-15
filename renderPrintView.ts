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

