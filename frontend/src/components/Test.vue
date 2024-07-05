<template>
  <v-container fluid class="d-flex ga-2 flex-wrap">
    <canvas
      @click="saveImg"
      id="myCvs"
      style=""/>
  </v-container>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";

const color = '#000'
const size = 2732
const arcW = size / 16
const fontSize = size / 1.3 * devicePixelRatio
let cvs: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

const saveImg = (e: MouseEvent) => {
  const dataUrl = (e.target as HTMLCanvasElement).toDataURL("image/png")
  const aTag = document.createElement('a')
  aTag.download = `logo-${color.substring(1)}-bg-fff-${size}x${size}.png`
  aTag.href = dataUrl
  aTag.click()
}

const draw = () => {
  if (!cvs) {
    cvs = document.querySelector('#myCvs') as HTMLCanvasElement;
  }

  if (!ctx) {
    ctx = cvs.getContext('2d') as CanvasRenderingContext2D;
  }

  // 清空畫布
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  // 設置畫布寬高
  cvs.width = size * devicePixelRatio
  cvs.height = size * devicePixelRatio

  // 背景
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  // 圓形邊框
  ctx.beginPath()
  const r = size / 2 * devicePixelRatio - arcW * devicePixelRatio / 2
  ctx.arc(cvs.width / 2, cvs.height / 2, r, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.lineWidth = arcW * devicePixelRatio
  ctx.stroke()

  // 中間的字
  ctx.font = `${fontSize}px 華康中圓體`; // 設置字體和大小
  ctx.fillStyle = color; // 設置顏色
  ctx.textAlign = 'center'; // 設置文字水平對齊方式
  ctx.textBaseline = 'middle'; // 設置文字垂直對齊方式
  ctx.scale(1.5, 1)
  ctx.fillText('w', cvs.width / 2 - fontSize / 4.7, cvs.height / 2);
}

const onResize = () => {
  draw()
}

onMounted(() => {
  draw()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})


</script>

<style scoped>

</style>
