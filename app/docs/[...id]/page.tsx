import styles from './style.module.css'

const IDPage = ( { params } ) => {
    /** Note CSS module syntax with interpolation for multiple classes */
    return <div className={`${styles.title} ${styles.uppercase}`}>IDPage is under dynamic route of ./docs . The route is {params.id}.</div>
}

export default IDPage