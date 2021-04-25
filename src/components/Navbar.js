
const Navbar = () => {
    return (

        <div className="navbar-top">
            <div>
                <span className="material-icons site-logo">pets</span>
            </div>
            <div className="nav-link">
                <span className="material-icons nav-icon">home</span>
                <span>Home</span>
            </div>
            <div className="nav-link">
                <span className="material-icons nav-icon">tag</span>
                <span>Explore</span>
            </div>
            <div className="nav-link">
                <span className="material-icons nav-icon">notifications</span>
                <span>Notifications</span>
            </div>
            <div className="nav-link">
                <span className="material-icons nav-icon">mail_outline</span>
                <span>Messages</span>
            </div>
            <div className="nav-link">
                <span className="material-icons nav-icon">list_alt</span>
                <span>Lists</span>
            </div>
            <div className="nav-link">
                <span className="material-icons nav-icon">speaker_notes</span>
                <span>Topics</span>
            </div>
            <div className="nav-link">
                <span className="material-icons nav-icon">person_outline</span>
                <span>Profile</span>
            </div>
            <div className="nav-link">
                <span className="material-icons nav-icon">more_horiz</span>
                <span>More</span>
            </div>
            <button className="btn-light">Tweet</button>
        </div>

    )



}

export default Navbar