<template>
{{Navbar}}
<br>

<div class="container-my-5">

<div class="row justify-content-center">

<div class="col-8">


<div class="card rounded shadow">
    <div class="card-header">
        <h3>Transaction List</h3>
    </div>

    <div class="card-body table-responsive">
    <router-link :to="{name:'state.create'}" class="btn btn-primary">Create</router-link>

        <table class="table">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Kode Negara Bagian </th>
                <th scope="col">Nama Negara Bagian </th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(state, index) in state.data" :key="index">
            <td>{{state.id}}</td>
            <td>{{state.country_id}}</td>
            <td>{{state.name}}</td>
            <td>{{state.created_at}}</td>
            <td>{{state.updated_at}}</td>
            <td>
            <div class="btn-group">
               <router-link :to="{name:'state.edit', params:{id: state.id}}" class="btn btn-sm btn-outline-info">Edit</router-link> 
                <button class="btn btn-sm btn-outline-danger" @click.prevent="destroy(state.id, index)"> 
                Delete
                </button>
            </div>
            </td>

            </tr>
        </tbody>
        </table>
    </div>


</div>


</div>


</div>
</div>



</template>


<script>
import axios from 'axios'
import {onMounted, ref,reactive} from 'vue'
import Navbar  from '../Navbar.vue'
export default {
   components: {
       Navbar
   },
    setup(){
        // defines reactive state
        let state =  ref([]);
        // let message =  reactive({email:'',password:''});

    onMounted(()=> {
        // get data from api endpoint 


        axios.get('http://localhost:8000/api/state')
        .then((result)=> {
           state.value =result.data 
        }).catch((err)=> {
              console.log(err.response.message)  
        });
    });

    function user(){
          axios.get('http://localhost:8000/api/user')
        .then((result)=> {
         message.value=result.data
        }).catch((err)=> {
              console.log(err.response.message)  
        });
    }

function logout(){
          axios.post('http://localhost:8000/api/logout')
        .then((result)=> {
          console.log("data")
        }).catch((err)=> {
              console.log(err.response.message)  
        });
    }

    function destroy(id, index){
        axios.delete(`http://localhost:8000/api/state/${id}`)
        .then(()=> {
           let alert= confirm("Anda ingin menghapus data")

           if(alert == true){
            state.value.data.splice(index,1)

           }
        }).catch((err)=> {
            console.log(err.response.data)
        });
    }

    return {
        state,
        destroy,
        user,
        logout,
        Navbar
    }
    }
}
</script>