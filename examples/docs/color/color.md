# tab

:::demo
```html
<template>
<div>
  <div class="color-band" :style="{height:'20px', background: value}"></div>
  <input type="text" v-model="value">
</div>
</template>
<script>
export default {
   data() {
    return {
       value: '#000000'
    }
  }
}
</script>
<style class="scope">
</style>
```
:::
