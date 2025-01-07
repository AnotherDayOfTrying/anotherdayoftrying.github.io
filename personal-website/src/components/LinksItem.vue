<script setup>
import Image from 'primevue/image'
</script>

<script>
export default {
  props: ['src']
}
</script>

<template>
    <div class="item">
      <Image>
          <template #image>
            <a :href=src rel="noopener" target="_blank">
              <slot class="icon" name="icon"></slot>
            </a>
          </template>
      </Image>
    </div>
  </template>
  
  <style scoped>
  .item {
    margin-top: 2rem;
    display: flex;
    position: relative;
    fill: var(--color-text);
  }
  
  a {
    fill: var(--color-text);
    transition: fill 0.5s;

  }

  a:hover {
    fill: #ed6b35;
  }
  
  @media (min-width: 1024px) {
    
  }
  </style>
  