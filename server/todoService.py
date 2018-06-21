from flask import Flask, jsonify, url_for, request
from flask_api import status
from uuid import uuid4
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

notes = {1: {'id': 1, 'title': 'I', 'detail': 'My first note', 'done': False},
         2: {'id': 2, 'title': 'II', 'detail': 'My second note', 'done': False}}

@app.route("/", methods=['GET', 'POST'])
def notes_list():
    """
    List or create notes.
    """
    if request.method == 'POST':
        idx = 1
        if notes :
            idx = max(notes.keys()) + 1
        jsonObj = request.get_json()
        note = {
            'id': idx,
            'title': str(jsonObj.get('title', '')),
            'detail': str(jsonObj.get('detail', '')),
            'done': False
        }
        notes[idx] = note
        return jsonify({'todo': note}), status.HTTP_201_CREATED
    else:
        # request.method == 'GET'
        foundNotes = [notes[idx] for idx in sorted(notes.keys())]
        return jsonify({'todos': foundNotes}), status.HTTP_200_OK


@app.route("/<int:key>/", methods=['GET', 'PUT', 'DELETE'])
def notes_detail(key):
    """
    Retrieve, update or delete note instances.
    """
    if key not in notes:
        return jsonify({'Error': 'Item does not exist.'}), status.HTTP_204_NO_CONTENT
    found = notes[key]

    if request.method == 'PUT':
        jsonObj = request.get_json()
        found['title'] = str(jsonObj.get('title', found['title']))
        found['detail'] = str(jsonObj.get('detail', found['detail']))
        found['done'] = str(jsonObj.get('done', found['done']))
        return jsonify({'todo': found }), status.HTTP_202_ACCEPTED

    elif request.method == 'DELETE':
        notes.pop(key, None)
        return '', status.HTTP_204_NO_CONTENT

    elif request.method == 'GET':    
        return jsonify({'todo': found }), status.HTTP_302_FOUND


if __name__ == "__main__":
    app.run(debug=True)