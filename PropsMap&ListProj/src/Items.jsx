
function Items() {
  // let items = ["Apple", "Orange", "Banana", "Banaspati", "yello"]
  let items = []

  if (items.length === 0) {
    return <h2>Please make a list I am Empty yet</h2>
    // console.log("");

  }

  return (
    <div>

      <ul className="list-group col-md-6">

        {items.map(items => (

          <li key={items} className="list-group-item">{items}</li>

        ))}


      </ul>

    </div>
  )
}

export default Items