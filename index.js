// expressオブジェクトの作成
const express = require('express')
// Expressのアプリケーション本体となるオブジェクトの作成
const app = express()

// ルーティングの設定
app.get('/', (req, res) => {
    res.send('Welcome to Express!')
})

// 待ち受けの開始
app.listen(3000, () => {
    console.log('Start server port:3000')
})
