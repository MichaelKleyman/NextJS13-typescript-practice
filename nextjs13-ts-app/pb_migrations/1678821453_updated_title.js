migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mxesqv6ewmzw0e8")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mxesqv6ewmzw0e8")

  collection.name = "title"

  return dao.saveCollection(collection)
})
