declare namespace App {
  type BasicValue = string | number | null

  enum WorkItemType {
    Feature = `Feature`,
    Pbi = `Product Backlog Item`,
    Bug = `Bug`,
  }
  export interface PbiDto {
    ID: string
    Title: BasicValue
    [`Work Item Type`]: `` | null | WorkItemType
    [`Story Point Est`]: BasicValue
    Parent: BasicValue
    Priority: BasicValue
  }

  export interface ReferenceObj {
    [index: string]: PbiDto
  }

  export type RenderingArgs = [string[], ReferenceObj]
}
