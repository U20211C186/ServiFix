import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";

import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import '@fortawesome/fontawesome-free/css/all.css';

import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import InputText from 'primevue/inputtext'
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Password from 'primevue/password';
import Card from "primevue/card";

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)
app.component("pv-splitter",Splitter)
app.component("pv-splitter-panel",SplitterPanel)
app.component("pv-input-text",InputText)
app.component("pv-toolbar",Toolbar)
app.component("pv-button",Button)
app.component("pv-password",Password)
app.component("pv-card",Card)
app.mount('#app')
