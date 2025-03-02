import { PrismaClient } from "@prisma/client"
import express from "express"

const app = express()

const client = new PrismaClient()

app.get("/", async (req,res)=>{
    const users = await client.user.findMany()

    res.json({
        status:"supper dupper success1",
        users
    })
})

app .post("/",async (req,res)=>{

    await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })

    res.send("user created sucessfully")

})

app.listen(3000)
