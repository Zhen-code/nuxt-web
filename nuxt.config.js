export default {
    mode: 'universal',
    loading: { color: '#f47e36' },
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'http://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;800&display=swap'
            }
        ]
    },
    plugins: [
        {
            src: '~plugins/ElementUI',
            ssr: true
        },
        '~plugins/echarts'
    ],
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        baseURL: 'http://localhost:3000/',
        progress: true
    },
    router: {
        mode: 'hash',
        base: './',
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link'
    }
}