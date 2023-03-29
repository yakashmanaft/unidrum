<template>
    <div class="hide-scroll">
        <!--  -->
        <Header :route="currentBankName"/>

        <!--  -->
        <div class="content" :class="{ fixed: isLedgerListOpened }">
            
            <div style="text-align: left;">

                <div>
                    Общий баланс банка:
                    {{ bankBalance }}
                    <br>
                    <br>
                </div>

                <div v-for="(holder, i) in holders" :key="i">
                    Имя держателя: {{ holder.name }} <br>
                    Email держателя: {{ holder.email }} <br>
                    Доля держателя (%): {{ holder.proportion }}% <br>
                    Доля держателя (rub): {{ (bankBalance / 100 * holder.proportion).toFixed(2) }} <br>
                    Роль: {{ holder.role }} <br> <br>
                </div>

                <div @click="isLedgerListOpened = true">
                    Открыть ledger
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, dolorum amet perspiciatis, reprehenderit architecto aliquid tempora explicabo eveniet tempore ullam fuga itaque! Cumque excepturi a eaque culpa! Alias pariatur accusamus quibusdam, corrupti modi reprehenderit libero incidunt aliquam ipsum dolore ducimus eos omnis facilis, laboriosam aperiam sunt odio facere ut assumenda veritatis. A iusto in obcaecati nulla nobis quaerat porro laboriosam error perspiciatis illo commodi veritatis consequatur at doloribus quos, et necessitatibus ab quasi possimus facilis voluptatum? Laboriosam neque impedit, repudiandae aut, laborum accusantium ipsa atque eos veritatis nisi deleniti cum iure quia, dolore molestiae? Omnis, eligendi voluptatibus? Ut modi facilis nostrum deserunt, maxime aliquam pariatur quis hic, iste, nobis at. At, autem laboriosam placeat quos similique consectetur deserunt illum distinctio cum odio labore vero saepe ad necessitatibus iusto quo dignissimos ea quae nihil culpa aliquid dolor atque? Eius nam labore quia maxime odio nobis eveniet, architecto omnis exercitationem harum voluptate recusandae? Cupiditate ipsa dolorum doloremque? Provident, laborum expedita? Veniam dolorem tempore ipsam tenetur expedita ullam corrupti dolor exercitationem culpa neque voluptatum delectus cupiditate aperiam, mollitia blanditiis. Praesentium tempora unde esse modi, excepturi est magnam alias a soluta sequi maxime vero debitis dolores iste dolor quas. Reiciendis sed, quis ex quas adipisci dolorum pariatur fugiat. Quia libero cum perferendis, harum officia quam tempore sequi ipsa pariatur repudiandae! Repellendus saepe quia incidunt, amet distinctio fugit, vero esse, quasi asperiores dolorem error aliquid odio. Reiciendis, hic a laborum exercitationem facere aut? Excepturi possimus ex praesentium architecto numquam molestias error ut adipisci, eum, rem velit maxime, ratione dolore! Harum odit, fugit explicabo ut sit aperiam, aspernatur tempore nostrum eos quos placeat tempora suscipit eum. Incidunt architecto corrupti hic similique iure unde! Esse cumque consequuntur iure officia, dolorum laudantium eveniet odio optio distinctio dicta magnam cupiditate quaerat pariatur, facilis minus voluptates, veritatis debitis. Vel, laboriosam distinctio asperiores quisquam officiis eum excepturi rem amet fuga, veritatis blanditiis officia, est tenetur voluptate? Atque molestias quisquam eum alias, iusto repudiandae facilis excepturi a assumenda et tenetur esse minus, dolores optio cum. Aut consectetur amet mollitia totam quae, quas perspiciatis provident reiciendis minus neque dolore corporis, odit omnis corrupti enim ducimus voluptatum ratione perferendis. Doloribus itaque sunt incidunt pariatur dolore maxime nisi, dolorum beatae possimus similique. Officia deleniti, tenetur laudantium similique distinctio magni, deserunt vitae inventore, saepe quas eos dolorem harum sapiente repellat quibusdam! Quo animi quidem exercitationem sed. Facilis sapiente, dolorem similique temporibus sint atque? Consequatur fugiat animi harum ea consequuntur placeat, officiis quisquam nobis omnis corrupti unde, accusamus quis, iste nisi. Ut aut vero inventore dignissimos libero dolor assumenda alias rerum! Impedit harum accusamus hic id nulla natus in ipsam quia dolore, quod dolores et numquam saepe expedita eligendi mollitia doloribus, quae provident, non suscipit quas soluta voluptate? Voluptatem corporis odit quam et. Magni explicabo molestiae quisquam voluptas, laborum ratione accusantium blanditiis. Laudantium magni voluptate, eaque provident aliquam dolorem vitae harum possimus delectus hic rerum nostrum sint velit? Fugiat nostrum dolorem accusantium, itaque officia distinctio blanditiis velit quasi autem cum veritatis, numquam eius nemo ut placeat perferendis at? Autem assumenda nemo molestias nam dolore sed hic, blanditiis aliquid iste ea fuga vitae perspiciatis, necessitatibus corrupti nisi recusandae repellat aspernatur sit in repudiandae minus perferendis. Praesentium voluptatem facere minus cum nihil beatae eaque in, perspiciatis nulla cumque repudiandae iusto, amet sit tempora enim illum aliquid placeat earum! Optio nisi veritatis tempore minus, a cumque? Consequatur accusamus dolore fugiat quisquam esse porro sed assumenda provident possimus excepturi sit architecto ut libero quod, doloribus itaque, aliquid eius commodi maxime cumque. Vero voluptates aspernatur perferendis obcaecati consequatur nulla? Quae itaque in earum deleniti ad exercitationem nam labore maxime. Necessitatibus totam reprehenderit repellendus. Error optio non id a debitis ducimus. Voluptas corrupti doloribus deleniti libero vitae cum aut, autem architecto similique omnis iure pariatur, voluptatem odio quaerat soluta cupiditate repellendus voluptatibus quidem praesentium mollitia, asperiores dolor. Praesentium nihil vero, quisquam ducimus, quo quos repudiandae suscipit quibusdam eligendi itaque, mollitia sint. Similique distinctio, temporibus blanditiis illum, nulla et dignissimos a unde culpa omnis necessitatibus nesciunt aperiam tenetur ducimus quae veniam fugit eum doloremque nostrum fugiat voluptatum ipsam possimus. Rerum, saepe. Quae assumenda saepe magnam, aspernatur, ipsa odit dolorum quo vero sed ut qui repellat cum iusto fugit asperiores? Dignissimos unde aliquam voluptatibus, maxime quibusdam consectetur nihil minima sapiente quod nam possimus ratione dolor. Dolor explicabo eligendi voluptate ratione adipisci quam porro animi iste? Libero reprehenderit repudiandae alias ipsum? Iusto officia perspiciatis nostrum reprehenderit porro aperiam omnis quam eius accusantium pariatur, consequuntur qui odio nulla tenetur, cumque dignissimos modi, libero dolor asperiores maxime officiis quasi nemo assumenda? Autem eaque dolor accusantium, nobis, rerum repellendus pariatur nulla dolorum, ducimus totam doloribus quam culpa expedita nostrum. Cupiditate natus quo consectetur eveniet odio facere? Eveniet possimus totam libero sed facilis velit suscipit sunt quia perspiciatis ut. Perferendis ipsa laborum molestiae, obcaecati odit iusto quis deserunt unde repellat aspernatur vel nam laudantium assumenda explicabo, libero, expedita id? Blanditiis incidunt, ad sit dicta tempore obcaecati explicabo accusamus, eaque cumque quam aspernatur. Illum praesentium architecto quod quam numquam magnam quaerat hic esse consequatur sit sunt a aliquam mollitia vitae, repellendus doloremque voluptatum, saepe, perferendis consectetur fugit. Voluptas perspiciatis nesciunt est unde a quisquam assumenda ipsum veritatis iure cumque tempore hic aperiam temporibus eveniet illo, adipisci laborum. Aspernatur sequi nesciunt ducimus ut odio, cupiditate excepturi itaque atque vero ratione optio voluptatibus sed modi quidem. Pariatur quasi dolorem eius, iste, explicabo itaque fuga quibusdam accusantium vitae corrupti id ea praesentium voluptate quis fugiat consectetur nihil fugit magnam similique enim blanditiis alias? Veritatis dolorum pariatur repudiandae corporis aspernatur, necessitatibus consectetur reiciendis error similique! Veritatis quis officia veniam eaque accusamus aut eius, ab dolor laudantium exercitationem, sunt voluptatem minima. Deserunt hic ex natus maiores beatae necessitatibus, dolorem delectus, molestias tenetur nesciunt sequi numquam. Aut officiis aliquam similique veniam. Dolorum nesciunt, maiores, suscipit, asperiores dicta doloribus dolor deserunt non dolore earum nostrum autem vitae quis perspiciatis illo amet. Quae sequi libero dolorem corrupti corporis inventore, rerum repudiandae ad ipsa, veniam enim nulla. Ut debitis cum beatae nemo hic dolor provident cupiditate quidem. Magnam, quis ea.
            </div>


        </div>

        <!--  -->
        <Navigation :route="'dashboard'"/>

        <!--  -->
        <LedgerList
            :isOpen="isLedgerListOpened"
            :ledgerArray="ledgerList"
            @closeModal="isLedgerListOpened = false"
        />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import store from '../store/index';
//
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import LedgerList from '@/components/modal/LedgerListModal.vue';

    export default {
        name: 'view-bank',
        components: {
            Header, Navigation, LedgerList
        },
        setup() {
            const route = useRoute();
            const router = useRouter();
            const user = ref()
            const banks = ref([])
            const currentId = route.params.bankId;
            const currentBank = ref()
            // Название выбранного банка
            const currentBankName = ref('')
            // Выбранный банк
            const bankBalance = ref()
            // массив банковских холдеров
            const holders = ref()
            //
            const ledgerList = ref()
            //
            onMounted(() => {
                user.value = store.state.user
                if(user.value === '') {
                    router.push({path: '/'})
                } else {
                    // Подтягиваем из БД все банки
                    // РЕАЛИЗОВАТЬ: фильтр банков, где участвует user
                    store.methods.getBanksFromDB()
                    banks.value = store.state.banks
                    
                    currentBank.value = banks.value.find(item => item.id === +currentId)

                    // название, баланс, холдеры 
                    currentBankName.value = currentBank.value.name
                    bankBalance.value = currentBank.value.balance
                    holders.value = currentBank.value.holders

                    // вытягиваем из БД бух. книгу
                    store.methods.getLedgerFromBD()
                    // фильтруем весь леджер, вытягивая данные конкретного банка
                    ledgerList.value = store.state.ledger.filter(item => item.bankId === +currentId)
                }
            })

            //
            const isLedgerListOpened = ref(false)

            return {
                route, currentId, user, currentBank, currentBankName, bankBalance, holders, ledgerList, isLedgerListOpened
            }
        }
    }
</script>

<style scoped>
    .fixed {
        position: fixed;
    }
</style>