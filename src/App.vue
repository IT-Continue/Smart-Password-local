<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUIStore } from './stores/ui'

export default defineComponent({
  name: 'App',

  setup() {
    const uiStore = useUIStore()
    return { uiStore }
  },

  created() {
    window.addEventListener('resize', this.resizeListener)
    this.uiStore.setWindowWidth(window.innerWidth)
  },
  unmounted() {
    window.removeEventListener('resize', this.resizeListener)
  },
  methods: {
    resizeListener() {
      this.uiStore.setWindowWidth(window.innerWidth)
    }
  }
})
</script>
