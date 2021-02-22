<template>
  <div>
    <Nav/>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click="go(1)">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click="go(2)">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click="go(3)">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click="go(4)">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "index",
  components:{
    Nav
  },
  data(){
    return{
      currentDate: new Date()
    }
  },
  methods: {
    go(id){
      this.$router.push({
        name: 'articles-id',
        params:{
          id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>