function(doc) {
  if (doc.type == "receipt") {
    emit(doc.created, doc);
  }
}