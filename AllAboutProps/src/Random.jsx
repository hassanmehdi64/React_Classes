
function Random() {

  let radnom = Math.random() * 100

  return (
    <div>

      <h3 style={{ background: 'yellow' }}>Ramdom number are  {Math.floor(radnom)}</h3>

    </div>
  )
}

export default Random