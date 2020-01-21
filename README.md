# Web App for printing Azure DevOps PBI's

App make pritable export for Azure product backlog item.

![](demo.gif)

## How to use 

Export PBI´s in azure to csv file containg all required columns. 

## Import CSV File schema sample

| ID     | Title                    | Work Item Type       | Story Point Est | Parent |
|--------|--------------------------|----------------------|-----------------|--------|
| 123456 | Title for PBI or Feature | Feature              |                 |        |
| 123457 | Implement print report   | Product Backlog Item | 2               | 123456 |
|        |                          |                      |                 |        |

For testing data example see ./MOCK_DATA.csv

## How to create query in Azure DevOps ? 

Follow official documentation here. 
[https://docs.microsoft.com/en-us/azure/devops/boards/queries/using-queries?view=azure-devops](https://docs.microsoft.com/en-us/azure/devops/boards/queries/using-queries?view=azure-devops)


## How can I export query result to csv file ? 

Follow official documentation here.
[https://docs.microsoft.com/en-us/azure/devops/boards/work-items/email-work-items?view=azure-devops&tabs=browser#export](https://docs.microsoft.com/en-us/azure/devops/boards/work-items/email-work-items?view=azure-devops&tabs=browser#export)
