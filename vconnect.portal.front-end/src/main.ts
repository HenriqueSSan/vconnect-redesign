import { createApp as create } from 'vue'
import root_component from './router.component.vue'
import router from "./router"
import './style.css'

const application = create(root_component)

application.use(router)
application.mount("#app")


