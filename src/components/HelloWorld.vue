<template>
  <div class="hello">
     <select class="" @change="callapi()" v-model="location" >
      <option  v-for="data in locationarray" :value="data">
        {{data}}
      </option >
     </select>
     <div>location:{{location}}</div>
     <!-- <div>{{weatherElement}}</div> -->
     <div>{{Wx}}</div>


     <!-- {{res}} -->
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
export default {
  name: 'HelloWorld',
  data () {
    
    return {
      msg: 'Welcome to Your Vue.js App',
      apikey: "CWB-F1368649-CA46-4E25-B07B-084BD5C4401C",
      locationarray:['宜蘭縣','花蓮縣','臺東縣','澎湖縣','金門縣','連江縣','臺北市','新北市','桃園市','臺中市','臺南市','高雄市','基隆市'],
      location: "",
      res:[],
      weatherElement:[],
      Wx:[],

    }
  },
  methods: {
    //你好ㄋ  
    callapi() {
      this.$axios
      .get(
        "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization="+this.apikey+"&format=json&locationName="+this.location
      )
      .then((Response) =>{
        console.log(Response)
        this.res = Response
        this.weatherElement = this.res.data.records.location[0].weatherElement
        this.Wx = this.weatherElement[0]

        console.log(this.weatherElement)
      })
      .catch((error) => {
        console.log(error)
      })
    },


    getapi() { 
      let tag = 'lib.cg.getDrugBasicData'
      let param = new FormData()
      let conf = {
        params: {
          wtag: tag
        }
      };

      let obj = {
        wb_base64: 0,
        encode: "N",
        drug_cod: 'IDAN',
        typ: 'PS'
      }
      param.append("var", Base64.encode(JSON.stringify(obj)));

      this.$axios.post("/api", param, conf)
      .then((Response)=>{
        let result = JSON.parse(Base64.decode(Response.data))
        console.log(result)
      })
      .catch((error)=> {
        console.log(error);
      });
    }
  },
  mounted() {
    // this.callapi();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
