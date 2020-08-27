<template>
  <div id="app">
    <router-link class="tag" to="/about">About</router-link>
        <router-link class="tag" to="/room">Room</router-link>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件將渲染在這 -->
    <router-view/>
    <div v-for="(val, key) in roomlist">
      <div>{{val.roomName}}</div>
      <div>{{val.roomType}}</div>
      <div>{{val.weekdayPrice}} ~ {{val.weekendPrice}}</div>
      <img :src="val.image">
    
    </div>
  </div> 
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      'roomlist' : [  
          {
            roomType: '雙人房',
            roomName: '海景風格-一般房型',
            weekdayPrice: '1200',
            weekendPrice: '1800',
            content: '不含早餐、位於3樓、海景、衛浴位於房內、乾濕分離衛浴、1 張雙人床、不可加人',
            detail: ['樓層：位於3樓', '床型：1 張雙人床', '家電用品：冷氣、電扇', '戶外：景觀陽台、躺椅', '飲品茶點：小點心、茶、咖啡', '衛浴型式：乾濕分離衛浴', '其他：書籍、雜誌、無線網路'],
            image: ['http://lorempixel.com/150/150/food/1']
          },
          {
            roomType: '雙人房',
            roomName: '山景風格-一般房型',
            weekdayPrice: '1000',
            weekendPrice: '1200',
            content: '不含早餐、位於3樓、山景、衛浴位於房內、乾濕分離衛浴、2 張單人床、不可加人',
            detail: ['樓層：位於3樓', '床型：2 張單人床', '家電用品：冷氣、電扇', '戶外：景觀陽台、躺椅', '飲品茶點：小點心、茶、咖啡', '衛浴型式：乾濕分離衛浴', '其他：書籍、雜誌、無線網路'],
            image: ['http://lorempixel.com/150/150/food/2']
          },
          {
            roomType: '四人房',
            roomName: '海景風格-樓中樓',
            weekdayPrice: '2400',
            weekendPrice: '3600',
            content: '不含早餐、位於2樓、海景、衛浴位於房內、乾濕分離衛浴、2 張雙人床、不可加人',
            detail: ['樓層：位於2樓', '床型：2 張雙人床', '家電用品：冷氣、電扇', '戶外：景觀陽台、躺椅', '飲品茶點：小點心、茶、咖啡', '衛浴型式：乾濕分離衛浴', '其他：書籍、雜誌、無線網路'],
            image: ['http://lorempixel.com/150/150/food/3']
          },
          {
            roomType: '四人房',
            roomName: '山景風格-樓中樓',
            weekdayPrice: '2000',
            weekendPrice: '3200',
            content: '不含早餐、位於2樓、海景、衛浴位於房內、乾濕分離衛浴、2 張雙人床、不可加人',
            detail: ['樓層：位於2樓', '床型：2 張雙人床', '家電用品：冷氣、電扇', '戶外：景觀陽台、躺椅', '飲品茶點：小點心、茶、咖啡', '衛浴型式：乾濕分離衛浴', '其他：書籍、雜誌、無線網路'],
            image: ['http://lorempixel.com/150/150/food/4']
          },
          {
            roomType: '六人房',
            roomName: '海景風格-大通舖',
            weekdayPrice: '3600',
            weekendPrice: '4800',
            content: '不含早餐、位於1樓、海景、衛浴位於房內、乾濕分離衛浴、3 張雙人床、不可加人',
            detail: ['樓層：位於1樓', '床型：3 張雙人床', '家電用品：冷氣、電扇', '戶外：景觀陽台、躺椅', '飲品茶點：小點心、茶、咖啡', '衛浴型式：乾濕分離衛浴', '其他：書籍、雜誌、無線網路'],
            image: ['http://lorempixel.com/150/150/food/5']
          },
        ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
