import "../styles/card.scss";

export function Card({title, children}){
  return(
    <div className={title}>
      {children}
    </div>
  )
}