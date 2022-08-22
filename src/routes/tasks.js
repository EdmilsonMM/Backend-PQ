const express = require("express");
const router = express.Router();

const tasks = require("../models/tasks");

router.get("/", async (req,res)=>{
  const lista =  await tasks.find()
  res.json(lista);
})

router.get("/:id", async (req,res)=>{
  const usuario =  await tasks.findById(req.params.id);
  res.json(usuario);
})

router.post("/", async (req,res)=>{
    
  const registro = new tasks(req.body);
  await registro.save()

  res.json({
    status:'Usuario Guardado'
  })
})

router.put("/:id", async(req,res)=>{
  await tasks.findByIdAndUpdate(req.params.id,req.body)
  res.json({
    status:"Usuario Actualizado"
  })
})

router.delete("/:id", async (req,res)=>{
   await tasks.findByIdAndRemove(req.params.id)
  res.json({
    status : "Usuario eliminado"
  })  
})

module.exports = router;