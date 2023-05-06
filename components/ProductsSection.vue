<template>
    <div class="wrapper">
        <NuxtLink :to="{ path: `/products/${product.route}`}" v-for="(product, index) in products" :key="index" class="cart">
            
            
            <!-- Изображение товара -->
            <div class="cart_img">
                <img src="/img/UNIDRUM-1.3-Minor.jpg" alt="Ханг идиофон UNIDRUM-1.3-Minor">
            </div>

            <!--  -->
            <div style="padding: 1rem;">

                <!-- Заголовок -->
                <h3 style="font-weight: bold">{{ product.model }}</h3>
    
                <!-- Текст -->
                <div style="margin-top: 1rem;">
                    <p>Кол-во нот: {{ product.numberОfNotes }}</p>
                    <p>Ноты: {{ product.notes }}</p>
                </div>
                
                <!-- <NuxtLink :to="{ name: '_product', params: product }">Подробнее</NuxtLink> -->
    
                <br>
                <br>

                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <!-- <NuxtLink :to="{ path: `/products/${product.route}`}">Подробнее</NuxtLink> -->
                    <div>
                        <p style="text-decoration:line-through; color: gray;">45 000 <span v-if="currency === 'rub'">₽</span></p>
                        <p style="font-weight: bold">37 500 <span v-if="currency === 'rub'">₽</span></p>
                    </div>
                </div>
    
                <!-- <div @click="$router.push(`/products/${product.route}`)">Подробнее</div> -->
            </div>

        </NuxtLink>

            
        <!-- <div>Введите промокод</div> -->
    </div>
</template>

<script setup>
    import { useProductsStore } from '../stores/products'

    const productsStore = useProductsStore()

    const products = computed(() => {
        return productsStore.products
    })

    const currency = computed(() => {
        return productsStore.currency
    })
    
</script>

<style scoped>
    .wrapper {
        min-height: 100vh; 
        background-color: var(--light); 
        display: flex; 
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 5rem;
        padding: 3rem 5rem;
    }
    .cart {
        background-color: white;
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        border-radius: 2rem;
        max-width: 350px;
        padding-bottom: 1rem;
    }

    .cart:hover {
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.4);
    }

    .cart_img {
        width: 100%; 
        height: 300px;
        display: flex; 
        justify-content: center; 
        align-items: center;
        background-color: var(--light);
        padding: 1rem 0;
        border-radius: 2rem 2rem 0 0;
    }
    
    .cart_img img {
        height: 100%; 
        object-fit: cover;
        border-radius: 2rem 2rem 0 0;
    } 

    a:visited {
        color: inherit;
    }
</style>