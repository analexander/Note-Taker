// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const notesJSON = require("../db/db.json");
const fs = require('fs');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Request
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

    app.get("/api/notes", function(req, res) {
        //Should read the db.json file and return all saved notes as JSON.
        res.json(notesJSON);
    });

    //API POST Request

    app.post("/api/notes", function(req, res) {
        //Should receive a new note to save on the request body,
        //add it to the db.json file, and then return the new note to the client.
        res.json(notesJSON);
    });

    app.delete("/api/notes/:id", function(req, res) {
        //Should receive a query parameter containing the id of a note to delete.
        //This means you'll need to find a way to give each note a unique id when it's saved.
        //In order to delete a note, you'll need to read all notes from the db.json file,
        //remove the note with the given id property, and then rewrite the notes to the db.json file.

    });

};
