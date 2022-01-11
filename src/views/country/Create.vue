<template>
<div class="container-my-5">

<div class="row justify-content-center">

<div class="col-8">


<div class="card rounded shadow">
    <div class="card-header">
        Create Transaction
    </div>

    <div class="card-body">
        <form @submit.prevent="kirim()">
                <div class="mb-3">
                    <label for="" class="form-label">Kode Negara</label>
                    <input type="text" class="form-control" v-model="country.country_code">
                    <div  v-if="validator.title" class="text-danger">
                    {{validator.title[0]}}
                    </div>

                </div>

                
                <div class="mb-3">
                    <label for="" class="form-label">Nama Negara</label>
                    <input type="datetime" class="form-control" v-model="country.name">
                    <div v-if="validator.time" class="text-danger">
                   {{validator.time[0]}}
                    </div>

                </div>
        
        

                <button class="btn btn-outline-success" v-on:click="alertDisplay()">Submit</button>
                &nbsp
                <router-link :to="{name:'country.index'}" class="btn btn-outline-primary">Back</router-link>


        
        </form>


    </div>




</div>


</div>


</div>
</div>


</template>


<script>

import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

export default {

        setup(){
            // data binding 
            const country = reactive({country_code:'',name:''});

            // validator 
            const validator = ref([]);

            // router 
            const router = useRouter();


            function kirim(){
                axios.post('http://localhost:8000/api/country', country)
                .then(()=>{
                    alert("Selamat Anda Berhasil Input")
                //redirect 
                    router.push({
                        name:'country.index'
                    })

                }).catch((err)=>{
                    // Show Validation
                    validator.value=err.response.data
                });
            }

            function alertDisplay(){
Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)            }


            return{
                country,
                validator,
                router,
                kirim,
                alertDisplay
                
            }
        }

}

</script>