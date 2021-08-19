import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63599393 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _28f562da = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _f81bc26a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _58d4588d = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _4ac484a2 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _64b94922 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _d86cc55c = () => interopDefault(import('..\\pages\\electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _0f4a3671 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _4243170d = () => interopDefault(import('..\\pages\\furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _3ebf56f8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _08767ae1 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _577a568c = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _7fc77450 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _394bd6f7 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _2c38e904 = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _f74748c4 = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _f72b19c2 = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _5f12f89e = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _6f22e1cc = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _6b7869f5 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _7f53db30 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _1209e3f1 = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _df99d790 = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _e5925b9e = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _7f993e2a = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _7f7d0f28 = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _c9dfe898 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _c4aa5a0c = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _0b5f4757 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _0a91d166 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _9d8483f4 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _6f508a56 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _3e208546 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _3e2e9cc7 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _3e3cb448 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _3e4acbc9 = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _95d54a22 = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _02ae4bfa = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _d5b237ca = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _0eb29856 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _3272e608 = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _fb8904fa = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _1cabb940 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _16f8b16d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _63599393,
    name: "404"
  }, {
    path: "/about-us",
    component: _28f562da,
    name: "about-us"
  }, {
    path: "/blog",
    component: _f81bc26a,
    name: "blog"
  }, {
    path: "/cart",
    component: _58d4588d,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _4ac484a2,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _64b94922,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _d86cc55c,
    name: "electronics"
  }, {
    path: "/faq",
    component: _0f4a3671,
    name: "faq"
  }, {
    path: "/furniture",
    component: _4243170d,
    name: "furniture"
  }, {
    path: "/login",
    component: _3ebf56f8,
    name: "login"
  }, {
    path: "/my-account",
    component: _08767ae1,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _577a568c,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _7fc77450,
    name: "register"
  }, {
    path: "/shop",
    component: _394bd6f7,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _2c38e904,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _f74748c4,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _f72b19c2,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _5f12f89e,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _6f22e1cc,
    name: "cart-cart-2"
  }, {
    path: "/cart/empty-cart",
    component: _6b7869f5,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _7f53db30,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _1209e3f1,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _df99d790,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _e5925b9e,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _7f993e2a,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _7f7d0f28,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _c9dfe898,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _c4aa5a0c,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _0b5f4757,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _0a91d166,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _9d8483f4,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _6f508a56,
    name: "product-product-single-2"
  }, {
    path: "/shop/shop-2",
    component: _3e208546,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _3e2e9cc7,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _3e3cb448,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _3e4acbc9,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _95d54a22,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _02ae4bfa,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _d5b237ca,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _0eb29856,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _3272e608,
    name: "vendor-dashboard-setting"
  }, {
    path: "/blog/:slug",
    component: _fb8904fa,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _1cabb940,
    name: "product-id"
  }, {
    path: "/",
    component: _16f8b16d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
