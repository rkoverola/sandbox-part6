import { connect } from "react-redux"

const Notification = (props) => {
  const notification = props.notification
  console.log('Got notification', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      { notification.message }
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStatetoProps)(Notification)
export default ConnectedNotification