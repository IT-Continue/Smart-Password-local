<template>
  <main>
    <div class="login">
      <van-row justify="center" align="center" style="min-height: 100vh">
        <van-col :span="columnSpan">
          <van-form @submit="onSubmit">
            <van-cell-group inset>
              <template #title>
                <h1>Set app password</h1>
              </template>
              <van-field
                v-model="password"
                type="password"
                left-icon="lock"
                placeholder="App password"
                :rules="[{ required: true }]"
              />
            </van-cell-group>
            <div style="margin: 16px">
              <van-button
                :disabled="password.length == 0"
                round
                block
                icon="arrow"
                icon-position="right"
                native-type="submit"
                color="var(--primary-color)"
              >
                SUBMIT
              </van-button>
            </div>
          </van-form>
        </van-col>
      </van-row>
    </div>
  </main>
</template>

<script lang="ts">
import { useUIStore } from '@/stores/ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginView',

  setup() {
    const uiStore = useUIStore()
    return { uiStore }
  },
  data: () => ({
    password: ''
  }),
  computed: {
    columnSpan(): number {
      let span: number
      switch (this.uiStore.getSizeCode) {
        case 'xs':
          span = 22
          break
        case 'sm':
          span = 16
          break
        case 'md':
          span = 12
          break
        case 'lg':
          span = 8
          break
        case 'xl':
          span = 6
          break
        default:
          span = 8
          break
      }
      return span
    }
  },
  methods: {
    onSubmit() {
      console.log(this.password)
      this.$router.push('home')
    }
  }
})
</script>
