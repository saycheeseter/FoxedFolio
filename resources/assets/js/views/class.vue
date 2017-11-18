<template>
  <div class="home">
    <nav-list></nav-list>
    <div class="container-fluid">
      <div class="row justify-content-sm-center">
        <div class="col-3">
          <div class="block-full-height d-flex justify-content-center align-items-start ">

            <div class="text-left mt-5">
              <a href="">AN401</a>
              <hr>
              <a class="btn btn-success text-center mb-2" type="submit">Code Play</a><br>
              <a href="">Announcements</a><br>
              <a href="">Assignments</a><br>
              <a href="">Files</a>
            </div>

          </div>
        </div>
        <div class="col-5">
          <div class="block-full-height d-flex justify-content-center align-items-start">
            <class-feed-block></class-feed-block>
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
  import classFeedBlock from '../components/class-feed-block.vue';
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
      'class-feed-block': classFeedBlock
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