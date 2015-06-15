if Bikes.find().count() == 0
 [
    {name:'Hero Honda Splendor', price: '40000', rating: '4.3'}
    {name:'Hero Honda Pro', price: '20000', rating: '2.3'}
   ].forEach (data) -> Bikes.insert(data)
