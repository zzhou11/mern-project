function clean(name) {
  trimmed = name.trim()
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
}

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    
    newIngredientsSet = new Set()
    newIngredientDocs = []
    await db.createCollection("ingredients");
    await db.collection("recipes").find({}).forEach(
      function(doc) { 
        ingredients = doc.description.split(",")
        ingredients.forEach(ingredient => newIngredientsSet.add(ingredient))
      })
    newIngredientsSet.forEach (function(name) {
      newIngredientDocs.push({"name": clean(name)})
    })
    await db.collection("ingredients").insertMany(newIngredientDocs)
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    return db.collection('ingredients').drop();
  }
};
