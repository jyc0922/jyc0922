const axios = require('axios')

const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json"

axios 
    .get(url)
    .then((result) => {
        if (result.status != 200) {
            throw new Error('Failed to fetch data 요청 실패!')
        }
        if (result.data) {
            return result.data
        }

        throw new Error('No data received 데이터가 없습니다.')
    })
    .then((data) => {
        if (!data.articleList || !data.articleList.size == 0) {
            throw new Error('No articles found 데이터가 없음!')
        }
        return data.articleList
    })
    .then((articles) => {
        return articles.map((article, idx) => {
            return {title: article.title, rank: idx + 1}
        })
    })
    .then((results) => {
        for (let movieInfo of results) {
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`)
        }
    })
    .catch((err) => {
        console.log("<<에러 발생!!>>")
        console.log(err)
    })