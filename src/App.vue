<script setup>
import { ref } from 'vue'
import { add } from '@/utils/add.js'

const count = ref(0)

function increment() {
  count.value = add(count.value, 1)
}
</script>

<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    {{ count }}
    <button @click="increment">
      +1
    </button>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
