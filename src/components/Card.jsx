import "../styles/Card.css"

export default function Card({children}){
    return(
        <div className="card">
            <div className="card_title__container">
                {children}
            </div>
        </div>
    )
}