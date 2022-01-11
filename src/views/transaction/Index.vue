<template>
<div class="container-fluid" v-if="userDataSession" >
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
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Transaction</span> 1 </a>
                            </li>
                            <li>
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
                        <span class="d-none d-sm-inline mx-1">{{message}}</span>
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
  <input
                class="form-control"
                placeholder="Cari Nama Mineral/Komoditas"
                @keyup="prosesMenu"
                id="cariKat"
              />
    <div class="card-body table-responsive">
    <router-link :to="{name:'transaction.create'}" class="btn btn-primary">Create</router-link>

        <table class="table">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Transaction</th>
                <th scope="col">Waktu</th>
                <th scope="col">Belanja</th>
                <th scope="col">Type</th>
                <th scope="col">Gambar</th>

                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody id="test">
            <tr class="tester" v-for="(transaction, index) in transaction.data" :key="index">
            <td>{{transaction.id}}</td>
            <td>{{transaction.title}}</td>
            <td>{{transaction.time}}</td>
            <td>{{transaction.amount}}</td>
            <td>{{transaction.type}}</td>
            <td><img :src="Endpoint + '/image/' + transaction.images" class="img-thumbnail" ></td>
            <td>
            <div class="btn-group">
               <router-link :to="{name:'transaction.edit', params:{id: transaction.id}}" class="btn btn-sm btn-outline-info">Edit</router-link> 
                <button class="btn btn-sm btn-outline-danger" @click.prevent="destroy(transaction.id, index)"> 
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
import {useRouter} from 'vue-router'
import {useStore} from "vuex";



export default {
 

    setup(){
 document.addEventListener("DOMContentLoaded", function () {
        prosesMenu;
      });
        // defines reactive state
        let transaction =  ref([]);
         const data = reactive({
    email:'',
    password:''
  });
var Endpoint ="http://localhost/akuntansi-api/public";

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

     function prosesMenu() {
        var input = document.getElementById("cariKat");
        var filter = input.value.toLowerCase();
        var ul = document.getElementById("#test");
        var li = document.querySelectorAll(".tester");
console.log(li)
        for (var i = 0; i <= li.length; i++) {
          var ahref = document.querySelectorAll(".tester")[i];
          if (ahref.innerHTML.toLowerCase().indexOf(filter) > -1) {
             li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }


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
        userDataSession,
        Endpoint,
        prosesMenu
    }
    }
}
</script>