declare namespace App {
  type BasicValue = string | number | null

  export interface PbiDto {
    ID: string
    Title: BasicValue
    [`Work Item Type`]: BasicValue // TODO:should be ENUM
    [`Story Point Est`]: BasicValue
    Parent: BasicValue
  }

  export interface ReferenceObj {
    [index: string]: PbiDto
  }

  export type RenderingArgs = [string[], ReferenceObj]
}
