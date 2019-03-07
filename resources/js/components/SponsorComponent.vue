<template>
  <div  class="bg-light">
    <div class="container py-5">
        <div class="owl-carousel owl-theme">
          <div class="item"><img :src="('img/SLACK.png')" alt="Owl Image" class="img-fluid"></div>
          <div class="item"><img :src="('img/docker.png')" alt="Owl Image" class="img-fluid"></div>
          <div class="item"><img :src="('img/SLACK.png')" alt="Owl Image" class="img-fluid"></div>
          <div class="item"><img :src="('img/docker.png')" alt="Owl Image" class="img-fluid"></div>
          <div class="item"><img :src="('img/docker.png')" alt="Owl Image" class="img-fluid"></div>
          <div class="item"><img :src="('img/SLACK.png')" alt="Owl Image" class="img-fluid"></div>
          <div class="item"><img :src="('img/SLACK.png')" alt="Owl Image" class="img-fluid"></div> 
        </div>
    </div>
  </div>
    </template>
<script>
export default {
  
  data() {
    return {};
  },
  mounted() {
    $('.owl-carousel').owlCarousel({
       loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        responsive:{
        0:{
        items:2
        },
        600:{
        items:3
        },
        1000:{
        items:5
        }
    }
    })
  }
};
</script>
<style>
.item{
  width: 100px;
}
</style>