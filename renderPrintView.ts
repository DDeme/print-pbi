export const renderCards = () => {
  
}

const makeItem = (item) => 
		`<div class="grid-item">
				<div class="Id">${item.ID}</div>
				<div class="Title">${item.Title}</div>
				<div class="fId">${item.featureID}</div>
				<div class="fTitle">${item.featureTitle}</div>
		</div>`

const dataLoop = (items) => 
	`<div class="grid-container">${items.map(makeItem).join('')}</div>`


const generateHtml = (items) => dataLoop(items)


const addFeatureTag = (data: any) => {
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

