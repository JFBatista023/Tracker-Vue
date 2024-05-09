import Projects from "@/views/Projects.vue";
import Tasks from "@/views/Tasks.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tasks',
        component: Tasks
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;