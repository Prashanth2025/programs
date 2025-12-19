MongoDB Commands in PowerShell

| **Command**                             | **Description**                                |
| --------------------------------------- | ---------------------------------------------- |
| `mongod --version`                      | Shows MongoDB server version                   |
| `mongosh --version`                     | Shows MongoDB Shell version                    |
| `mongosh`                               | Opens the MongoDB shell environment            |
| `show dbs`                              | Displays all available databases               |
| `use databaseName`                      | Creates or switches to a database              |
| `show collections`                      | Shows collections inside the selected database |
| `db.createCollection("collectionName")` | Creates a new collection                       |
| `db.collectionName.drop()`              | Deletes a specific collection                  |
| `db.dropDatabase()`                     | Deletes the current database                   |
| `cls`                                   | Clears the PowerShell terminal                 |

CRUD Operations in MongoDB

| **Operation**       | **Command**                                                            | **Description**                 |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------- |
| **Create (Insert)** | `db.collectionName.insertOne({ })`                                     | Inserts a single document       |
|                     | `db.collectionName.insertMany([{ }, { }])`                             | Inserts multiple documents      |
| **Read (Find)**     | `db.collectionName.findOne({ key: value })`                            | Finds one matching document     |
|                     | `db.collectionName.find({ key: value })`                               | Finds all matching documents    |
| **Update**          | `db.collectionName.updateOne({ filter }, { $set: { field: value } })`  | Updates first matching document |
|                     | `db.collectionName.updateMany({ filter }, { $set: { field: value } })` | Updates all matching documents  |
| **Delete**          | `db.collectionName.deleteOne({ filter })`                              | Deletes first matching document |
|                     | `db.collectionName.deleteMany({ filter })`                             | Deletes all matching documents  |

Other Operations in MongoDB

| **Operation**        | **Command** |                                                                               **Description**                          
| -------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Replace**          | `db.collectionName.replaceOne({ filter }, { newDocument })`                  | Replaces the entire existing document with a new one                   |
| **Find and Delete**  | `db.collectionName.findOneAndDelete({ filter })`                             | Finds a matching document and deletes it                               |
| **Find and Update**  | `db.collectionName.findOneAndUpdate({ filter }, { $set: { field: value } })` | Finds a document and updates it, returning the old document by default |
| **Find and Replace** | `db.collectionName.findOneAndReplace({ filter }, { newDocument })`           | Finds a document and replaces it with a new one                        |
