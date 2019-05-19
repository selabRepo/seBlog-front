import React from 'react'
import Layout from '../components/Layout';

const search = ({url}) => {
    return (
        <Layout>
            <div>
                당신이 검색한 키워드는 "{url.query.keyword}" 입니다.
            </div>
        </Layout>
    )
}

export default search