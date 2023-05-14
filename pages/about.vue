<template>
    <header>
        <!-- ABOUT PAGE -->
        <!--  -->
        <!-- <NuxtLink :to="{ path: '/', hash: '#about-the-tool' }">Назад</NuxtLink> -->

        <!--  -->

        <Navigation/>
    </header>

    <main style="padding-top: 8rem;">

        <div class="wrapper">
            
            <!--  -->
            <h2>От идеи до продукта</h2>
            <p style="margin-top: 2rem; ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima perferendis impedit blanditiis, aliquid consequatur accusamus, corrupti aliquam nihil dicta aut autem voluptatem magni vel quod sit saepe non? Sunt neque quae architecto veniam fugiat animi deserunt ex unde nobis saepe? Iusto fuga labore nesciunt deleniti. Illum voluptate ullam porro praesentium magnam asperiores, officiis dignissimos in corporis dolorem nobis iusto nesciunt dolores fugit quae exercitationem quibusdam eius earum. Possimus vero nulla delectus dicta ea tempore eos fugiat dolores quis non, soluta laboriosam est, praesentium ipsum hic atque quasi nesciunt corporis eveniet cumque quae autem quisquam velit! Tempore magnam hic recusandae culpa!</p>
    
            <!-- ABOUT NAVIGATION -->
            <ul class="about-navigation">
                <li>
                    <NuxtLink to="#history">История</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">Исследование</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">Ручная работа</NuxtLink>
                </li>
            </ul>
    
            <!-- #HISTORY -->
            <div id="history" style="padding-top: 3rem; display: flex; justify-content: space-between; align-items: center; gap: 2rem;">
    
                <!--  -->
                <div style="flex: 1; height: 360px; overflow: hidden; border-radius: 1rem; background-color: red;">
                    <img src="/img/founder.jpg" alt="Ханг идиофон UNIDRUM-1.3-Minor" style="height: 100%; width: 100%; object-fit: cover;"/>
                </div>
    
                <!--  -->
                <div style="flex: 1; ">
                    <h3 style="font-weight: bold;">В начале была мысль...</h3>
                    <p style="margin-top: 1rem;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo non aperiam, animi ducimus tempore assumenda quo quasi facere sequi suscipit, optio iusto adipisci natus quibusdam dolorum incidunt. Ipsum modi praesentium deleniti expedita autem consectetur omnis debitis non, atque voluptates, nemo delectus doloribus, error quia eius saepe? Eos, eligendi earum ipsa obcaecati sapiente aliquid sit temporibus illum odit, dicta id similique repellat tenetur. Fuga rem minus tempora commodi ipsum corrupti, nihil dolores facere nesciunt a at delectus quod nam quaerat, voluptatibus dolorem enim incidunt! Autem id reprehenderit, fugit mollitia blanditiis ducimus recusandae, impedit necessitatibus placeat earum pariatur libero repudiandae quae!</p>
                </div>
    
            </div>
        </div>



        <br style="margin-top: 5rem">


        <!-- Квинтовый круг мажорных тональностей: чёткая схема для тех, кому приятна чёткость. Источник: https://music-education.ru/kvintovy-krug-mazhornyh-tonalnostej/ -->
        

        <!-- controls -->
        <video :src="'/video/video_2023-05-04_19-20-39.mp4'" type="video/mov" width="360" height="640" preload autoplay muted loop></video>

    <!-- Блок с Фоновой картинкой -->
    <div
      style="background-image: url('/img/founder.jpg'); height: 100vh; width: 100%; background-size: cover; background-color: rgba(0,0,0,.5); background-blend-mode: multiply; margin: 0 auto;"
    >

      <!-- ТЕКСТ -->
      <div style="color: white; max-width: 1200px; margin: 0 auto; padding-top: 3rem;">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus delectus culpa aliquid excepturi quod magni mollitia voluptatibus sit, quaerat, reprehenderit ipsa quidem eius hic modi? Soluta laudantium, fugit, qui odit, fugiat eum autem accusantium sunt quaerat fuga nesciunt? Excepturi assumenda molestiae fuga qui provident rerum similique cumque, asperiores minima repudiandae fugiat possimus minus reprehenderit necessitatibus reiciendis omnis et quos perferendis iusto. Aliquam ipsam qui fuga repudiandae, ab a dolorem quasi. Blanditiis tempore in molestias laudantium autem, architecto natus at! Voluptatum quia doloribus velit totam harum saepe delectus aliquam, mollitia quod ratione laboriosam consequatur soluta minus, quos veritatis, vero commodi omnis!
      </div>

      <!-- БЛОКИ -->
      <div style="display: flex; width: 100%;  height: 100%; align-items:center; gap: 1rem; max-width: 1200px; margin: 0 auto;">

        <div style="height: 50vh; padding: 1rem; background-color: white; border-radius: 1rem; flex: 1;">
          ЭТО Я
        </div>
  
        <div style="height: 50vh; padding: 1rem; background-color: white; border-radius: 1rem; flex: 1;">
          Это я
        </div>
      </div>
    </div>

    </main>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style scoped>
    .wrapper {
        margin: 0 auto;
        max-width: 1200px;
    }

    .about-navigation {
        margin-top: 2rem;
        padding-left: 1rem;
    }

    .about-navigation li {
        margin-top: 1rem;
        list-style: disc;
    }

    a {
        color: var(--dark)
    }

    a:hover {
        text-decoration: underline;
    }

    a:visited {
        color: var(--dark)
    }
</style>