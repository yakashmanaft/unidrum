<template>

<<<<<<< HEAD
    <!-- ==================================== БАННЕР ЗАГОЛОВОК ==================================== -->
    <header style="min-height: 100vh; background-color: var(--light); display: flex; justify-content: center; align-items: center; position: relative;" >

        <!-- Кнопка меню личного кабинета -->
        <LkButton/>
        
        <div style="z-index: 999998; margin-right: 10rem;" class="element1">
            
            <!-- Заголовок -->
            <div style="display: flex; flex-direction: column; position: relative;" >
                <h1 style="font-family: 'TildaSansWebBlack'">Юнидрам</h1>
                <p style="position: absolute; top: 10rem; right: 0;">Глеба Рудакова ©</p>
                <h2 style="margin-left: 0.5rem; margin-top: 0.8rem; color: gray; font-size: 1.5rem;">Гармоничный круг с ярким голосом</h2>
            </div>
            
            <div style="margin: 7rem 0 0 0.6rem;"  >
                <NuxtLink :to="{ path: '/', hash: '#products' }" style="margin-right: 2rem; color: var(--dark);background-color: rgba(255, 255, 255, 0.5); padding: 1rem 2.5rem; border-radius: 1.5rem;">Купить</NuxtLink>
                <NuxtLink :to="{ path: '/', hash: '#about-the-tool' }" style="margin-right: 2rem; color: var(--dark)">Об инструменте</NuxtLink>
            </div>
            
        </div>
=======
  <!-- ==================================== БАННЕР ЗАГОЛОВОК ==================================== -->
  <header style="min-height: 100vh; background-color: var(--light); display: flex; justify-content: center; align-items: center; position: relative;">

      <!-- Кнопка меню личного кабинета -->
      <LkButton/>
      
      <div style="z-index: 999998; margin-right: 10rem;">
          
          <!-- Заголовок -->
          <div style="display: flex; flex-direction: column; position: relative;">
              <h1 style="font-family: 'TildaSansWebBlack'">Юнидрам</h1>
              <p style="position: absolute; top: 10rem; right: 0;">Глеба Рудакова ©</p>
              <h2 style="margin-left: 0.5rem; margin-top: 0.8rem; color: gray; font-size: 2rem;">Гармоничный круг с ярким голосом</h2>
          </div>
          
          <div style="margin: 7rem 0 0 0.6rem;">
              <NuxtLink :to="{ path: '/', hash: '#products' }" style="margin-right: 2rem; color: var(--dark);background-color: rgba(255, 255, 255, 0.5); padding: 1rem 2.5rem; border-radius: 1.5rem;">Купить</NuxtLink>
              <NuxtLink :to="{ path: '/', hash: '#about-the-tool' }" style="margin-right: 2rem; color: var(--dark)">Об инструменте</NuxtLink>
          </div>
          
      </div>
>>>>>>> 3dd5a0a71321da42e47a55ea114a936f3ad01490


      <!-- Картинка -->
      <div style="position: absolute; right: 0; top: 0; height: 100vh; z-index: 999997">
          <img src="/img/headerImg.jpg" alt="unidrum ханг идиофон" style="height: 100%;">
      </div>
  </header>


  <main>
      <!-- ОБ ИНСТРУМЕНТЕ -->
      <AboutSection id="about-the-tool"/>

      <!-- ТОВАРЫ -->
      <ProductsSection id="products"/>
  </main>

  <!-- ПОДВАЛ -->
  <Footer/>

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
  import AboutSection from '~/components/AboutSection.vue'
  import ProductsSection from '~/components/ProductsSection.vue'
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
          // charset: 'utf-8',
          // style: 'font-size: 13px'
      },
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          // { rel: 'sitemap', type: 'application/xml', href: 'https://localhost/sitemap.xml' }
      ],
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
<<<<<<< HEAD
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

    .element1 {
    position: relative;
    overflow: hidden;
    }

    .element1::before {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    bottom: 0;
    left: -10px;
    z-index: -1;
    box-shadow: 0 0 20px rgba(253, 0, 0, 0.5);
    animation: shadow-move 2s infinite linear;
    }

    @keyframes shadow-move {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
    }
=======
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
>>>>>>> 3dd5a0a71321da42e47a55ea114a936f3ad01490
</style>