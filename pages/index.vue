<template>
  <!-- ==================================== БАННЕР ЗАГОЛОВОК ==================================== -->
  <header
    style="
      min-height: 100vh;
      background-color: var(--light);
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <!-- Блок навигации -->
    <Navigation />

    <div style="z-index: 999998; margin-right: 10rem;">
      <!-- Заголовок -->
      <div style="display: flex; flex-direction: column; position: relative;">
        <h1 style="font-family: 'TildaSansWebBlack';">Юнидрам</h1>
        <p style="position: absolute; top: 10rem; right: 0;">
          Глеба Рудакова ©
        </p>
        <h2
          style="
            margin-left: 0.5rem;
            margin-top: 0.8rem;
            color: gray;
            font-size: 2rem;
          "
        >
          Гармоничный круг с ярким голосом
        </h2>
      </div>

      <div style="margin: 7rem 0 0 0.6rem;">
        <NuxtLink :to="{ path: '/', hash: '#products' }" class="btn btn_buy"
          >Купить</NuxtLink
        >
        <!-- <NuxtLink 
                :to="{ path: '/', hash: '#about-the-tool' }" 
                class="btn btn_other"
                >История</NuxtLink>
                <NuxtLink 
                :to="{ path: '/', hash: '#about-the-tool' }" 
                class="btn btn_other"
                >Как хочешь</NuxtLink> -->

        <NuxtLink
          :to="{ path: '/', hash: '#about-the-tool' }"
          class="btn_other_2"
          >История</NuxtLink
        >
        <NuxtLink />

        <!-- :to="{ path: '/', hash: '#about-the-tool' }"  -->
        <NuxtLink :to="{ path: '/create' }" class="btn_other_2"
          >Как хочешь</NuxtLink
        >
        <NuxtLink />
      </div>
    </div>

    <!-- Картинка -->
    <div class="header-img_wrapper">
      <img
        src="/img/headerImg.png"
        alt="unidrum ханг идиофон"
        style="height: 100%;"
        class="header-img"
      />
    </div>
  </header>

  <main>
    <!-- ТОВАРЫ -->
    <ProductsSection id="products" />
    <!-- ОБ ИНСТРУМЕНТЕ -->
    <AboutSection id="about-the-tool" />
  </main>

  <!-- ПОДВАЛ -->
  <Footer />

  <!-- Кнопка ВВЕРХ -->
  <div id="toTop" @click.prevent="scrollTo(0, 100)">
    <svg
      width="10pt"
      height="10pt"
      viewBox="0 0 630 630"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path
            d="M489.229,442.468L254.563,37.135c-3.797-6.592-14.677-6.592-18.453,0L1.443,442.468c-1.92,3.307-1.92,7.36-0.021,10.667
            c1.92,3.307,5.44,5.333,9.259,5.333h469.333c3.819,0,7.339-2.027,9.259-5.333C491.128,449.849,491.128,445.775,489.229,442.468z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import AboutSection from "~/components/AboutSection.vue";
import ProductsSection from "~/components/ProductsSection.vue";
import Footer from "@/components/Footer.vue";
useServerSeoMeta({
  title: "Unidrum by Gleb Rudakov",
  ogTitle: "Unidrum by Gleb Rudakov",
  description: "Музыкальный инструмент unidrum",
  ogDescription:
    "Музыкальный инструмент unidrum, Создаю музыкальные инструменты",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
useHead({
  htmlAttrs: {
    lang: "en",
    // charset: 'utf-8',
    // style: 'font-size: 13px'
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    // { rel: 'sitemap', type: 'application/xml', href: 'https://localhost/sitemap.xml' }
  ],
});
const router = useRouter();

onMounted(() => {
  const btn = document.querySelector("#toTop");
  window.addEventListener("scroll", () => {
    // Если прокрутили дальше 599px, показываем кнопку
    if (pageYOffset > 100) {
      btn.classList.add("show");
    }
    // Иначе прячем
    else {
      btn.classList.remove("show");
    }
  });
  // При клике прокручиываем на самый верх, событие повесили на саму кнопку
});
const scrollTo = (to, duration = 700) => {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = () => {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
  router.push("/");
};
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
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
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
  transition: all 0.3s ease-in-out;
}
#toTop:hover svg {
  cursor: pointer;
  fill: #fff;
  transition: all 0.3s ease-in-out;
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

.btn {
  color: var(--dark);
  padding: 1rem 2.5rem;
  border-radius: 1.5rem;
  transition: 0.5s background-color, 0.5s color;
  margin-right: 2rem;
}

.btn:last-child {
  margin-right: 0;
}

.btn:hover {
  background-color: var(--dark);
  color: white;
  transition: 0.5s background-color, 0.5s color;
}

.btn_buy {
  background-color: rgba(255, 255, 255, 0.5);
}

.btn_buy:hover {
  background-color: var(--dark);
  color: white;
}

.btn_other_2 {
  color: var(--dark);
  margin-right: 2rem;
}

.btn_other_2:hover {
  text-decoration: underline;
}

.header-img_wrapper {
  position: absolute;
  right: -60vh;
  top: 0;
  height: 100vh;
  z-index: 999997;
  box-shadow: -5px 0 4rem 0.5rem rgba(34, 60, 80, 0.6);
  border-radius: 100%;
  width: 100vh;
}
.header-img {
  height: 100%;
  transform: rotate(-7deg);
}

/* .header-img {
    -webkit-animation:spin 20s linear infinite;
    -moz-animation:spin 20s linear infinite;
    animation:spin 20s linear infinite;
}

@-moz-keyframes spin {
    100% { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform:rotate(360deg);
    }
} */
</style>
