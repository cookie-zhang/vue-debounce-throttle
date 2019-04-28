<template>
  <div class="hello">
   <el-input v-model="search.input" placeholder="请输入内容" style='width:300px'></el-input><el-button type="primary">搜索</el-button><br/>
   假装这里有个表格，根据上面的输入的数据模糊查询你想要的数据
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      search: {
        input: '',
        timer:null
      }
    }
  },
  watch: {
    'search.input': {
      handler (value) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.getList();
        }, 1000)

      },
      deep: true
    }
  },
  methods: {
    getList(){
      //在这里你可以请求你的接口，拿到你想要的数据
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
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
