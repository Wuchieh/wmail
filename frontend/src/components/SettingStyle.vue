<template>
  <div>
    <div class="d-flex ga-3">
      <v-text-field
        label="輸入框"
        :variant="setTextFieldStyle"/>
      <v-select
        v-model="setTextFieldStyle"
        :items="textFieldStyle"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {KTFS, SetData, useStore} from "@/plugins/store/store";

const textFieldStyle = ["filled", "outlined", "plain", "solo", "solo-inverted", "solo-filled"] as const;
type TextFieldStyleType = typeof textFieldStyle[number];
const setTextFieldStyle = ref<TextFieldStyleType>("outlined")

const {defaults} = useStore()

watch(setTextFieldStyle, v => {
  SetData(KTFS, v)
  defaults.VTextField.variant = v
})

onMounted(() => {
  setTextFieldStyle.value = defaults.VTextField.variant as TextFieldStyleType
})
</script>

<style scoped>

</style>
