<template>
    <!--FORMULARIO-->
    <div class="flex w-full pt-12 justify-center items-center">
        <div class=" flex flex-col md:flex-row md:space-x-6 space-y-6  md:space-y-0 bg-gray-800 w-full max-w-6xl p-8  rounded-xl shadow-lg text-white">
            
            <div class="flex flex-1 flex-col space-y-8 justify-around	  " >
                <div>
                    <h1 class="font-bold text-4xl tracking-wide">Prodequa</h1>
                    <p class="pt-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem dolorum? Obcaecati voluptate distinctio sit qui sapiente voluptatem ex repellendus assumenda, libero molestiae et aut ab quo molestias eius. Veniam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum explicabo laudantium iusto molestiae, numquam commodi natus modi maxime tempore quasi, quod sit, sapiente enim accusamus adipisci fugiat dolorem ea.</p>
                </div>
                <div class="flex flex-col space-y-4">
                    <div class="inline-flex space-x-2 items-center">
                        <ion-icon name="call-outline" class="text-xl"></ion-icon>
                        <span >(+51) 988 250 642</span>
                    </div>
                    <div class="inline-flex space-x-2 items-center">
                        <ion-icon name="mail-open-outline" class="text-xl"></ion-icon>
                        <span >soluciones@prodequa.com</span>
                    </div>
                    <div class="inline-flex space-x-2 items-center">
                        <ion-icon name="location-outline" class="text-xl"></ion-icon>
                        <span >Calle Gral. Belisario Suárez 518</span>
                    </div>
                </div> 
                
                <div class="flex space-x-4 text-lg">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                </div>

            </div>
            
            <div class="bg-gray-900 rounded-xl shadow-lg p-8 space-x-8 flex-1 " >
                <form @submit.prevent="enviarUsuario" class="flex flex-col space-y-4">
                    <div>
                        <input 
                            type="text" 
                            v-model="task.usuario"
                            placeholder="Nombre y Apellido" 
                            class=" w-full px4 py-2 outline-none bg-transparent border-0  border-b-2 focus:b">
                    </div>
                    <div>
                        <input 
                            type="text" 
                            v-model="task.razonSocial"
                            placeholder="Razon Social"
                            class=" w-full px4 py-2 outline-none bg-transparent border-0  border-b-2">
                    </div>
                    <div>
                        <input 
                            type="text" 
                            v-model="task.cargo"
                            placeholder="cargo"
                            class=" w-full px4 py-2 outline-none bg-transparent border-0  border-b-2">
                    </div>
                    <div>
                        <input 
                            type="number" 
                            v-model="task.celular"
                            placeholder="celular"
                            class=" w-full px4 py-2 outline-none bg-transparent border-0  border-b-2">
                    </div>
                    <div>
                        <input 
                            type="email" 
                            v-model="task.correo" 
                            placeholder="Correo"
                            class=" w-full px4 py-2 outline-none bg-transparent border-0  border-b-2">
                    </div>
                    <div>
                        <textarea 
                        v-model="task.mensaje"  
                        cols="30" 
                        rows="10" 
                        placeholder="Mensaje"
                        class=" w-full px4 py-2 outline-none bg-transparent border-0  border-b-2"></textarea>
                    </div>
                     <div v-if="edit === false" >
                        <button class="inline-block self-end bg-white text-black font-bold rounded-lg px-6 py-2 uppercase text-sm " > Enviar</button>
                    </div>
                    <div v-else>
                        <button class="inline-block self-end bg-white text-black font-bold rounded-lg px-6 py-2 uppercase text-sm " > Actualizar</button>
                    </div>
                    

                </form>
            </div>
        </div>
    </div>

    <divc class="señal">
        <div class="señal_titulo">
            <h1>Lista de lo Usuarios</h1>
        </div>
        <div class="señal_ico">
            <ion-icon name="arrow-down-outline"></ion-icon>
        </div>
    </divc>


    <!--TABLA-->
    <div class="flex w-full min-h-screen justify-center items-center">
        <div class=" flex bg-gray-800 w-full max-w-6xl p-8  rounded-xl shadow-lg text-white justify-center">
            
            <table class="bg-gray-800 text-white shadow-lg w-full ">
                <thead>
                    <tr>
                        <th class="border border-gray-400 px-4 py-2">Usuario</th>
                        <th class="border border-gray-400 px-4 py-2">RazonSocial</th>
                        <th class="border border-gray-400 px-4 py-2">Cargo</th>
                        <th class="border border-gray-400 px-4 py-2">Celular</th>
                        <th class="border border-gray-400 px-4 py-2">Correo</th>
                        <th class="border border-gray-400 px-4 py-2">Mensaje</th>
                        <th class="border border-gray-400 px-4 py-2">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task of usuarios" :key="task" >
                        <td class="border border-gray-400 px-4 py-2">{{task.usuario}}</td>
                        <td class="border border-gray-400 px-4 py-2">{{task.razonSocial}}</td>
                        <td class="border border-gray-400 px-4 py-2">{{task.cargo}}</td>
                        <td class="border border-gray-400 px-4 py-2">{{task.celular}}</td>
                        <td class="border border-gray-400 px-4 py-2">{{task.correo}}</td>
                        <td class="border border-gray-400 px-4 py-2">{{task.mensaje}}</td>
                        <td class="flex flex-row justify-around pt-2 border border-gray-400">
                            <button @click="eliminarUsuario(task._id)" ><ion-icon name="trash-outline" class=" text-2xl text-red-500"></ion-icon></button>
                            <button @click="actualizarUsuario(task._id)"><ion-icon name="create-outline" class=" text-2xl text-green-500"></ion-icon></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
<script>

    class usuario {
        constructor(usuario,razonSocial,cargo,celular,correo,mensaje){
            this.usuario = usuario
            this.razonSocial = razonSocial
            this.cargo = cargo
            this.celular = celular
            this.correo = correo
            this.mensaje = mensaje
        }
    }

    export default {
        data(){
            return{
                task: new usuario(),
                usuarios : [],
                edit: false,
                usuariEdit : ''
            }
        },

        created(){
            this.listarUsuarios();
        }
        ,
        methods:{
            
            listarUsuarios(){
                fetch('/api/formulario')
                .then(res => res.json())
                .then(data => {
                    this.usuarios = data;
                    console.log(this.usuarios)
                })
            },
            enviarUsuario(){
                if(this.edit === false){
                    fetch('/api/formulario',{
                        method : 'POST',
                        body : JSON.stringify(this.task),
                        headers : {
                            'Accept': 'application/json',
                            'Content-type':'application/json'
                        }   
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.listarUsuarios();
                    })
                }else{
                    fetch('/api/formulario/'+ this.usuariEdit,{
                        method : 'PUT',
                        body : JSON.stringify(this.task),
                        headers : {
                            'Accept': 'application/json',
                            'Content-type':'application/json'
                        }   
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.listarUsuarios();
                        this.edit = false
                    })
                }

                this.task = new usuario()
            },

            eliminarUsuario(id){
                fetch('/api/formulario/'+id ,{
                    method : 'DELETE',
                    headers : {
                        'Accept': 'application/json',
                        'Content-type':'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.listarUsuarios();
                })

                
            },
            actualizarUsuario(id){
                fetch('/api/formulario/' + id)
                .then(res => res.json())
                .then(data => {
                    this.task = new usuario(data.usuario,data.razonSocial,data.cargo,data.celular,data.correo,data.mensaje)
                    this.usuariEdit = data._id
                    this.edit = true
                })
            }

            
        }
    }
</script>
