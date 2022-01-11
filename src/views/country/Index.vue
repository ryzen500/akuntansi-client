<template>



<div class="container-fluid" v-if="user">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Akuntansi App</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
    <router-link :to="{name:'transaction.index'}" class="nav-link align-middle px-0"><i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
</router-link>
                        
                    </li>
                    <li>
 <router-link :to="{name:'transaction.index'}" class="nav-link align-middle px-0"><i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Menu</span>
</router-link>
   
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                 <router-link :to="{name:'transaction.index'}" class="nav-link px-0"><span class="d-none d-sm-inline">Transaction</span>
</router-link>
                               <!-- <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Transaction</span> </a> -->
                            </li>
                            <li>
                 <router-link :to="{name:'transaction.index'}" class="nav-link px-0"><span class="d-none d-sm-inline">Transaction</span>
</router-link>

                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">User</span> 2 </a>
                            </li>

                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">City</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                  <!--  <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>-->
                </ul>
                <hr>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                         <a class="dropdown-item" @click.prevent="logout()">Sign Out
        </a>

    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
<br>

<div class="container-my-5">

<div class="row justify-content-center">

<div class="col-8">


<div class="card rounded shadow">
    <div class="card-header">
        <h3>Transaction List</h3>
    </div>

    <div class="card-body table-responsive">
    <router-link :to="{name:'country.create'}" class="btn btn-primary">Create</router-link>

        <table class="table">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Kode Negara</th>
                <th scope="col">Nama Negara</th>

                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(country, index) in country.data" :key="index">
            <td>{{country.id}}</td>
            <td>{{country.country_code}}</td>
            <td>{{country.name}}</td>
            <td>{{country.created_at}}</td>
            <td>{{country.updated_at}}</td>
            <td>
            <div class="btn-group">
               <router-link :to="{name:'country.edit', params:{id: country.id}}" class="btn btn-sm btn-outline-info">Edit</router-link> 
                <button class="btn btn-sm btn-outline-danger" @click.prevent="destroy(country.id, index)"> 
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


        </div>
    </div>
</div>

</template>


<script>
import axios from 'axios'
import {onMounted, ref,reactive} from 'vue'

export default {
    setup(){
        // defines reactive state
        let country =  ref([]);
        // let message =  reactive({email:'',password:''});

    onMounted(()=> {
        // get data from api endpoint 


        axios.get('http://localhost:8000/api/country')
        .then((result)=> {
           country.value =result.data 
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
        axios.delete(`http://localhost:8000/api/country/${id}`)
        .then(()=> {
           let alert= confirm("Anda ingin menghapus data")

           if(alert == true){
            country.value.data.splice(index,1)

           }
        }).catch((err)=> {
            console.log(err.response.data)
        });
    }

    return {
        country,
        destroy,
        user,
        logout
    }
    }
}
</script>