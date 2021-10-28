<template>
  <Layout>
    <main>
      <post-header :post="$page.post" />

      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16"
        :class="{'border-b border-grey-lighter pb-10 mb-16': !$page.post.author}">

        <alert v-if="postIsOlderThanOneYear" class="bg-orange-100 border-l-4 border-orange-500 text-orange-900">
          This post is over a year old, some of this information may be out of date.
        </alert>

        <div :class="{'pb-10': $page.post.author || $page.post.tags}"
          class="markdown text-lg leading-normal text-gray-700" v-html="$page.post.content" />

        <footer v-if="$page.post.author || $page.post.tags" class="flex flex-wrap pb-10 sm:pb-16">
          <div>
            <g-link v-for="tag in $page.post.tags" :key="tag.id" :to="`${tag.path}/`"
              class="inline-block text-teal-400 hover:text-white hover:bg-teal-400 border border-teal-400 font-sans font-bold text-xs sm:text-sm px-4 py-2 mr-4 mb-2 rounded-full transition-colors duration-300">
              <svg class="inline w-3 fill-current align-middle mr-1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" role="img">
                <path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /></svg>
              {{ tag.title }}
            </g-link>
          </div>
          <div v-if="$page.post.author"
            class="flex flex-wrap items-center justify-center sm:justify-left border-t border-b border-gray-300 w-full mt-10 py-10 sm:px-16">
            <figure class="px-2 mb-1 sm:mb-0 w-full sm:w-1/5 flex justify-center">
              <g-link :to="`${$page.post.author.path}/`">
                <img :src="avatar" :alt="$page.post.author.title" @error="imageLoadError" width="100"
                  class="rounded-full p-4 sm:p-0">
              </g-link>
            </figure>

            <div class="px-4 sm:w-4/5 text-center sm:text-left">
              <h4 class="font-sans font-bold text-lg sm:text-xl mb-2 sm:mb-4">
                <g-link :to="`${$page.post.author.path}/`"
                  class="text-black hover:text-gray-600 capitalize border-b-2 border-transparent transition-colors duration-300">
                  {{ titleCase($page.post.author.title) }}</g-link>
              </h4>
              <p class="leading-normal">
                <g-link :to="`${$page.post.author.path}/`"
                  class="text-blue-500 hover:text-blue-400 transition-colors duration-300">See all posts by
                  {{ titleCase($page.post.author.title) }} &rarr;</g-link>
              </p>
              <p>
                <a href="https://www.buymeacoffee.com/b34rd" target="_blank"><img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"
                    style="height: 60px !important;width: 217px !important;"></a>
              </p>
              <table>
                <tr>
                  <td id='btc'><button class='cryptodonate-btn' @click="btcShow = !btcShow"><img
                        src='../assets/images/icons/icon_bitcoin.png' /></button></td>
                  <td id='eth'><button class='cryptodonate-btn' @click='ethShow = !ethShow'><img
                        src='../assets/images/icons/icon_ethereum.png' /></button></td>
                  <td id='ltc'><button class='cryptodonate-btn' @click='ltcShow = !ltcShow'><img
                        src='../assets/images/icons/icon_litecoin.png' /></button></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="sm:w-4/5">
            <Disqus shortname="b34rd-tech" :identifier="$page.post.slug" />
          </div>

          <div id="cryptodonate-dialog" class="lite" style="display: block;" v-if="btcShow">
            <div id="cryptodonate-action">Donate Bitcoin</div>
            <p id="cryptodonate-helper">Please use this bitcoin address to donate.<br>Thanks for your contribution !
            </p>
            <div id="cryptodonate-addressHolder"><img id="cryptodonate-coin"
                src="../assets/images/icons/icon_bitcoin.png" title="bitcoin"><input
                type="text" id="cryptodonate-address" readonly="readonly" placeholder=" 35rXbpXuSXgjJCTDxPiCFr4GCgmDNa1Dof"><a
                id="cryptodonate-wallet" target="_blank" href="bitcoin:35rXbpXuSXgjJCTDxPiCFr4GCgmDNa1Dof"
                title="Click here to send this address to your wallet."><img
                  src="https://lab.subinsb.com/projects/francium/cryptodonate/img/wallet.png"></a></div>
            <div id="cryptodonate-qrHolder"><center><img id="cryptodonate-qr"
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&amp;data=35rXbpXuSXgjJCTDxPiCFr4GCgmDNa1Dof"></center>
            </div><a id="cryptodonate-close" @click='btcShow = !btcShow'>x</a>
          </div>

          <div id="cryptodonate-dialog" class="lite" style="display: block;" v-if="ethShow">
            <div id="cryptodonate-action">Donate Ether</div>
            <p id="cryptodonate-helper">Please use this ethereum address to donate.<br>Thanks for your contribution !
            </p>
            <div id="cryptodonate-addressHolder"><img id="cryptodonate-coin"
                src="../assets/images/icons/icon_ethereum.png" title="ethereum"><input
                type="text" id="cryptodonate-address" readonly="readonly" placeholder="0x71A1c3710406E75B8c51F2aD281370f89728E617"><a
                id="cryptodonate-wallet" target="_blank" href="ethereum:0x71A1c3710406E75B8c51F2aD281370f89728E617"
                title="Click here to send this address to your wallet."><img
                  src="https://lab.subinsb.com/projects/francium/cryptodonate/img/wallet.png"></a></div>
            <div id="cryptodonate-qrHolder"><center><img id="cryptodonate-qr"
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&amp;data=0x71A1c3710406E75B8c51F2aD281370f89728E617"></center>
            </div><a id="cryptodonate-close" @click='ethShow = !ethShow'>x</a>
          </div>

          <div id="cryptodonate-dialog" class="lite" style="display: block;" v-if="ltcShow">
            <div id="cryptodonate-action">Donate Litecoin</div>
            <p id="cryptodonate-helper">Please use this litecoin address to donate.<br>Thanks for your contribution !
            </p>
            <div id="cryptodonate-addressHolder"><img id="cryptodonate-coin"
                src="../assets/images/icons/icon_litecoin.png" title="litecoin"><input
                type="text" id="cryptodonate-address" readonly="readonly" placeholder=" MD3d5BaoNQFPvjR6kv8Q2jp1jrVesets2r"><a
                id="cryptodonate-wallet" target="_blank" href="litecoin:MD3d5BaoNQFPvjR6kv8Q2jp1jrVesets2r"
                title="Click here to send this address to your wallet."><img
                  src="https://lab.subinsb.com/projects/francium/cryptodonate/img/wallet.png"></a></div>
            <div id="cryptodonate-qrHolder"><center><img id="cryptodonate-qr"
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&amp;data=MD3d5BaoNQFPvjR6kv8Q2jp1jrVesets2r"></center>
            </div><a id="cryptodonate-close" @click='ltcShow = !ltcShow'>x</a>
          </div>


        </footer>
      </article>

      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>



</script>


<script>
  import moment from 'moment'
  import config from '~/.temp/config.js'
  import Alert from '@/components/Alert'
  import slugify from '@sindresorhus/slugify'
  import SiteFooter from '@/components/Footer'
  import PostHeader from '~/components/PostHeader'
  import {
    Disqus
  } from 'vue-disqus'

  export default {
    components: {
      Alert,
      PostHeader,
      SiteFooter,
      Disqus
    },
    metaInfo() {
      return {
        title: `${this.$page.post.title} ${this.$page.post.tag ? '- '+this.$page.post.tag.name : ''}`,
        meta: [{
            key: 'description',
            name: 'description',
            content: this.description(this.$page.post)
          },

          {
            property: "og:type",
            content: 'article'
          },
          {
            property: "og:title",
            content: this.$page.post.title
          },
          {
            property: "og:description",
            content: this.description(this.$page.post)
          },
          {
            property: "og:url",
            content: this.postUrl
          },
          {
            property: "article:published_time",
            content: moment(this.$page.post.date).format('YYYY-MM-DD')
          },
          {
            property: "og:image",
            content: this.ogImageUrl
          },

          {
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            name: "twitter:title",
            content: this.$page.post.title
          },
          {
            name: "twitter:description",
            content: this.description(this.$page.post)
          },
          {
            name: "twitter:site",
            content: "@cossssmin"
          },
          {
            name: "twitter:creator",
            content: "@cossssmin"
          },
          {
            name: "twitter:image",
            content: this.ogImageUrl
          },
        ],
      }
    },
    mounted() {
      import('medium-zoom').then(mediumZoom => {
        this.zoom = mediumZoom.default('.markdown p > img')
      })
      this.$monetization.enable()
      this.$monetization.onStart(() => this.enableExtraContent)
    },
    methods: {
      imageLoadError(e) {
        e.target.src = `/images/authors/default.png`
      },
      description(post, length, clamp) {
        if (post.description) {
          return post.description
        }

        length = length || 280
        clamp = clamp || ' ...'
        let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

        return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
      },
      titleCase(str) {
        return str.replace('-', ' ')
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
      },
      enableExtraContent() {
        alert("Extra Content!")
      },
    },
    computed: {
      config() {
        return config
      },
      avatar() {
        return `/images/authors/${this.$page.post.author.id}.png`
      },
      postIsOlderThanOneYear() {
        let postDate = moment(this.$page.post.datetime)
        return moment().diff(postDate, 'years') > 0 ? true : false
      },
      postUrl() {
        let siteUrl = this.config.siteUrl
        let postPath = this.$page.post.path

        return postPath ? `${siteUrl}${postPath}` : `${siteUrl}/${slugify(this.$page.post.title)}/`
      },
      ogImageUrl() {
        return this.$page.post.cover || `${this.config.siteUrl}/images/bleda-card.png`
      }
    },
    data: function(){
      return {
        btcShow: false,
        ltcShow: false,
        ethShow: false,
      }
    }
  }

</script>

<page-query>
  query Post ($path: String) {
  post (path: $path) {
  title
  path
  slug
  datetime: date (format: "YYYY-MM-DD HH:mm:ss")
  content
  description
  timeToRead
  cover
  author {
  id
  title
  path
  }
  tags {
  id
  title
  path
  }
  }
  }
</page-query>



!function(c){var
t=document.createElement("script");t.type="text/javascript",t.async=!0,t.onload=c,t.src="//lab.subinsb.com/projects/francium/cryptodonate/widget.js";var
e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(function(){
Fr.loadCD("btc", {
coin: "bitcoin",
address: "35rXbpXuSXgjJCTDxPiCFr4GCgmDNa1Dof",
buttonClass: "lite",
dialogClass: "lite",
});
Fr.loadCD("eth", {
coin: "ethereum",
address: "0x71A1c3710406E75B8c51F2aD281370f89728E617",
buttonClass: "lite",
dialogClass: "lite",
});
Fr.loadCD("ltc", {
coin: "litecoin",
address: "MD3d5BaoNQFPvjR6kv8Q2jp1jrVesets2r",
buttonClass: 'lite',
dialogClass: 'lite',
});
});
