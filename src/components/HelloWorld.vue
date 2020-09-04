<template>
  <div class="hello">
    <div class='container'>
      <select class="" @change="callapi()" v-model="location" >
        <option  v-for="data in locationarray" :value="data">
          {{data}}
        </option >
      </select>
      <div>location:{{location}}</div>
      <!-- <div>{{weatherElement}}</div> -->
      <span class="icon"><img :src='src'></span>
      <div><img :src='ub' width="16px" height="16px"> {{PoP}}%</div>
      <div>{{MinT}} ~ {{MaxT}}</div>
      <div>CI:{{cCI}}</div>
    </div>

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
      Wx:'',
      PoP:'',
      MinT:'',
      cCI:'',
      MaxT:'',
      srcurl:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/",
      src:'',
      ub:"https://image.flaticon.com/icons/svg/414/414974.svg" 
    }
  },
  methods: {
    //你好ㄋ  
    callapi() {
      let self = this
      // this.paddingLeft1(2,2)
      this.$axios
      .get(
        "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization="+this.apikey+"&format=json&locationName="+this.location
      )
      .then((Response) =>{
        console.log(Response)
        this.res = Response
        this.weatherElement = this.res.data.records.location[0].weatherElement
        this.Wx = this.weatherElement[0].time[0].parameter;
        this.src = '';
        this.src = this.srcurl + self.paddingLeft1(this.Wx.parameterValue,2)+ '.svg';
        this.PoP = this.weatherElement[1].time[0].parameter.parameterName;
        this.MinT = this.weatherElement[2].time[0].parameter.parameterName;
        this.cCI = this.weatherElement[3].time[0].parameter.parameterName;
        this.MaxT = this.weatherElement[4].time[0].parameter.parameterName;



        // this.Wx.forEach(element => console.log(element.parameter.parameterName));
        console.log(this.src)
        console.log(this.weatherElement)
      })
      .catch((error) => {
        console.log(error)
      })
    },

    paddingLeft1(str,lenght) {
      if(str.length >= lenght) {
      return str;
       } else {
      return this.paddingLeft1("0" +str,lenght);
       }
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
.container {
  background-color: #1a67b1;
  border-radius: 10px;
  color: #fff;
  width: calc(80% - 8px);
  margin: 4px 0;
  height: 450px;

}
</style>
