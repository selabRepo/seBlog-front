import Layout from "../components/Layout";
import Link from 'next/link'
const post = (props) => {
    return (
        <Layout>
            <h2>123 : {props.url.query.title}</h2>
        </Layout>
    )
    
}

export default post