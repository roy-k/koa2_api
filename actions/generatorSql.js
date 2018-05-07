// 豆瓣 批量插入
const doubanNowPlaying = function (data) {
    const values = data.map(({
        title,
        rating,
        region,
        duration,
        release,
        director,
        actors,
        votecount,
        poster,
        info_url,
        ticket_url
    }) => (`('${title || '?'}','${rating || '?'}','${region || '?'}','${duration || '?'}','${release || '?'}','${director || '?'}','${actors || '?'}','${votecount || '?'}','${poster || '?'}','${info_url || '?'}','${ticket_url || '?'}')`)).join(',')

    const res =  `insert into nowplaying ( \`title\`, \`rating\`, \`region\`, \`duration\`, \`release\`, \`director\`, \`actors\`, \`votecount\`, \`poster\`, \`info_url\`, \`ticket_url\`) values ${values}`
    return res
}

module.exports = {
    doubanNowPlaying
}