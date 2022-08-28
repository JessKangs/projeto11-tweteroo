import express from 'express';
import cors from 'cors';

const server = express()
server.use(express.json());
server.use(cors());


// CRIAR PERFIS
const profiles = [
    {
            username: "bobesponja",
            avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },
    {
        username: "DongtotheGeutotheRami",
        avatar: "https://cdn.kbizoom.com/media/2022/07/11071915/extraordinary-attorney-woo-11072022-2-1.webp"
    },
    {
        username: "ILoveJovemK",
        avatar: "https://kenh14cdn.com/203336854389633024/2022/7/26/photo-1-16588432414582027364507.jpg"
    },
];

server.post('/signup', (req, res) => {
    profiles.push(req.body)
    res.send("OK")
});

// CRIAR PUBLICAÇÕES
const sitePosts = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
];

server.post('/tweets', (req, res) => {
    sitePosts.push(req.body)
    res.send("OK")
})

// PEGAR TWEETS

    
server.get("/tweets", (req, res) => {
    const tweets = [];

    sitePosts.map((post) =>
    profiles.map((profile) => profile.username === post.username ? tweets.push({username:post.username,avatar: profile.avatar,tweet: post.tweet}) : '')
    )

    res.send(tweets)
})


server.listen(5000)