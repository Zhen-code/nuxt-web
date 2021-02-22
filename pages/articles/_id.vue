<template>
<div>
  <Nav></Nav>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item,index) in list" :key="index">
      <img :src="item.img" class="carousel-img"/>
    </el-carousel-item>
  </el-carousel>
  <section class="tab-content text-left">
    <div class="row menu-body">
      <div class="col-lg-6 menu-section pl-lg-5 order-lg-2">
        <template v-for="item in 4">
          <div class="menu-item">
            <div>
              <div class="row border-dot no-gutters">
                <div class="col-8 menu-item-name">
                  <h6>{{info.title}}</h6>
                </div>
                <div class="col-4 menu-item-price text-left">
                  <h6>{{info.price}}</h6>
                </div>
              </div>
              <div class="menu-item-description">
                <p>{{info.desc}}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="col-lg-6 menu-section text-center pr-lg-5 order-lg-1">
        <img :src="info.img" alt="" class="radius-image img-fluid">
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "_id",
  components:{
    Nav
  },
  data(){
    return{
      list: [
        {
          img: 'https://www.twcode01.com/images/demo/demo2.jpg'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4pi6Rjm2KDMHAh56pomFtQPVjBZKdw1FtA&usqp=CAU'
        },
        {
          img: 'https://www.twcode01.com/images/demo/demo2.jpg'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4pi6Rjm2KDMHAh56pomFtQPVjBZKdw1FtA&usqp=CAU'
        }
      ],
      info: {}
    }
  },
  methods:{
   async getData(){
     const res = await this.$axios.$get(`posts/${this.$route.params.id}`)
     this.info = res
     console.log(res)
   }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.carousel-img{
  width: 100%;
  height: 100%;
}

.tab-content{
  margin-top: 60px;
}

.menu-item {
  margin: 35px 0;
  font-size: 18px; }

.menu-item-name h6 {
  font-size: 22px;
  line-height: 30px;
  font-weight: 600; }

.menu-item-price h6 {
  font-weight: 600;
  font-size: 1.3em;
  color:#fbaf32;
}

.menu-item-description p {
  margin-top: 10px; }
</style>