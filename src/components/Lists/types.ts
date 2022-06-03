export type MainProps = {
  id: string
  title: string
  slider?: number
  details?: string
  parents?: string[]
}

export type DataProps = {
  id: string
  title: string
  slider?: number
  details?: string
  parents?: string[]
  childs?: MainProps[]
}

export type Props = {
  listId: string
  data: DataProps[]
  editableTitle?: boolean
  slider?: boolean
  sort?: boolean
  checkbox?: boolean
  details?: boolean
  displayParent?: boolean
}

export type ListTypes = 'first' | 'second' | 'third'

export type TitleBlockProps = {
  item: DataProps
  details: boolean
  editable: boolean
  onChange: (e: any, id: string) => void
  displayDetails: boolean
  setDisplayDetails: React.Dispatch<React.SetStateAction<boolean>>
  listType?: ListTypes
}

export type ItemBlockProps = {
  item: DataProps
  value: DataProps[]
  setValue: React.Dispatch<React.SetStateAction<DataProps[]>>
  details: boolean
  editableTitle: boolean
  slider: boolean
  listId: string
  checkbox: boolean
  displayParent: boolean
  listType?: ListTypes
  index: number
  length: number
}
