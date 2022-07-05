import { setFilter } from "../reducers/filterReducer"
import { connect } from "react-redux"

const Filter = (props) => {

  const handleChange = (event) => {
    const currentFilter = event.target.value
    console.log("Setting current filter", currentFilter)
    props.setFilter(currentFilter)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter,
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter