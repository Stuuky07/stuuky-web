import styles from './page.module.css'
import Input from '../../components/Input/Input'

export default function englishPage(){
    return(
        <div className={styles.main}>
            <h1>Hello World</h1>
            <Input type='text' placeholder='teste'/>
            <Input type='button'/>
        </div>
    )
}