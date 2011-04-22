function(doc) {
  if (doc.type == "receipt")
    emit(doc.store, parseFloat(doc.damage));
}