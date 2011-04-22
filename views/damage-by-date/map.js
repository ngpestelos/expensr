function(doc) {
  if (doc.type == "receipt") {
    emit(doc.date, parseFloat(doc.damage));
  }
}