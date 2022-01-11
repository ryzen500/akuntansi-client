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




                <div class="mb-3">
  <label for="formFile" class="form-label">Upload Foto</label>
  <input class="form-control" type="file" ref="myFiles" @change="upload_avatar" name="images">
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

import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

export default {

        // methods:{

//             getStates(){
//                 axios.get("http://localhost:8000/api/" + this.form.country_id + "/states")
//                 .then(res =>{
//                     this.states=res.data
//                 }).catch(error => {
//                     console.log(error)
//                 })
//             },
// getCities(){
//                 axios.get("http://localhost:8000/api/" + this.form.state_id + "/cities")
//                 .then(res =>{
//                     this.cities=res.data
//                 }).catch(error => {
//                     console.log(error)
//                 })
//             }
            


        // }
        setup(){
            // data binding 
            const transaction = reactive({title:'',amount:'',time:'',type:'',images:[],country_id:''});

            // validator 
            const validator = ref([]);

            // router 
            const router = useRouter();

           function getCountries(){
                axios.get("http://localhost:8000/api/data/country")
                .then(res => {
                    this.country=res.data
                }).catch(error => {
                    console.log(error)
                })
            }

             function getStates(){
                axios.get("http://localhost:8000/api/data/1/states")
                .then(res => {
                    this.country=res.data
                }).catch(error => {
                    console.log(error)
                })
            }

     function upload_avatar(e){

//   this.images = this.$refs.myFiles.files;
             this.images = e.target.files[0];
            //     let reader = new FileReader();  

            //     if(file['size'] < 2111775)
            //     {
            //         reader.onloadend = (file) => {
            //         // console.log('RESULT', reader.result)
            //         //  this.images = reader.result;
            //         //  this.images = file;

            //         }              
            //          reader.readAsDataURL(file);
            //     }else{
            //         alert('File size can not be bigger than 2 MB')
            //     }

            
            }

            function kirim(){
                let formData = new FormData();
formData.append('title',transaction.title);
formData.append('amount',transaction.amount);
formData.append('type',transaction.type);
// formData.append('country_id',transaction.country_id);
// formData.append('state_id',transaction.state_id);
formData.append('images',this.images);
// console.log()

console.log(this.images);
                axios.post('http://localhost:8000/api/transaction', formData)

                .then(()=>{
                    // alert("Selamat Anda Berhasil Input")
                    Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
                //redirect 
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
                kirim,
                upload_avatar
                // getCountries,
                // getStates
                            }
        }

}

</script>