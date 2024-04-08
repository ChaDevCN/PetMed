import { makeAutoObservable } from 'mobx'

export class PlayerStore {
  drawerFromData = {}

  constructor() {
    makeAutoObservable(this)
  }
  setDrawerFromData(data:any){
    this.drawerFromData = data
  }
}

let store: PlayerStore | null = null

export function usePlayerStore() {
  if (store === null) {
    store = new PlayerStore()
  }
  return store
}