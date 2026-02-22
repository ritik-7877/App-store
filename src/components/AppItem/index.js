import './index.css'

const AppItem = props => {
  const {appDetails} = props
  return (
    <li className="app-item">
      <img src={appDetails.imageUrl} alt={appDetails.appName} className="img" />
      <p>{appDetails.appName}</p>
    </li>
  )
}

export default AppItem
