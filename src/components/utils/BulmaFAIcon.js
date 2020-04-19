import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/**
 * FontAwesomeIcon component display-style(block-inline) conflict
 * with Bulma's `icon` class which is based on flex.
 *
 * Aligning it vertically -0.125em fixed it for now
 */
export default prop => (
  <span style={{ verticalAlign: '-0.125em' }}>
    <FontAwesomeIcon {...prop} />
  </span>
)
