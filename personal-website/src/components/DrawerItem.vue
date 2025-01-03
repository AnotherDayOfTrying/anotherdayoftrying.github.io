<script setup>
import Image from 'primevue/image'
import Drawer from 'primevue/drawer';
</script>

<script>
export default {
  data() {
    return {visible: false}
  },
  props: ['color', 'name'],
  computed: {
    background() {
        return {
            "background-color": this.color,
        }
    },
    drawerStyle() {
        return {
            "width": '100%',
            "background-color": this.color,
        }
    }
  }
}
</script>

<template>
    <Drawer v-model:visible="visible" header="Drawer" position="right" :style="drawerStyle">
        <template #container>
            <slot name="drawer-content"></slot>
            <div @click="visible = false" class='button-location'>
                <i class="pi pi-chevron-right"></i>
            </div>
        </template>
    </Drawer>
    <div class="item" :style="background" @click="visible = true">
      <Image>
          <template #image>
              <slot class="icon" name="icon"></slot>
          </template>
      </Image>
      <div class="name">
        {{ name }}
      </div>
    </div>
  </template>
  
  <style scoped>
    .name {
        margin-left: 2rem;
    }


  .item {
    display: flex;
    align-items: center;
    position: relative;
    fill: var(--color-text);
    transition: fill 0.1s;
    width: 10rem;
    height: 4rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-family: 'SaucerBB';
    padding: 1rem;
  }

  .item {
    display: flex;
    position: relative;
    margin: 1rem 0;
    right: -1rem;
    animation-name: wiggle;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

.item:nth-last-of-type(2) {
    animation-delay: -0.5s;
}

.item:nth-last-of-type(3) {
    animation-delay: -1s;
}

.item:hover {
    right: 0rem;
    box-shadow: var(--color-text) 0 0 2px 2px;
    animation: none;
    cursor: pointer;
}

.button-location {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
}

.button-location > i {
    animation-name: button-wiggle;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

@keyframes button-wiggle {
    0%      {padding-right: 1rem}
    50%     {padding-right: 2rem}
    100%    {padding-right: 1rem}
}

@keyframes wiggle {
    0%      {right: -5rem}
    50%     {right: 0rem}
    100%    {right: -5rem}
}
  
  
  @media (min-width: 1024px) {

  }
  </style>
  