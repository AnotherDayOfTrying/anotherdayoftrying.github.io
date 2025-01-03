<script setup>
import DrawerItem from './DrawerItem.vue';
</script>

<template>
    <div class="screen">
        <div class="container">
            <DrawerItem color="#285c69" name="Resume">
                <template #icon>
                    <i class="pi pi-book"></i>
                </template>
            </DrawerItem>
            <DrawerItem color="#1a2a35" name="Projects">
                <template #icon>
                    <i class="pi pi-folder"></i>
                </template>
            </DrawerItem>
            <DrawerItem color="#121922" name="About Me">
                <template #icon>
                    <i class="pi pi-id-card"></i>
                </template>
            </DrawerItem>

        </div>
    </div>
</template>

<style scoped>
.screen {
    position: absolute;
    right: 0;
    top: 0;
    padding-left: 1rem;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    overflow: hidden;
}

.tab {
    width: 4rem;
    height: 4rem;
    background-color: aqua;
}
</style>