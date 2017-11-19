<template>
  <div class="home">
    <nav-list></nav-list>
    <div class="container-fluid">
      <div class="row no-gutters justify-content-sm-center">
        <div class="col-12">
          <div class="row">
            <div class="col-8">
              <div class="forum-post">
                <div class="forum-post__header full-block__post m-2 p-3" v-for="post in posts">
                  <h5 class="mb-2">{{post.title}}</h5>
                  <div class=" d-flex flex-row justify-content-start  align-items-center">
                    <img class="picture-placeholder mr-3" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                      alt="">
                    <a class="mb-0" href="">{{post.username}} </a> <p class="mb-0 ml-1"> posted this 2 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">

            </div>
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
        posts: [{
            username: 'Al Oquindo',
            title: 'I am having some difficulties in this area, help me out',
            content: 'Aenean quam eros, tempor in fringilla vel, porttitor eget augue. Nam sit amet diam ante. Praesent et libero tincidunt velit molestie viverra. In maximus vitae ante ut posuere. Proin dictum vitae lectus imperdiet porttitor. In.'
          },
          {
            username: 'John Doe',
            title: 'I need suggestions for WebdTools!',
            content: 'Pellentesque vel purus a diam consectetur consectetur. Vivamus ut molestie ligula. Donec dignissim nulla vitae ligula rutrum, semper aliquam nisi vulputate. Nunc ut suscipit mauris. Integer ut neque facilisis, lobortis lorem vitae, vehicula risus. Cras.'
          },
          {
            username: 'Anna Lumanlan',
            title: 'Found this new technology. Might be useful for you guys!',
            content: 'Ut lacinia in sapien nec fringilla. Nullam non mauris magna. Curabitur iaculis placerat ex, ac cursus leo rutrum eget. Morbi viverra nisl eget massa fermentum accumsan. Vivamus nulla orci, sodales id interdum et, congue quis.'
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