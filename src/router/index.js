import { createRouter,createWebHistory } from "vue-router";


const routes =[

    // Transaction 
    {
        path:'/transaction',
        name:'transaction.index',
        component: ()=> import("../views/transaction/Index.vue")
    },
    
    {
        path:'/create',
        name:'transaction.create',
        component: ()=> import("../views/transaction/Create.vue")
    },


    {
        path:'/home',
        name:'views.home',
        component: ()=> import("../views/Home.vue")
    },

 
    
    // state 
    {
        path:'/state',
        name:'state.index',
        component: ()=> import("../views/state/Index.vue")
    },
 
    {
        path:'/state/create',
        name:'state.create',
        component: ()=> import("../views/state/Create.vue")
    },
 
    
    {
        path:'/state/edit/:id',
        name:'state.edit',
        component: ()=> import("../views/state/Edit.vue")
    },


    {
        path:'/edit/:id',
        name:'transaction.edit',
        component: ()=> import("../views/transaction/Edit.vue")
    },


//  Carousel Image 
{
    path:'/carousel',
    name:'views.carousel',
    component: ()=> import("../views/Carousel.vue")
},

    
    // Login And Register 
    {
        path:'/',
        name:'views.login',
        component: ()=> import("../views/Login.vue")
    },

    
    {
        path:'/register',
        name:'views.register',
        component: ()=> import("../views/Register.vue")
    },

    
    // Country
    {
        path:'/country',
        name:'country.index',
        component: ()=> import("../views/country/Index.vue")
    },

    {
        path:'/country/create',
        name:'country.create',
        component: ()=> import("../views/country/Create.vue")
    },

    {
        path:'/country/edit/:id',
        name:'country.edit',
        component: ()=> import("../views/country/Edit.vue")
    }


    
    

];


const router= createRouter({
    history:createWebHistory(),
    routes
});

export default router;