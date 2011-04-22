function(resp) {
  var receipts = resp.rows.map(function(r) {
    return {
      store: r.value.store,
      damage: r.value.damage,
      date: r.value.date
    };
  });
  
  return { "receipts" : receipts };
}