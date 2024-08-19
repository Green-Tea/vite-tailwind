import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EffectsView from '../views/EffectsView.vue'
import ProductView from '../views/ProductView.vue'
import ManageProductsView from '../views/ManageProductsView.vue'
import LoginView from '../views/LoginView.vue'
import { getAuth } from 'firebase/auth'

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/effects',
            name: 'effects',
            component: EffectsView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/admin',
            name: 'admin',
            component: ManageProductsView,
            meta: { requiresAuth: true }
        }
    ]
});

// Set up navigation guard to check authentication
router.beforeEach((to, _from, next) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (currentUser) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});

export default router;
