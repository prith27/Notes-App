const fs=require('fs')
const chalk=require('chalk')
const notes=function(){
    return "Your Notes...";
}
const addnotes=function(title,body){
   const notes=loadnotes()
   const duplicaten=notes.filter((n) => {
       return n.title===title
   })
   if(duplicaten.length===0){
    notes.push({
        title:title,
        body:body
    })
    savenotes(notes)
    console.log("New Note added!")
   }
   else{
       console.log("Note not added")
   }
   
}
const loadnotes=function(){
    try{
        const db=fs.readFileSync('notes.json')
        const data=db.toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
    
}
const savenotes= function(notes){
    data=JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}
const removenote=function(title){
    const notes=loadnotes()
    const notestokeep=notes.filter((n) => {
        return n.title !== title
    })
    if(notes.length>notestokeep.length)
    {  
        var m="Note Removed!"
        console.log(chalk.bgGreen(m))
        savenotes(notestokeep)
    }
    else{
        var m1="No note removed!"
        
        console.log(chalk.bgRed(m1))
    }
}
const listnote= function(){
    console.log(chalk.bgYellow("Your Notes:\n"))
   const notes= loadnotes()
   notes.forEach( (note) => {
       console.log("Title:"+note.title)

   })
}
const readnote= (title) => {
    const notes=loadnotes()
    const n=notes.filter((note) => {return note.title===title})
    debugger
    if(n){
        n.forEach((note) => {
            console.log(chalk.italic.bgGreen(note.title)+"\n"+note.body)
        })
        
    }
    else{
        console.log(chalk.red.inverse('Note not found!!'))
    }
}
module.exports={
    getnotes:notes,
    addnotes:addnotes,
    removenote:removenote,
    listnote:listnote,
    readnote:readnote
}