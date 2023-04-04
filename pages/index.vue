<template>

    <!-- ==================================== БАННЕР ЗАГОЛОВОК ==================================== -->
    <header style="min-height: 100vh; background-color: var(--light); display: flex; justify-content: center;">
        <h1>Юнидрам</h1>
        <h2>Гармоничный круг с ярким голосом</h2>
        <p>Глеба Рудакова</p>

        <!-- Кнопки -->
        <NuxtLink 
            :to="{
                path: '/',
                hash: '#about-the-tool' 
        }">Об инструменте</NuxtLink>
        <NuxtLink :to="{
                path: '/',
                hash: '#products'
        }">Купить</NuxtLink>
    </header>


    <main>
        <!-- ОБ ИНСТРУМЕНТЕ -->
        <About id="about-the-tool"/>

        <!-- ТОВАРЫ -->
        <Products id="products"/>
    </main>

    <!-- ПОДВАЛ -->
    <Footer/>

    <!-- Кнопка меню личного кабинета -->
    <NuxtLink to="/lk" style="position: fixed; top: 1rem; right: 2rem; width: 48px; height: 48px; background-color: gray; border-radius: 100%; z-index: 666666"></NuxtLink>

    <!-- Кнопка ВВЕРХ -->
    <div id="toTop" @click.prevent="scrollTo(0,100)">
        <svg width="10pt" height="10pt" viewBox="0 0 630 630" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
                <g>
                    <path d="M489.229,442.468L254.563,37.135c-3.797-6.592-14.677-6.592-18.453,0L1.443,442.468c-1.92,3.307-1.92,7.36-0.021,10.667
			        c1.92,3.307,5.44,5.333,9.259,5.333h469.333c3.819,0,7.339-2.027,9.259-5.333C491.128,449.849,491.128,445.775,489.229,442.468z"/>
                </g>
            </g>
        </svg>
    </div>

</template>

<script setup>
    import About from '@/components/About.vue'
    import Products from '@/components/Products.vue'
    import Footer from '@/components/Footer.vue'

    useServerSeoMeta({
        title: 'Unidrum by Gleb Rudakov',
        ogTitle: 'Unidrum by Gleb Rudakov',
        description: 'Музыкальный инструмент unidrum',
        ogDescription: 'Музыкальный инструмент unidrum, Создаю музыкальные инструменты',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
    useHead({
        htmlAttrs: {
            lang: 'en',
            charset: 'utf-8',
            // style: 'font-size: 13px'
        }
    })

    const router = useRouter()
    
    onMounted(() => {
        const btn = document.querySelector('#toTop');
        window.addEventListener('scroll', () => {
            // Если прокрутили дальше 599px, показываем кнопку
            if(pageYOffset > 100) {
                btn.classList.add('show')
            }
            // Иначе прячем
            else {
                btn.classList.remove('show');
            }
        })
        // При клике прокручиываем на самый верх, событие повесили на саму кнопку
    })

    const scrollTo = (to, duration = 700) => {
        const 
            element = document.scrollingElement || document.documentElement,
            start = element.scrollTop,
            change = to - start,
            startDate = +new Date(),
            // t = current time
            // b = start value
            // c = change in value
            // d = duration
            easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            },
            animateScroll = () => {
                const currentDate = +new Date();
                const currentTime = currentDate - startDate;
                element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                if(currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
                else {
                    element.scrollTop = to;
                }
            }
            animateScroll();
            router.push('/')
    }

</script>

<style scoped>
    /* КНОПКА НАВЕРХ */
    #toTop {
        position: fixed;
        display: inline-block;
        bottom: 30px;
        left: -40px;
        width: 40px;
        height: 40px;
        z-index: 1000;
        cursor: pointer;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        background: var(--dark);
        box-shadow: 0 0 0 3px rgba(0,0,0,.2);
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease-in-out;
        z-index: 999999;
    }
    #toTop:hover {
            background: var(--more-dark);
    }
    #toTop svg {
        position: relative;
        top: 12px;
        left: 1px;
        fill: #fff;
        transition: all .3s ease-in-out;
    }
    #toTop:hover svg {
        cursor: pointer;
        fill: #fff;
        transition: all .3s ease-in-out;
    }
    #toTop.show {
        opacity: 1;
        visibility: visible;
        left: calc(2%);
    }
</style>