<template>
  <div class="hide-scroll">

    <!--  -->
    <Header :route="'dashboard'"/>

    <!--  -->
    <div class="content">

      <div class="diagram-wrapper">

        <!--  -->
        <div style="font-size: 1rem" @click="isBanksListOpened = true">
          <span>Общий баланс:</span>
          <br>
          <span style="font-weight: bold">{{ setViewBalances(sumBanksBalances) }}</span>
        </div>

        <!--  -->
        <div class="canvas">
          <svg class="chart" width="450" height="350" viewBox="0 0 40 40">
            <circle v-for="(item, index) in banks" :key="index" class="unit" r="15.9" cx="50%" cy="50%" @click="chooseBank(item, index)">
              {{ item }}
            </circle>
          </svg>
          <!-- Legend -->
          <div class="legend">
              <ul class="caption-list">
                <li class="caption-item" v-for="(item, index) in banks" :key="index" @click="goToChoosenBank(item)">
                  <div class="caption-item_title">{{item.name}}</div>
                  <div class="caption-item_value">{{ setViewBalances(item.balance) }}</div>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <Navigation :route="'dashboard'"/>

    <!--  -->
    <BanksList 
      :isOpen="isBanksListOpened"
      :sumBalance="sumBanksBalances"
      :banksArray="filterdBanksArray"
      @closeModal="isBanksListOpened = false"
    />
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

import store from '../store/index';

import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue';
import BanksList from '@/components/modal/BanksListModal.vue';

//функции помощники
import { setViewBalances } from '../helpers/styleViewNumbers';

export default {
  components: {
    Navigation, Header, BanksList
  },

  setup() {
    const colors = store.state.colors
    //
    const router = useRouter();
    //
    const user = ref()
    const banks = ref([])
    const sumBanksBalances = ref()

    const filterdBanksArray = ref([])
    //
    onMounted(() => {
      user.value = store.state.user
      if(user.value === '') {
        router.push({path: '/'})
      } else {
        // Подтягиваем из БД все банки
        store.methods.getBanksFromDB()
        // Фильтруем, относительно owner === user
        store.state.banks.filter(bank => {
          if(bank.holders.find(e => e.email === user.value) !== undefined) {
            filterdBanksArray.value.push(bank)
          }
        })
        banks.value = filterdBanksArray.value
        // Считаем баланс свободных средств всех банков
        sumBanksBalancesFunc()
        setStrokeDashArrayAndOffset()
      }
    })
    
    // Считаем общий баланс свободных средств по всем банкам
    // РЕАЛИЗОВАТЬ: фильтр банков, где участвует user
    // УМЕСТНО: условие user поместить именно здесь
    const sumBanksBalancesFunc = () => {
      let balancesArray = banks.value.map(bank => bank.balance)

      sumBanksBalances.value = balancesArray.reduce((sum, current) => {
        return sum + current
      })
    }

    //
    const choosenBank = ref()
    const chooseBank = (bank, index) => {
      // 
      const captionList = document.querySelectorAll('.caption-item'), 
      unitsList = document.querySelectorAll('.unit');
      choosenBank.value = bank
      // 
      unitsList[index].classList.add('unit__hovered');
      captionList[index].classList.add('visible');

      unitsList[index].addEventListener('mouseout', (e) => {
        if(e.toElement.classList.contains('caption-item') || e.toElement.classList.contains('caption-item_title') || e.toElement.classList.contains('caption-item_value')) {
          goToChoosenBank(choosenBank.value)
          unitsList[index].classList.remove('unit__hovered');
          captionList[index].classList.remove('visible');
        } else {
          unitsList[index].classList.remove('unit__hovered');
          captionList[index].classList.remove('visible');
        }
      })

    }

    const goToChoosenBank = (bank) => {
      router.push({
        name: 'view-bank',
        params: {
          bankId: bank.id
        }
      })
    }

    //
    const setStrokeDashArrayAndOffset = () => {
      // 
      let chart = document.querySelector('.chart');
      setTimeout(() => {
        // 
        let units = chart.querySelectorAll('.unit')

        for(let i = 0; i <= banks.value.length; i++) {
          if(banks.value[i]) {
            let ratio = banks.value[i].balance / sumBanksBalances.value * 100;
            units[i].setAttribute('stroke-dasharray', `${ratio},100`)
            units[i].setAttribute('stroke-dashoffset', 0);
            if(i === 0) {
              units[i].setAttribute('stroke-dashoffset', 0);
            } else {
              // Получаем значение 'stroke-dasharray' предыдущего элемента
              let sdArrPrev = parseFloat(units[i - 1].getAttribute('stroke-dasharray')) * (-1);
              // console.log(sdArrPrev);
              // Получаем значение 'stroke-dashoffset' предыдущего элемента
              let sdOffPrev = parseFloat(units[i - 1].getAttribute('stroke-dashoffset'));
              // console.log(sdOffPrev);
              // Суммируем значения
              let sumParam = sdArrPrev + sdOffPrev;
              // console.log(sumParam );
              // Устанавливаем значения в текущий элемент
              units[i].setAttribute('stroke-dashoffset', sumParam);
            }
          }
        }

      }, 100)
    }

    //
    const isBanksListOpened = ref(false)

    return {
      colors, router, user, banks, sumBanksBalances, sumBanksBalancesFunc, chooseBank, goToChoosenBank, choosenBank, setStrokeDashArrayAndOffset, isBanksListOpened, setViewBalances, filterdBanksArray
    }
  }
}
</script>

<style scoped>
  .diagram-wrapper {
    position: fixed;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
    width: 100%;
  }
  .canvas {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    width: 100vw;
    /* overflow: hidden; */
    margin-top: 1rem;
  }
  .unit {
    fill: none;
    stroke-width: 5;
    transition: all 0.5s ease;
  }
  .unit:nth-child(1) {
    /* stroke: #86cfa3; */
    /* stroke: v-bind('colors.unit1'); */
    stroke: v-bind('colors.unit1');
    /* stroke-dasharray: 30 100; */
    /* stroke-dashoffset: 0!important; */
  }
  .unit:nth-child(2) {
    stroke: v-bind('colors.unit2');
      /* stroke-dasharray: 22 100;  */
      /* stroke-dashoffset: -14; */
  }
  .unit:nth-child(3) {
      /* stroke: #ffc7ec; */
      stroke: v-bind('colors.unit3');
      /* stroke-dasharray: 25 100; */
      /* stroke-dashoffset: -30; */
  }
  .unit:nth-child(4) {
      /* stroke: #f8faa0; */
      stroke: v-bind('colors.unit4');
      /* stroke-dasharray: 14 100; */
      /* stroke-dashoffset: -48; */
  }
  .unit:nth-child(5) {
      /* stroke: #adffd8; */
      stroke: v-bind('colors.unit5');
      /* stroke-dasharray: 20 100; */
      /* stroke-dashoffset: -81;    */
  }
  .unit:nth-child(6) {
      /* stroke: #f2c48f; */
      stroke: v-bind('colors.unit6');
      /* stroke-dasharray: 5 100; */
      /* stroke-dashoffset: -55 */
  }
  .unit:nth-child(7) {
      /* stroke: #e3bfe2; */
      stroke: v-bind('colors.unit7');
      /* stroke-dasharray: 30 100; */
      /* stroke-dashoffset: -60; */
  }
  .unit:nth-child(8) {
      /* stroke: #6f75ad; */
      stroke: v-bind('colors.unit8');
      /* stroke-dasharray: 10 100; */
      /* stroke-dashoffset: -60; */
  }
  .unit__hovered {
    stroke-width: 8;
  }
  .caption-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .caption-item {
    position: absolute;
    z-index: 999999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    padding: 2rem;
  }
  .caption-item_title {
    font-weight: bold;
  }
  .caption-item_value {
    margin-top: 10px;
    font-size: 16px;
  }

  .visible {
    display: block!important;
  } 
</style>
