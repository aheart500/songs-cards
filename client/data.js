const songs = [
  {
    title: "Are you bored yet?",
    uri: "https://www.youtube.com/watch?v=wIgmyE5Juzw",
    image: "https://medias.spotern.com/wanted/w640/45/45009-1554193706.jpg",
  },
  {
    title: "MONDO GROSSO / ラビリンス",
    uri: "https://www.youtube.com/watch?v=_2quiyHfJQw",
    image:
      "https://antville.org/static/sites/videos/images/Labyrinth%20Hikari.jpg",
  },
  {
    title: "Mandy More - Nothing That You Are",
    uri: "https://www.youtube.com/watch?v=Ymd7ZWVUwcM",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvhK7V8m25PdD35g3KnoGm7_Mp1nLsNG_z8w&usqp=CAU",
  },
  {
    title: "Aimer - Kataomoi",
    uri: "https://www.youtube.com/watch?v=zSOJk7ggJts",
    image: "https://shibasubs.files.wordpress.com/2017/03/aimer.jpg?w=700",
  },
  {
    title: "Hokkaido 《北海道之小樽日记》",
    uri: "https://www.youtube.com/watch?v=IHENIg8Se7M",
    image: "https://puui.qpic.cn/qqvideo_ori/0/x0928es5scd_496_280/0",
  },
  {
    title: "Notre Dame de Paris - Belle ( 1998 )",
    uri: "https://www.youtube.com/watch?v=rGe0PdW2ozw",
    image:
      "https://lh3.googleusercontent.com/proxy/aj5UuMqduVXvxn8pV_iwQ4hbv245bwfdUYwZD64CVuOhU2uMQVUfiPA4JW3ajfjMa3I69uD5IDSz8urJXPoVNY8uHNptGCwoMp5_bybe6Yh14r7uNQqX7-4",
  },
  {
    title: "Charles Aznavour - La bohème (Official Lyrics Video)",
    uri: "https://www.youtube.com/watch?v=fVfnEyLOkrM",
    image: "https://i.ytimg.com/vi/fVfnEyLOkrM/maxresdefault.jpg",
  },
  {
    title: "Charles Aznavour - La Bohème (MOTION Remix)",
    uri: "https://www.youtube.com/watch?v=HhtLNvO4tXA",
    image: "https://i.ytimg.com/vi/a06w3SjHSEo/maxresdefault.jpg",
  },
  {
    title: "LP - Tightrope [Official Music Video]",
    uri: "https://www.youtube.com/watch?v=kECZnPrIufo",
    image: "https://i.ytimg.com/vi/kECZnPrIufo/maxresdefault.jpg",
  },
  {
    title: "Dax - I Need A Break (Official Music Video)",
    uri: "https://www.youtube.com/watch?v=gVSo4JssFMo",
    image:
      "https://i0.wp.com/deecap.com.ng/wp-content/uploads/2020/03/Dax-I-Cant-Breathe-video.jpeg?resize=640%2C273&ssl=1",
  },
  {
    title: "Bang Bang (My Baby Shot Me Down)",
    uri: "https://www.youtube.com/watch?v=ETt4oW0dM1s",
    image: "https://i.ytimg.com/vi/ETt4oW0dM1s/maxresdefault.jpg",
  },
  {
    title: "Sia - Alive",
    uri: "https://www.youtube.com/watch?v=t2NgsJrrAyM",
    image: "https://i.ytimg.com/vi/t2NgsJrrAyM/maxresdefault.jpg",
  },
  {
    title: "Staind - Something To Remind You (Live)",
    uri: "https://www.youtube.com/watch?v=D9F244ztjxA",
    image: "https://i.ytimg.com/vi/VK7iHiCmTg8/maxresdefault.jpg",
  },
  {
    title: "Stromae - Tous Les Mêmes (Clip Officiel)",
    uri: "https://www.youtube.com/watch?v=CAMWdvo71ls",
    image: "https://i.ytimg.com/vi/CAMWdvo71ls/maxresdefault.jpg",
  },
  {
    title: "LP - The One That You Love",
    uri: "https://www.youtube.com/watch?v=y0rTljyiq9w",
    image: "https://i.ytimg.com/vi/y0rTljyiq9w/maxresdefault.jpg",
  },
  {
    title: "TIN NEN - Inta Mnih ? | تنّين - انت منيح؟",
    uri: "https://www.youtube.com/watch?v=zNiiqTIHHtA",
    image: "https://i.ytimg.com/vi/zNiiqTIHHtA/mqdefault.jpg",
  },
  {
    title: "Hiba Tawaji - Rouh Ya Amar / هبه طوجي - روح يا قمر ",
    uri: "https://www.youtube.com/watch?v=tmoMsuXZiGY",
    image:
      "https://lh3.googleusercontent.com/proxy/pwyuFP6EBB1B0staZFNmqbfyMd5wFYPPp0Oql7nrWNOSPZNldyo-JvYt-JxALdrMwVdzqV1UI547GO0f-4E6RTQ0P9uRQiC1RGl0wSRxM40bmmEPcjWRuqwf",
  },
  {
    title: "الشيخ امام - البحر بيضحك ليه",
    uri: "https://www.youtube.com/watch?v=xRtVXswJmko",
    image: "https://i.ytimg.com/vi/xRtVXswJmko/sddefault.jpg",
  },
  {
    title: "هبه طوجي لا بدايةولا نهاية",
    uri: "https://www.youtube.com/watch?v=tTcu1SlOn0w",
    image: "https://i1.sndcdn.com/artworks-000024321482-d1b6u8-t500x500.jpg",
  },
  {
    title: "Manten - Kalafina | 中日雙語字幕",
    uri: "https://www.youtube.com/watch?v=9Lm8qOlwRYw",
    image: "https://static.zerochan.net/Emiya.Kiritsugu.full.1006022.jpg",
  },
  {
    title: "Madonna - Papa Don't Preach ",
    uri: "https://www.youtube.com/watch?v=G333Is7VPOg",
    image:
      "https://www.songmeaningsandfacts.com/wp-content/uploads/2019/06/Madonna-Papa-Dont-Preach.png",
  },
];
