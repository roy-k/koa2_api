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
    }) => (`('${title || '?'}','${rating || '?'}','${region || '?'}','${duration || '?'}','${release || '?'}','${director || '?'}','${actors || '?'}','${votecount || '?'}','${poster || '?'}','${info_url || '?'}','${ticket_url || '?'}', now(), now())`)).join(',')

    const res =  `insert into nowplaying ( \`title\`, \`rating\`, \`region\`, \`duration\`, \`release\`, \`director\`, \`actors\`, \`votecount\`, \`poster\`, \`info_url\`, \`ticket_url\`, \`create_time\`, \`modified_time\`) values ${values}`
    console.log('====================================');
    console.log(res.substr(-1, 100));
    console.log('====================================');
    return res
}

module.exports = {
    doubanNowPlaying
}