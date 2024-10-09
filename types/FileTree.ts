export interface Node {
  name: string
  filepath: string
  nodes?: Node[]
  disabled?: boolean
}
