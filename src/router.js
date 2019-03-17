import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import App from './App.vue'
import Home from '@/components/Home.vue'
import Contact from '@/components/Contact.vue'
import Whois from '@/components/Whois.vue'
import Carrier from '@/components/Carrier.vue'

// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode: 'history',

  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/app',
      component: App
    }, {
      path: '/whois',
      component: Whois
    }, {
      path: '/carrier',
      component: Carrier
    }, {
      path: '/contact',
      component: Contact
    }

  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router
