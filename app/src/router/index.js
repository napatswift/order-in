import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ServeView from '@/views/OrderToServe/OrderToServeView.vue';
import HistoryView from '@/views/OrderHistory/OrderHistoryView.vue';
import OrderView from '@/views/OrderDetail/OrderDetailView.vue';
import NewCustomerView from '@/views/OrderQrCode/NewCustomerView.vue';
import OrderQrCodeView from '@/views/OrderQrCode/OrderQrCodeView.vue';
import MenuList from '@/views/CreateMenu/MenuList.vue';
import CreateMenu from '@/views/CreateMenu/CreateMenu.vue';
import PromotionList from '@/views/CreatePromotion/PromotionList.vue';
import CreatePromotion from '@/views/CreatePromotion/CreatePromotion.vue';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import OrderCooking from '@/views/OrderCooking/OrderCookingView.vue';
import OrderToDoList from '@/views/OrderToDoList/OrderToDoListView.vue';
import AllMenu from '@/views/Menu/AllMenuView.vue';
import DetailMenu from '@/views/Menu/DetailMenuView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/serve',
      name: 'serve-order',
      component: ServeView,
    },
    {
      path: '/history',
      name: 'order-history-list',
      component: HistoryView,
    },
    {
      path: '/order',
      name: 'order-detail',
      component: OrderView,
    },
    {
      path: '/new-customer',
      name: 'new-customer',
      component: NewCustomerView,
    },
    {
      path: '/new-customer/order-qrcode',
      name: 'order-qrcode',
      component: OrderQrCodeView,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('@/views/reviews/CreateReviewView.vue'),
    },
    {
      path: '/ThankYou',
      name: 'ThankYou',
      component: () => import('@/views/reviews/ThankYou.vue'),
    },
    {
      path: '/AllPromotion',
      name: 'AllPromotion',
      component: () => import('@/views/AllPromotionView.vue'),
    },
    {
      path: '/promptPay/create',
      name: 'promptPay.create',
      component: () => import('@/views/Payment/CreatePromptpayView.vue'),
    },
    {
      path: '/bill',
      name: 'bill',
      component: () => import('@/views/Payment/BillView.vue'),
    },
    {
      path: '/MenuList',
      name: 'MenuList',
      component: MenuList,
    },
    {
      path: '/CreateMenu',
      name: 'CreateMenu',
      component: CreateMenu,
    },
    {
      path: '/PromotionList',
      name: 'PromotionList',
      component: PromotionList,
    },
    {
      path: '/CreatePromotion',
      name: 'CreatePromotion',
      component: CreatePromotion,
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/create/manager-account',
      name: 'create-manager-account',
      component: () => import('@/views/Register/RegisterForManagerView.vue')
    },
      path: '/order-cooking',
      name: 'order-cooking',
      component: OrderCooking,
    },
    {
      path: '/order-to-do',
      name: 'order-to-do',
      component: OrderToDoList,
    },
    {
      path: '/menu',
      name: 'menu',
      component: AllMenu,
    },
    {
      path: '/menu/detail',
      name: 'detail-menu',
      component: DetailMenu,
    },
  ],
});

export default router;
