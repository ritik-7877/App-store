import './index.css'

const TabItem = props => {
  const {onChangeTabId, tabDetails, isActive} = props
  const {tabId, displayText} = tabDetails

  const changeId = () => {
    onChangeTabId(tabId)
  }

  const activeTabBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="each-button-container" key={tabId}>
      <button
        onClick={changeId}
        type="button"
        className={`tab-button ${activeTabBtn}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
