import Layout from '../components/Layout';
import PostLink from '../components/PostLink'
import * as React from 'react'
import ImageSlider from "../components/ImageSlider/ImageSlider";

class Index extends React.Component {
    
    static async getInitialProps(){
        const data = [1,2,3,4,5,6,7,8,9,10].map(data => {return {id: data, name: data}})
        
        return {
            show: data
        }
    }

    render(){
        const { show } = this.props
        const showList = show.map((show) => {
            return <PostLink key={show.id} id={show.id} title={show.name} />
        })
        return (
            <>
                <Layout>
                <ImageSlider/>
                <div>
                    hello world
                </div>
                <ul>
                    {showList}
                    <PostLink id={"abc"} title={"title"}/>
                </ul>
                </Layout>
            </>
        )
    }
}

export default Index