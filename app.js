const chalk=require('chalk')
const yargs= require('yargs')
const notes = require('./notes.js')
const note=require('./notes.js')
yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        note.addnotes(argv.title,argv.body)
    }
})

yargs.command({
    command:"remove",
    describe:'remove a note',
    builder:{
        title:{
            describe:"Title of note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removenote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Listing',
    handler(){
       notes.listnote()
    }
})

yargs.command({
    command:'read',
    describe:'reading',
    builder:{
        title:{
            describe:"Title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readnote(argv.title)
    }
})
.argv

