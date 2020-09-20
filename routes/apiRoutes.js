// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const notesJSON = require("../db/db.json");
const fs = require('fs');
const path = require("path");

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
        fs.readFileSync("./db/db.json", "utf8");
        return res.json(notesJSON);
    });
        // return res.json(notesJSON);

    //API POST Request

    app.post("/api/notes", function(req, res) {
        //Should receive a new note to save on the request body,
        //add it to the db.json file, and then return the new note to the client.
        let newNote = req.body;
        let noteID = (notesJSON.length).toString();
        newNote.id = noteID;
        notesJSON.push(newNote);
        return res.json(newNote)
        // res.json(notesJSON);
    });

    //API DELETE Request

    app.delete("/api/notes/:id", function(req, res) {
        //Should receive a query parameter containing the id of a note to delete.
        let id = req.params.id.toString();
        for (i=0; i < notesJSON.length; i++) {
            if (notesJSON[i].id == id) {
                // responds with deleted note
                res.send(notesJSON[i]);
                // removes deleted note on click
                notesJSON.splice(i, 1);
            }
        }
    });
};
