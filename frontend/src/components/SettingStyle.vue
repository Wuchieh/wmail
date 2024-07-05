<template>
  <div>
    <div class="d-flex">
      <v-text-field
        label="輸入框"
        class="v-col"
        :variant="setTextFieldStyle"/>
      <v-select
        class="v-col-5 v-col-md-3"
        v-model="setTextFieldStyle"
        :items="textFieldStyle"/>
    </div>
    <div class="d-flex">
      <v-select
        :variant="setSelectStyle"
        v-model="setSelectStyle"
        :items="textFieldStyle"
      class="v-col"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {KSTS, KTFS, SetData, textFieldStyle, TextFieldStyleType, useStore} from "@/plugins/store/store";


const setTextFieldStyle = ref<TextFieldStyleType>("outlined")
const setSelectStyle = ref<TextFieldStyleType>("outlined")
const {defaults} = useStore()

watch(setTextFieldStyle, v => {
  SetData(KTFS, v)
  defaults.VTextField.variant = v
})

watch(setSelectStyle, v => {
  SetData(KSTS, v)
  defaults.VSelect.variant = v
})

onMounted(() => {
  setTextFieldStyle.value = defaults.VTextField.variant as TextFieldStyleType
})
</script>

<style scoped>

</style>
