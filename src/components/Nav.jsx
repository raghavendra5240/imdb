import "./nav.scss"

const Nav = () => {
    return (
        <div className="nav">
            <div className="container">
                <div className="left">
                    < img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
            alt="" />
                
                <span>HomePage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My list</span>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}

export default Nav
