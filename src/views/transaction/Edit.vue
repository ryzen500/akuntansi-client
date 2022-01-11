<template>
<div class="container-my-5">

<div class="row justify-content-center">

<div class="col-8">


<div class="card rounded shadow">
    <div class="card-header">
        Edit Transaction
    </div>

    <div class="card-body">
        <form @submit.prevent="update()">
                <div class="mb-3">
                    <label for="" class="form-label">Title</label>
                    <input type="text" class="form-control" v-model="transaction.title">
                    <div  v-if="validator.title" class="text-danger">
                    {{validator.title[0]}}
                    </div>

                </div>

                
                <div class="mb-3">
                    <label for="" class="form-label">Time</label>
                    <input type="datetime" class="form-control" v-model="transaction.time">
                    <div v-if="validator.time" class="text-danger">
                   {{validator.time[0]}}
                    </div>

                </div>
        
        
                <div class="mb-3">
                    <label for="" class="form-label">Type</label>
                    <select class="form-select" v-model="transaction.type">
                    <option value="expense">Expense</option>
                    <option value="revenue">Revenue</option>
                    
                    </select>
                    <div v-if="validator.type" class="text-danger">
                    {{validator.type[0]}}
                    </div>

                </div>


                <div class="mb-3">
                    <label for="" class="form-label">amount</label>
                    <input type="number" class="form-control" v-model="transaction.amount">
                    <div v-if="validator.amount" class="text-danger">
                    {{validator.amount[0]}}
                    </div>

                </div>

                <button class="btn btn-outline-success">Submit</button>
                &nbsp
                <router-link :to="{name:'transaction.index'}" class="btn btn-outline-primary">Back</router-link>


        
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
            let transaction = reactive({title:'',amount:'',time:'',type:'',});

            // validator 
            const validator = ref([]);

            // router 
            const router = useRouter();
            const route =useRoute();


// get data from parameter
onMounted(()=> {
    axios.get(`http://localhost:8000/api/transaction/${route.params.id}`)
    .then((result) => {
        transaction.title = result.data.data.title,
        transaction.amount = result.data.data.amount,
        transaction.time = result.data.data.time,
        transaction.type = result.data.data.type
    }).catch((err)=> {
        console.log(err.response.data)
    })
});


// Update data
            function update(){
                axios.put(`http://localhost:8000/api/transaction/${route.params.id}`, transaction)
                .then(()=>{
                //redirect 
                    alert("Selamat Anda Berhasil Edit")

                    router.push({
                        name:'transaction.index'
                    })

                }).catch((err)=>{
                    // Show Validation
                    validator.value=err.response.data
                });
            }


            return{
                transaction,
                validator,
                router,
                update
                
            }
        }

}

</script>