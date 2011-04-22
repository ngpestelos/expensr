function(keys, values) {
  // TODO Scaling
  var acc = 0;
  for (var i = 0; i < values.length; i++) {
    acc += values[i];
  }

  return acc;
}