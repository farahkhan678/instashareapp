import './index.css'

const NotFound = props => {
  const {history} = props
  const onClickRetry = () => {
    history.push('/')
  }

  return (
    <div className="not-found-container">
      <img
        className="not-found-img"
        src="https://i0.wp.com/www.silocreativo.com/en/wp-content/uploads/2017/11/ejemplo-pagina-error-404-creativo.png?w=666&quality=100&strip=all&ssl=1"
        alt="page not found"
      />
      <h1 className="no-found-heading">PAGE NOT FOUND</h1>
      <p>we are sorry, the page you requested could not be found</p>
      <p>Please go back to homepage</p>
      <button type="button" className="home-page-btn" onClick={onClickRetry}>
        Home Page
      </button>
    </div>
  )
}

export default NotFound
