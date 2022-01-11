<template>
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
import axios from 'axios'
import {onMounted, ref,reactive} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from "vuex";


export default {
    setup(){
        // defines reactive state
        let transaction =  ref([]);
         const data = reactive({
    email:'',
    password:''
  });

    const message = ref('You are not logged in!');
    const store = useStore();
    const userData = ref({});
      const router=useRouter();
              const userDataSession = JSON.parse(sessionStorage.getItem('userData'));


    onMounted(async ()=> {
         try {
        // const response = await fetch('http://localhost:8000/api/profile', {
        //   headers: { 'Accept': 'application/json'},
        //   credentials: 'include'
        // });
        // const content = await response.json();
        // console.log(userDataSession)    

        message.value = `${userDataSession.name}`;
        await store.dispatch('setAuth', true);
      } catch (e) {
        //   router.push('/')
           
        // message.value = 'You are not logged in!';
        // await store.dispatch('setAuth', false);

      }

        // get data from api endpoint 
        axios.get('http://localhost:8000/api/transaction')
        .then((result)=> {
           transaction.value =result.data 
        }).catch((err)=> {
              console.log(err.response.message)  
        });
    });


function  logout (){
         const res =   fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${userDataSession.token}`

        },
        credentials: 'include',
        body: JSON.stringify(data)
      });
    //   router.push('/')
        sessionStorage.clear()
        router.push('/')
    }

    function destroy(id, index){
        axios.delete(`http://localhost:8000/api/transaction/${id}`)
        .then(()=> {
           let alert= confirm("Anda ingin menghapus data")

           if(alert == true){
            transaction.value.data.splice(index,1)

           }
        }).catch((err)=> {
            console.log(err.response.data)
        });
    }

    return {
        transaction,
        destroy,
        logout,
        message,
        userDataSession
    }
    }
}
</script>