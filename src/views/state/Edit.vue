<template>
<div class="container-my-5">

<div class="row justify-content-center">

<div class="col-8">


<div class="card rounded shadow">
    <div class="card-header">
        Edit Negara
    </div>

    <div class="card-body">
        <form @submit.prevent="update()">
                <div class="mb-3">
                    <label for="" class="form-label">Kode Negara</label>
                    <input type="text" class="form-control" v-model="country.country_code">
                    <div  v-if="validator.country_code" class="text-danger">
                    {{validator.title[0]}}
                    </div>

                </div>

                
                <div class="mb-3">
                    <label for="" class="form-label">Nama Negara</label>
                    <input type="datetime" class="form-control" v-model="country.name">
                    <div v-if="validator.name" class="text-danger">
                   {{validator.time[0]}}
                    </div>

                </div>
        
        
             

                <button class="btn btn-outline-success">Submit</button>
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

import {reactive, ref, onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import axios from 'axios'

export default {

        setup(){
            // data binding 
            let country = reactive({country_code:'',name:'',});

            // validator 
            const validator = ref([]);

            // router 
            const router = useRouter();
            const route =useRoute();


// get data from parameter
onMounted(()=> {
    axios.get(`http://localhost:8000/api/country/${route.params.id}`)
    .then((result) => {
        country.country_code = result.data.data.country_code,
        country.name = result.data.data.name
    }).catch((err)=> {
        console.log(err.response.data)
    })
});


// Update data
            function update(){
                axios.put(`http://localhost:8000/api/country/${route.params.id}`, country)
                .then(()=>{
                //redirect 
                    alert("Selamat Anda Berhasil Edit")

                    router.push({
                        name:'country.index'
                    })

                }).catch((err)=>{
                    // Show Validation
                    validator.value=err.response.data
                });
            }


            return{
                country,
                validator,
                router,
                update
                
            }
        }

}

</script>