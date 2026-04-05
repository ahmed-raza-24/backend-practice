const express = require("express")

const app = express()
const noteModel = require("./models/note.model")

app.use(express.json())

//post /api/notes

app.post('/api/notes', async (req, res)=>{
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note created successfully",
        note

    })
})



module.exports = app


