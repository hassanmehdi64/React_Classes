import man from './man.avif'

function Serv(Props) {
  return (
    <div>


      <div className="container">
        <div className="box">
          <div className="image">
            <img src={man} />
            {/* <img src={img} /> */}
            {/* <img src='vite.svg' /> */}

          </div>

          <div className="name_job">{Props.title}</div>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
          <div className="btns">

            <button onClick={Props.func}>{Props.btnText}</button>
            <button>Subscribe</button>
          </div>
          <h3>{Props.array[0]}</h3>
          <h3>{Props.array[1]}</h3>
          <h3>{Props.array[2]}</h3>


          <h1>Name: {Props.object.name}</h1>
          <h1>Age: {Props.object.age}</h1>


          <h1>func: {Props.func}</h1>
        </div>

      </div>

    </div>
  )
}

export default Serv