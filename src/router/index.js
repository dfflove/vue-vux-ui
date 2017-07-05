import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HelloFromVux from '@/components/HelloFromVux'
import Home from '@/components/Home'
import Loan from '@/components/Loan'
import MemberCenter from '@/components/MemberCenter'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     name: 'HelloFromVux',
        //     component: HelloFromVux
        // },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/loanList',
            name: 'Loan',
            component: Loan
        },
        {
            path: '/memberCenter',
            name: 'MemberCenter',
            component: MemberCenter
        }
    ]
})