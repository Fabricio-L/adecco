import PropTypes from 'prop-types'
import fetchPhotos from '@/services/photos/fetchPhotos'
import Photo from '@/app/components/photo/Photo'
import styles from './page.module.css'

export default async function Albumn({ params }) {
  const { id } = params
  const photos = await fetchPhotos(id)

  return (
    <main className={styles.main}>
      {photos?.map(photo => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </main>
  )
}

Photo.propTypes = {
  params: PropTypes.object,
}
