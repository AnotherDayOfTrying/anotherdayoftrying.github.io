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
                <template #drawer-content>
                    <div class="resume">
                        <div class="resume-card">
                            <h1>Academic</h1>
                            <h3>Computer Engineering w/ Software Specialization, BSc Co-op, 2024</h3>
                            <h4>University of Alberta | Edmonton, Alberta</h4>
                            <b>Grade Point Average(GPA): 3.7/4.0</b>
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <h1>Work Experience</h1>
                            <h2>Cloud DevOps Intern May 2022 - Aug 2023</h2>
                            <h3>Nutrien</h3>
                            <ul>
                                <li>Implemented role-based access control on an internal platform requiring work with React, .NET, AWS Cloud Infrastructure, and PostgreSQL</li>
                                <li>Enhanced 200+ repositories with CircleCI CI/CD pipelines, custom CircleCI Orbs, and SonarQube streamlining the development process and ensuring code quality</li>
                                <li>Created CLI tools to standardize GitHub repository settings and AWS configurations</li>
                                <li>Deployed AWS infrastructure for automated key rotation and merging development branches</li>
                                <li>Monitored, identified, and resolved application bottlenecks with SIEM tools</li>
                            </ul>
                            <h2>Research Assistant May 2021 - Aug 2021</h2>
                            <h3>University of Alberta</h3>
                            <ul>
                                <li>Responsible for full-stack development of riverice.ca using Next.js and Firebase services</li>
                                <li>Authored a comprehensive user manual detailing usage instructions and functionalities for a river ice analysis program coded in C and C++ </li>
                            </ul>
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <h1>Technical Skills</h1>
                            <p><b>Programming Languages:</b> Python, TypeScript/JavaScript, C#, Java, SQL, C++, HTML5, CSS3</p>
                            <p><b>Frameworks:</b> React, Django, Next.js, Android</p> 
                            <p><b>Database Management Systems:</b> PostgreSQL, MongoDB</p>
                            <p><b>Cloud Computing:</b> AWS, Firebase, Heroku</p>
                            <p><b>DevOps:</b> CircleCI, GitHub Actions, Splunk, Docker, Git, SonarQube</p>
                            <p><b>Certificates:</b> Google Cyber Security Certificate</p>
                        </div>
                    </div>
                </template>
            </DrawerItem>
            <DrawerItem color="#1a2a35" name="Projects">
                <template #icon>
                    <i class="pi pi-folder"></i>
                </template>
                <template #drawer-content>

                </template>
            </DrawerItem>
            <DrawerItem color="#121922" name="About Me">
                <template #icon>
                    <i class="pi pi-id-card"></i>
                </template>
                <template #drawer-content>
                    
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

.resume {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.resume-card {
    width: 60vw;
    height: 80vh;
    overflow-y: scroll;
}

::-webkit-scrollbar {
    width: 0;
}
</style>