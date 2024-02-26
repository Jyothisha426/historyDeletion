import './index.css'

const HistoryItem = props => {
  const {details, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <div className="first">
        <p className="timeAccessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div>
        <button className="delete-btn" type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            type="button"
            onClick={onDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
