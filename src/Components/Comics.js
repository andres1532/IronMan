function Comic(props) {
    return(
        <div className="Comic">
            <img src={props.img} alt="Ironman"/>
            <div className="comic-body">
                <h4>{props.name}</h4>
                <button>Ver más</button>
            </div>
        </div>
    );
}

export default Comic;