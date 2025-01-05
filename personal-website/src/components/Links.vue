<script setup lang="ts">
import LinksItem from './LinksItem.vue'
import IconGithub from './icons/IconGithub.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconLeetcode from './icons/IconLeetcode.vue'
import IconTwitch from './icons/IconTwitch.vue'
import IconYoutube from './icons/IconYoutube.vue'
</script>

<template>
    <div class="screen">
        <div class="container">
            <LinksItem ref="github" id="github" name="Github" src="https://github.com/AnotherDayOfTrying">
                <template #icon>
                    <IconGithub />
                </template>
            </LinksItem>
            <LinksItem name="Leetcode" src="https://leetcode.com/u/IJFH/">
                <template #icon>
                    <IconLeetcode />
                </template>
            </LinksItem>
            <LinksItem name="Linkedin" src="https://www.linkedin.com/in/j-justin/">
                <template #icon>
                    <IconLinkedin />
                </template>
            </LinksItem>
            <!-- <LinksItem name="Instagram" src="./404">
                <template #icon>
                    <IconInstagram />
                </template>
            </LinksItem> -->
            <LinksItem name="Twitch" src="https://www.twitch.tv/01adot">
                <template #icon>
                    <IconTwitch />
                </template>
            </LinksItem>
            <LinksItem name="Youtube" src="./404">
                <template #icon>
                    <IconYoutube />
                </template>
            </LinksItem>
        </div>
    </div>
</template>

<style scoped>
.screen {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 9999;
}

.item {
    margin: 2rem 1rem;
    display: flex;
    position: relative;
}
</style>