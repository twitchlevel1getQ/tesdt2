<template>
  <div class="hello">
   
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
export default {
  name: 'HelloWorld',
  data () {
    
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
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
    this.getapi();
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
