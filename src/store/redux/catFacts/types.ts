export interface CatFactInfo {
  id: string
  fact: string
}

export interface CatFactResponse {
  fact: string
  id: number
}

export interface RandomCatFactState {
  data: CatFactInfo[]
  isLoading: boolean
  error: any
}
