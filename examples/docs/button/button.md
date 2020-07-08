# button

:::demo
```html
<template>
 <button @click="handleChange">{{num}}</button>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        this.num++
      }
    }
  };
</script>
```
按钮点击+1
:::
