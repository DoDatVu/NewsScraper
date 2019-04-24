var mongoose = require ("mongoose");

var Schema = mongoose.Schema;

varNoteSchema = new Schema({
title:String,
body:String

});

var Note = mongoose.model("Note", varNoteSchema);

module.exports = Note;