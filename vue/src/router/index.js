import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/AppLogin.vue'
import Main from '@/views/main/AppMain.vue'
import DashBoard from '@/views/main/DashBoard.vue'
import Board from '@/views/board/Board.vue'

const routes = [
  {path: '/', alias: '/login', component: Login},
  {path: '/main', component: Main, children: [
    {path: '', component: DashBoard},
    {path: 'board', component: Board},
  ]},
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
});

export default router;
