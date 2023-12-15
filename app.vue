<script setup lang="ts">
// This should be proxied
const { data } = await useFetch('/api/users', { server: true })
</script>

<template>
  <div v-if="data">
    Data: {{ data }}
  </div>
  <a href="/api/users" target="_blank">
    To the Endpoint
  </a>
</template>