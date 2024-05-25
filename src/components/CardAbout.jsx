import "../styles/CardAbout.css"

export default function CardAbout({children}){
    return(
        <div className="card">
            <div className="card_title__container">
                {children}
            </div>
        </div>
    )
}