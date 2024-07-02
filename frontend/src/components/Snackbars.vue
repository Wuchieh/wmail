<template>
  <v-snackbar
      :multi-line="multiLine"
      :timeout="timeout"
      :location="location"
      :color="color"
      rounded="pill"
      v-model="show">
    {{ content }}
    <template v-slot:actions>
      <v-btn
          :color="color?'':'pink'"
          variant="text"
          @click="show = false"
      >
        關閉
      </v-btn>
    </template>

  </v-snackbar>
</template>

<script setup lang="ts">
import {ref} from "vue";

type Anchor = "top" | "bottom" | "start" | "end" | "left" | "right"
type color = "primary" | "secondary" | "success" | "danger" | "warning" |"red"

interface ShowOption {
  content: string
  'multi-line'?: boolean
  timeout?: number
  location?: Anchor,
  color?: color
}

const getColor = (c?: color):color => {
  if (!c) return "secondary"
  else if (c == 'danger') return 'red'
  else return c
}

const show = ref(false)
const content = ref("")
const multiLine = ref(false)
const timeout = ref(3000)
const color = ref<color | "">("")
const location = ref<Anchor>('bottom')


const Show = (option: ShowOption) => {
  content.value = option.content
  timeout.value = option.timeout ?? 3000
  multiLine.value = !!option['multi-line']
  location.value = option.location ?? 'bottom'
  color.value = getColor(option.color) ?? "secondary"

  show.value = true
}

defineExpose({Show})
</script>

<style scoped>

</style>
