import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/Home"
import About from "@/views/About"

Vue.use(VueRouter)

const router = new VueRouter({// eslint-disable-line no-unused-vars
    mode: "history",
    routes: [
        {
            path:"/",
            component: Home
        },  // path : "/" 일 때 "Home" component 표시
        {
            path:"/about",
            component: About
        },
    ]
})

export default router;