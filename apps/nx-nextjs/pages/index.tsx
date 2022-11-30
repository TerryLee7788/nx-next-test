import styles from './index.module.scss'

export function Index(props: AboutProps) {
    const { name } = props
    return (
        <div className={styles.page}>
            <div className="wrapper">
                <div className="container">
                    <h2>hello~ {name}</h2>
                    <h3>test deploy</h3>
                </div>
            </div>
        </div>
    )
}

export interface AboutProps {
    name: string
}

export const getStaticProps: AboutProps = async context => {
    return {
        props: {
            name: 'nx with nextJs'
        }
    }
}

export default Index
