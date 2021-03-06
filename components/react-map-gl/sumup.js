import React from 'react'
import PropTypes from 'prop-types'

import ConfirmedChart from '../confirmed-chart'

const RegionSumup = ({nom, casConfirmes, history}) => (
  <div className='sumup-container'>
    <div className='title'>{nom}</div>
    <div>{casConfirmes} cas confirmés</div>

    <ConfirmedChart data={JSON.parse(history)} height={240} />

    <style jsx>{`
        .sumup-container {
          font-size: larger;
        }

        .title {
          font-weight: bold;
        }
      `}</style>
  </div>
)

RegionSumup.propTypes = {
  nom: PropTypes.string.isRequired,
  casConfirmes: PropTypes.number.isRequired,
  history: PropTypes.array.isRequired
}

export default RegionSumup
