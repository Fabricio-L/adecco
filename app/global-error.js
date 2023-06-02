'use client'
import PropTypes from 'prop-types'

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}

GlobalError.propTypes = {
  error: PropTypes.object,
  reset: PropTypes.func,
}
