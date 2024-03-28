export interface CatFactInfo {
  id: string
  fact: string
}

export interface CatFactResponse {
  type: string
  fact: string
  id: number
}

export interface RandomCatFactState {
  data: CatFactInfo[]
  isLoading: boolean
  error: any
}
