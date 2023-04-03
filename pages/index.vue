<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <!-- <Tutorial/> -->

    <!-- ================= БАННЕР ЗАГОЛОВОК ====================== -->
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0" style="background-color: #eaeaf6">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8" style="z-index: 999998">
        <div class="flex-row relative">
          <h2 class="absolute -top-0 left-0 ml-3" style="font-size: 1.3rem; color: #555e7f;">Гармоничный круг с ярким голосом</h2>
          <h1 style="font-weight: bold; font-size: 10rem; color: #555e7f">Юнидрам</h1>
          <p class="absolute -bottom-0 -right-0 mr-2" style="font-size: 1.3rem; color: #555e7f;">Глеба Рудакова</p>
        </div>


        <!-- Навигация -->
        <div class="flex mt-16 justify-end" style="font-size: 16px;">
          <NuxtLink :to="{path: '/', hash: 'about-the-tool'}" class="bg-blue-400 px-4 py-2 rounded-3xl" style="background-color: #fff; color: #555e7f; display: block; line-height: 20px;">Об инструменте</NuxtLink>
          <NuxtLink :to="{path: '/', hash: 'products'}" class="bg-blue-400 px-4 py-2 rounded-3xl ml-4" style="background-color: #fff; color: #555e7f; display: block; line-height: 20px;">Купить</NuxtLink>
        </div>

      </div>

      <!-- Картинка -->
      <div class="absolute -top-0 -right-0" style="height: 100vh; z-index: 999997">
        <img src="/headerImg.jpg" alt="unidrum ханг идиофон" style="height: 100%;">
      </div>
    </div>

    <!-- Кнопка меню личного кабинета -->
    <NuxtLink to="/lk" style="position: fixed; top: 1rem; right: 1rem; width: 32px; height: 32px; background-color: gray; z-index: 999999"></NuxtLink>

    <!-- ================ ОБ ИНСТРУМЕНТЕ ========================== -->
    <div class="min-h-screen flex justify-center bg-gray-100" id="about-the-tool">
      <h3>Об инструменте</h3>
    </div>

    <!-- ====================== КУПИТЬ =================== -->
    <div id="products" class="min-h-screen text-center" style="background-color: #eaeaf6">
      <h3>Товары</h3>

      <div class="products-section-flex">
        <div v-for="(product, index) in $store.state.products" :key="index" style="max-width: 400px; height: 400px; background-color: blue;">

          <div>{{ product }}</div>

          <div >Описание, Фото</div>

        </div>

      </div>
    </div>

    <!-- ==================== ПОДВАЛ ======================== -->
    <div class="flex justify-center bg-gray-100 py-4">
      <NuxtLink to="/" class="mr-4">Контакты</NuxtLink>
      <NuxtLink to="/" class="mr-4">Политика конфиденциальности</NuxtLink>
      <NuxtLink to="/" class="mr-4">Пользовательское соглашение</NuxtLink>
      <NuxtLink to="/">Карта сайта</NuxtLink>
    </div>

    <!-- Кнопка ВВЕРХ -->
    <div id="toTop"></div>

    <a href="#" id="toTop">
    <svg width="10pt" height="10pt" viewBox="0 0 630 630" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
            <g>
                <path d="M489.229,442.468L254.563,37.135c-3.797-6.592-14.677-6.592-18.453,0L1.443,442.468c-1.92,3.307-1.92,7.36-0.021,10.667
			c1.92,3.307,5.44,5.333,9.259,5.333h469.333c3.819,0,7.339-2.027,9.259-5.333C491.128,449.849,491.128,445.775,489.229,442.468z"/>
            </g>
        </g>
    </svg>
</a>

  </div>
</template>

<script>
import { onMounted } from 'vue'
import { mapMutations } from 'vuex'

export default {
  name: 'IndexPage',
  head: {
    title: 'Unidrum by Gleb Rudakov - Главная',
  },
  setup (props, { emit }) {
    onMounted(() => {
          let btn = document.querySelector('#toTop');
          window.addEventListener('scroll', function () {
              // Если прокрутили дальше 599px, показываем кнопку
              if (pageYOffset > 100) {
                  btn.classList.add('show');
                  // Иначе прячем
              } else {
                  btn.classList.remove('show');
              }
          });

          // При клике прокручиываем на самый верх
          btn.onclick = function (click) {
              click.preventDefault();
              scrollTo(0, 400);
          }
      // });
    })

    const scrollTo = (to, duration = 700) => {
      let
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
      animateScroll = function () {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
        else {
            element.scrollTop = to;
        }
      };
      animateScroll();
    }

    return {
      scrollTo
    }
  }
}
</script>

<style scoped>
    .wrapper {
      margin: 0 auto;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  /* body {
    background-color: black;
  }
  @media screen and (max-width: 480px ) {
    .wrapper {
      background-color: white;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .wrapper {
      background-color: blue;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .wrapper {
      background-color: green;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    .wrapper {
      background-color: red;
    }
  }
  @media screen and (min-width: 1201px) {
    .wrapper {
      background-color: gray;
    }
  } */

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
	background: green;
	box-shadow: 0 0 0 3px rgba(0,0,0,.2);
	opacity: 0;
	visibility: hidden;
  transition: all .3s ease-in-out;
  z-index: 999999;
}
#toTop:hover {
		background: darkgreen;
}

#toTop svg {
	position: relative;
	top: 12px;
	left: -1px;
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

/*  */
.products-section-flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 2rem;
  margin: 0 2rem;
}

@media screen and (min-width: 768px) and (max-width: 1344px) {
  .products-section-flex::after{
    content: "";
    /* flex: auto; */
    width: 400px;
  }
}
</style>
