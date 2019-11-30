import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Link as RouterLink } from 'react-router-dom'

function ListItemLink (props) {
  const { icon, primary, to, alt } = props

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => (
      <RouterLink to={to} {...itemProps} innerRef={ref} />
    )),
    [to]
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemIcon alt={alt} aria-label={alt}>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  to: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired
}

export default ListItemLink
