import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'

export default function (Vue, { head }) {
  Vue.use(VueDisqus, {
    shortname: 'b34rd-tech'
  })
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased font-serif' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://lab.subinsb.com/projects/francium/cryptodonate/css/cryptodonate.css'
  })
}
