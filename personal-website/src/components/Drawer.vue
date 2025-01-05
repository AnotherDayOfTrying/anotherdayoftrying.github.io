<script setup>
import DrawerItem from './DrawerItem.vue';
import Carousel from 'primevue/carousel';
import Timeline from 'primevue/timeline';
import Tag from 'primevue/tag';
import Chip from 'primevue/chip';
import ZenZone from '@/assets/zenzone.png'
import HelloWorld  from '@/assets/helloworld.png';
import HabitsTracker from '@/assets/habitstracker.png'
import Me from '@/assets/me.jpeg'
</script>

<script>
export default {
    data() {
        return ['projects', 'overlay', 'nameStyle', 'nameToLocation', 'toggle', 'workExperience']
    },
    created() {
        this.projects = [
            {
                url: 'https://github.com/ECE-493-Group-20/ZenZone',
                image: ZenZone,
                name: 'ZenZone',
                description: 'Location Activity Tracker',
                skills: 'JS/TS, CI/CD, React, GCP',
            },
            {
                url: 'https://github.com/AnotherDayOfTrying/hello_world',
                image: HelloWorld,
                name: 'Hello_World',
                description: 'Distributed Social Platform',
                skills: 'Python, CI/CD, React, Heroku',
            },
            {
                url: 'https://github.com/CMPUT301F21T49/HabitsTracker',
                image: HabitsTracker,
                name: 'Habit Tracker',
                description: 'Personal Habit Tracker',
                skills: 'Android, Java',
                color: {color: '#333333aa'},
            }
        ]
        this.toggle = false
        this.workExperience = [
            {
                date: "May 2022 - Aug 2023",
                title: "Cloud DevOps Intern",
                company: "Nutrien",
                tasks: [
                    "Implemented role-based access control on an internal platform requiring work with React, .NET, AWS Cloud Infrastructure, and PostgreSQL",
                    "Enhanced 200+ repositories with CircleCI CI/CD pipelines, custom CircleCI Orbs, and SonarQube streamlining the development process and ensuring code quality",
                    "Created CLI tools to standardize GitHub repository settings and AWS configurations",
                    "Deployed AWS infrastructure for automated key rotation and merging development branches",
                    "Monitored, identified, and resolved application bottlenecks with SIEM tools",
                ]
            },
            {
                date: "May 2021 - Aug 2021",
                title: "Research Assistant",
                company: "University of Alberta",
                tasks: [
                    "Responsible for full-stack development of riverice.ca using Next.js and Firebase services",
                    "Authored a comprehensive user manual detailing usage instructions and functionalities for a river ice analysis program coded in C and C++",
                ]
            },
        ]
    },
    mounted() {
        this.overlay = {
            left: document.getElementById('github').getBoundingClientRect().left + 45 + 'px',
            top: document.getElementById('github').getBoundingClientRect().top + - 15 + 'px',
        }
    },
    methods: {
        moveName(toggle) {
            if (window.innerWidth < 1024) {
                return
            }
            if (toggle) {
                const aboutMe = document.getElementById('about-me').getBoundingClientRect()
                this.nameToLocation = {
                    bottom: aboutMe.bottom + 30 + 'px',
                    left: aboutMe.left + 'px',
                }
                this.nameStyle = document.getElementById('my-name').style
                document.getElementById('my-name').style = `bottom: ${this.nameToLocation.bottom}; left: ${this.nameToLocation.left}; font-size: 4vw; translation: transform(50%, 50%)`
            } else {
                document.getElementById('my-name').style = this.nameStyle
            }   
        }
    }
}    
</script>

<template>
    <div class="center-card about-me-card hidden">
        <div id="about-me" class="hide">
            I want to build cool things.<br>
            Hopefully they don't break...<br><br>

            Email: <span class="highlight">javierjustin7@gmail.com</span>
        </div>
        <div class="hide">
            <img class="image-me" :src="Me">
        </div>
    </div>
    <div class="screen">
        <div class="container">
            <DrawerItem color="#285c69" name="Resume">
                <template #icon>
                    <i class="pi pi-book"></i>
                </template>
                <template #drawer-content>
                    <div class="center-card">
                        <div class="resume-card">
                            <div class="resume-title"><i class="pi pi-graduation-cap pi-resume-icons"></i><h1>Academic</h1></div>
                            <h3>Computer Engineering w/ Software Specialization, BSc Co-op, 2024</h3>
                            <h4>University of Alberta | Edmonton, Alberta</h4>
                            <b>Grade Point Average(GPA): <Tag value="3.7/4.0"></Tag></b>
                            <br>
                            <br>
                            <hr>
                            <br>
                            <div class="resume-title"><i class="pi pi-briefcase pi-resume-icons"></i><h1>Work Experience</h1></div>
                            <Timeline :value="workExperience">
                                <template #content="slotProps">
                                    <div>
                                        <div><strong>{{ slotProps.item.date }}</strong></div>
                                        <div>
                                            <h2>{{ slotProps.item.title }}</h2>
                                            <h3>{{ slotProps.item.company }}</h3>
                                            <ul>
                                                <li v-for="task in slotProps.item.tasks">{{ task }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </template>
                            </Timeline>
                            <br>
                            <hr>
                            <br>
                            <div class="resume-title"><i class="pi pi-list-check pi-resume-icons"></i><h1>Technical Skills</h1></div>
                            <h3>Programming Languages</h3>
                            <div>
                                <Chip>Python</Chip>
                                <Chip>Typescript/Javascript</Chip>
                                <Chip>C#</Chip>
                                <Chip>Java</Chip>
                                <Chip>SQL</Chip>
                                <Chip>HTML5/CSS3</Chip>
                            </div>
                            <h3>Frameworks</h3>
                            <div>
                                <Chip>React</Chip>
                                <Chip>Django</Chip>
                                <Chip>Next.js</Chip>
                                <Chip>Android</Chip>
                            </div>
                            <h3>Database Management Systems</h3>
                            <div>
                                <Chip>PostgreSQL</Chip>
                                <Chip>MongoDB</Chip>    
                            </div>
                            <h3>Cloud Computing</h3>
                            <div>
                                <Chip>AWS</Chip>
                                <Chip>Firebase</Chip>
                                <Chip>Heroku</Chip>
                            </div>
                            <h3>DevOps</h3>
                            <div>
                                <Chip>Git</Chip>
                                <Chip>CircleCI</Chip>
                                <Chip>Github Actions</Chip>
                                <Chip>Splunk</Chip>
                                <Chip>Docker</Chip>
                                <Chip>SonarQube</Chip>                                
                            </div>
                            <h3>Certificates</h3>
                            <div>
                                <Chip>Google Cyber Security Certificate</Chip>
                            </div>
                        </div>
                    </div>
                </template>
            </DrawerItem>
            <DrawerItem color="#1a2a35" name="Projects">
                <template #icon>
                    <i class="pi pi-folder"></i>
                </template>
                <template #drawer-content>
                    <div class="github-pointer" :style="overlay"><- check out my other projects</div>
                    <div class="center-card">
                        <Carousel :value="projects" vertical-view-port-height="100%" :num-visible="1" circular :show-indicators="false" :autoplayInterval="3000">
                            <template #item="project">
                                <div class="project-card">
                                    <a :href="project.data.url" >
                                        <img :src="project.data.image" />
                                        <h1 :style="project.data.color">{{ project.data.name }}</h1>
                                        <p :style="project.data.color">
                                            {{ project.data.description }} <br>
                                            Skills: {{ project.data.skills }}
                                        </p>
                                    </a>
                                </div>
                            </template>
                        </Carousel>
                    </div>
                </template>
            </DrawerItem>
            <DrawerItem color="#121922" name="About Me" :callback="moveName">
                <template #icon>
                    <i class="pi pi-id-card"></i>
                </template>
                <template #drawer-content>
                    <div class="center-card about-me-card">
                        <div @vue:mounted="moveName(true)">
                            I just want to build cool things.<br>
                            <br><br>

                            Email: <span class="highlight">javierjustin7@gmail.com</span>
                        </div>
                        <div>
                            <img class="image-me" :src="Me">
                        </div>
                    </div>
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

.hidden {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
}

.hide {
    visibility: hidden;
}

.center-card {
    width: 100vw;
    height: 100vh;
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

a {
    color: var(--color-text);
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
}

.p-carousel {
    width: 100%;
    /* height: 100%; */
    margin: auto;
}

.p-carousel-content-container {
    align-items: center;
    justify-content: center;
}

.project-card {
    border-radius: 10px;
    margin: 10%;
    padding: 1rem;
    position: relative;
    animation-name: float;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

.project-card:hover {
    animation: none;
}

.project-card > a > img {
    width: 100%;
    height: 60vh;
    border-radius: 10px;
    transition: box-shadow 0.5s;
    object-fit: cover;
}

.project-card > a > img:hover {
    box-shadow: var(--color-text) 0 0 2px 2px;
}

.project-card > a > h1 {
    position: absolute;
    bottom: 1rem;
    right: 0;
    font-weight: 900;
    font-size: 3em;
    transform-origin: bottom right;
    transform: rotate(-90deg) translate(100%, 0%);
    white-space: nowrap;
}

.project-card > a > p {
    position: absolute;
    bottom: 2em;
    left: 1em;
    font-size: x-small;
    white-space: nowrap;
}

.resume-card {
    width: 60vw;
    height: 80vh;
    overflow-y: scroll;
    border: 1px black solid;
    padding: 1rem;
    background-color: #121922;
    transition: box-shadow 1s;
}

.resume-card:hover {
    box-shadow: var(--color-text) 0 0 2px 2px;
}

.resume-title {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

@keyframes float {
    0%      {transform: rotate(0deg);}
    25%     {transform: rotate(0.5deg);}
    50%     {transform: rotate(0deg);}
    75%     {transform: rotate(-0.75deg);}
    100%    {transform: rotate(0deg);}
}

.github-pointer {
    font-family: 'Courier New', Courier, monospace;
    position: absolute;
    transform-origin: bottom left;
    rotate: -30deg;
    z-index: 9999999;
}

.about-me-card {
    justify-content: space-around;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.image-me {
    width: 300px;
    height: 400px;
    object-fit: cover;
}

.highlight {
  color: #ed6b35;
}

/* 
::-webkit-scrollbar {
    width: 0;
} */

@media (max-width: 1024px) {
    .project-card > a > h1 {
        /* bottom: 2em; */
        font-size: 1.5em;
        /* white-space: nowrap; */
    }

    .project-card > a > p {
        display: none;
    }

    .about-me-card {
        flex-direction: column;
    }
    
    .image-me {
        width: 240px;
        height: 320px
    }
    .resume-card > * {
        font-size: 0.5rem;
    }
    .resume-card > * > h1 {
        font-size: 1rem;
    }
    .resume-card > * > h2 {
        font-size: 0.75rem;
    }
    .resume-card > * > h3 {
        font-size: 0.5rem;
    }
}
</style>