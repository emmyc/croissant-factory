import PropTypes from "prop-types"
import React from "react"
import "../styles/defaults.scss"

const TagComponent = ({ tag }) => (
  <div className="tag">
    <div className="tag-text">
      <p>{tag}</p>
    </div>
  </div>
)

TagComponent.propTypes = {
  tag: PropTypes.string,
}

TagComponent.defaultProps = {
  tag: ``,
}

export default TagComponent
