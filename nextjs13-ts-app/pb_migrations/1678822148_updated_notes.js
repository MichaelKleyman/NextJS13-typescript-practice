migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mxesqv6ewmzw0e8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q1pqrzcf",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mxesqv6ewmzw0e8")

  // remove
  collection.schema.removeField("q1pqrzcf")

  return dao.saveCollection(collection)
})
