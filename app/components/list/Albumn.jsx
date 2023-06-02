import PropTypes from 'prop-types'
import Link from 'next/link'
import { IconArrowUpRight } from '@tabler/icons-react'
import styles from './Albumn.module.css'

const Albumn = ({ albumn }) => {
  const { id, title } = albumn
  return (
    <Link href={`/albumns/${id}`} className={styles.albumn}>
      {id}: {title}
      <IconArrowUpRight size={20} color="white" />
    </Link>
  )
}

Albumn.propTypes = {
  albumn: PropTypes.object,
}

export default Albumn
