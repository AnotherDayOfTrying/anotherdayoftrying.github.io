import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        cssLayer: {
            name: 'primevue',
            // Enable PrimeVue CSS layer and configure the tailwind styles to have higher specificity with layering
            order: 'styles, tailwind-base, primevue, tailwind-utilities',
        },
    }
})

app.mount('#app')
