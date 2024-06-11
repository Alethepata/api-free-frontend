import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import NewPost from "./pages/NewPost.vue";
import PostDetail from "./pages/PostDetail.vue";
import Error404 from "./pages/Error404.vue";
    
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component : Home
        },
        {
            path: "/new-posts",
            name: "new-posts",
            component : NewPost
        },
        {
            path: "/posts/:slug",
            name: "post-detail",
            component : PostDetail
        },
        {
            path: "/:pathMatch(.*)*",
            component: Error404,
        },
    ]
})

export { router };