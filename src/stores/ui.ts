import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    windowWidth: null as number | null,
    sizeCode: null as string | null
  }),
  getters: {
    getWindowWidth: (state) => state.windowWidth,
    getSizeCode: (state) => state.sizeCode
  },
  actions: {
    setWindowWidth(width: number) {
      this.windowWidth = width

      if (width < 600) this.sizeCode = 'xs'
      else if (width < 960) this.sizeCode = 'sm'
      else if (width < 1264) this.sizeCode = 'md'
      else if (width < 1904) this.sizeCode = 'lg'
      else this.sizeCode = 'xl'
    }
  }
})
