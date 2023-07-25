export type CheckLists = CheckListRoot[]

export interface CheckListRoot {
  key?: string
  checklist?: Checklist[]
  createdAt: CreatedAt
}

export interface Checklist {
  check: boolean
  description: string
  order: number
}

export interface CreatedAt {
  nanoseconds: number
  seconds: number
}
