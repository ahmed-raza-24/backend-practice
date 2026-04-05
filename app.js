const express = require("express")

const app = express()
const noteModel = require("./models/note.model")

app.use(express.json())

//post /api/notes

app.post('/api/notes', async (req, res)=>{
    const {title, description} = req.body

    const notes = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note created successfully",
        notes

    })
})

app.get("/api/notes", async (req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})

module.exports = app


