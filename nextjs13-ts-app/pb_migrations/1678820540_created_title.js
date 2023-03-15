migrate((db) => {
  const collection = new Collection({
    "id": "mxesqv6ewmzw0e8",
    "created": "2023-03-14 19:02:20.342Z",
    "updated": "2023-03-14 19:02:20.342Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tmmv4qo6",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mxesqv6ewmzw0e8");

  return dao.deleteCollection(collection);
})
