const data = [
    {
        title: '后来的我们',
        poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.webp',
        rating: '5.9',
        info_url: 'https://movie.douban.com/subject/26683723/?from=playing_poster',
        ticket_url: 'https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F343720%3F_v_%3Dyes%26merCode%3D1000011',
    },
    {
        title: '巴霍巴利王2：终结',
        poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.webp',
        rating: '7.0',
        info_url: 'https://movie.douban.com/subject/26420932/?from=playing_poster',
        ticket_url: 'https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F342791%3F_v_%3Dyes%26merCode%3D1000011',
    },
];

const sql = data.map(({poster, title, rating, info_url, ticket_url}) => (`('${poster}','${title}','${rating}','${info_url}','${ticket_url}', now(), now())`)).join(',')

module.exports = sql