<template>
  <div class="home">
    <nav-list></nav-list>
    <div class="container-fluid">
      <div class="row justify-content-sm-center">
        <div class="col-3">
          <div class="block-full-height d-flex justify-content-center align-items-start ">

            <div class="text-center">
              <br>
              <div class="picture"></div>
              <router-link class="nav-item" to="/profile">
                  <a class="nav-link" href="">Hi, User!</a>
              </router-link>
              
              <hr>
              <a class="btn btn-success" type="submit">Join a Class</a>
              <p class="text-left mt-2">Classes</p>
              <ul class="text-left">
                  <router-link class="nav-item" tag="li" to="/class"  v-for="item in items">
                    <a class="nav-link" href="">{{item.title}}</a>
                  </router-link>
              </ul>
            </div>

          </div>
        </div>
        <div class="col-5">
          <div class="block-full-height d-flex justify-content-center align-items-start">
            <feed-block></feed-block>
          </div>
        </div>
        <div class="col-4">
          <div class="block-full-height d-flex justify-content-center align-items-start">

            <h5>Forums</h5>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from '../components/navigation.vue';
  import feedBlock from '../components/feed-block.vue';
  export default {
    data() {
      return {
        items: [{
            title: 'AN401'
          },
          {
            title: 'ANIMPORT'
          },
          {
            title: 'WEBFOLIO'
          }
        ]
      }
    },
    components: {
      'nav-list': Navigation,
      'feed-block': feedBlock
    }
  }
</script>

<style scoped lang="scss">
  form input {
    width: 100%;
  }

  .green {
    background-color: green;
  }

  .picture {
    background-color: #efefef;
    padding: 65px 30px;
    border-radius: 50%;
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 0;
    }
  }
</style>