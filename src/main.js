import { createApp } from 'vue'
import App from './App.vue'
import EmployeeList from './components/EmployeeList.vue'

const app = createApp(App)
app.component('EmployeeList', EmployeeList)
app.mount('#app')
