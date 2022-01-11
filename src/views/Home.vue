 <template>
 <nav class="navbar navbar-light bg-light">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">
     <!--<img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">-->
 <i class="fas fa-money-bill">Akuntansi App</i>
 {{message}}
     </a>
   </div>
 </nav>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item">
      <div class="carousel-caption d-none d-md-block">
        <h5>test</h5>
        <p>Hello</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 

 </template>
 <script>
// import {onMounted, ref} from 'vue';
// import {useStore} from "vuex";
// export default {
//   name: "Home",
//   setup() {
//     const message = ref('You are not logged in!');
//     const store = useStore();
//     const userData = ref({});
//     onMounted(async () => {
//       try {
//         // const response = await fetch('http://localhost:8000/api/profile', {
//         //   headers: { 'Accept': 'application/json'},
//         //   credentials: 'include'
//         // });
//         // const content = await response.json();

//         const userDataSession = JSON.parse(sessionStorage.getItem('userData'));
//         message.value = `Hi ${userDataSession.name}`;
//         await store.dispatch('setAuth', true);
//         // console.log(userDataSession)    
//       } catch (e) {
           
//         // message.value = 'You are not logged in!';
//         // await store.dispatch('setAuth', false);

//       }
//     });
//     return {
//       message
//     }
//   }
// }
// </script>