import styles from './style.module.css'

const IDPage = ( { params } ) => {
    return <div className={styles.title}>IDPage is under dynamic route of ./docs . The route is {params.id}.</div>
}

export default IDPage