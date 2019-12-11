const db = require("./db");
const Advertisement = require("./ads/model");

db.sync()
  .then(() =>
    Promise.all([
      Advertisement.create({
        title: "Thriller",
        description:
          "Thriller is one of the definitive albums of the 1980s. It has gone 29 times Platinum (according to RIAA). The album won a record-breaking eight Grammy Awards in 1984, including Album of the Year.",
        url:
          "https://www.amazon.com/Thriller-Michael-Jackson/dp/B01B2M9H76/ref=lp_14772275011_1_2?s=music&ie=UTF8&qid=1576060726&sr=1-2",
        price: 28.0,
        email: "vynil@gmail.com",
        phonenumber: 666666666
      }),
      Advertisement.create({
        title: "Merry Christmas",
        description:
          "Remastered LP reissue of Bing Crosby's classic, Merry Christmas, album. Including the biggest selling single ever, White Christmas, along with other all-time seasonal favorites.",
        url:
          "https://www.amazon.com/Merry-Christmas-Bing-Crosby/dp/B00MP2JIVI/ref=lp_14772275011_1_6?s=music&ie=UTF8&qid=1576060726&sr=1-6",
        price: 28.0,
        email: "vynil@gmail.com",
        phonenumber: 666666666
      }),
      Advertisement.create({
        title: "The Dark Side",
        description: "Pink Floyd- The Dark Side Of the Moon LP. Side one1.",
        url:
          "https://www.amazon.com/Dark-Side-Moon-Pink-Floyd/dp/B01LTHN0DG/ref=lp_14772275011_1_8?s=music&ie=UTF8&qid=1576060726&sr=1-8",
        price: 28.0,
        email: "vynil@gmail.com",
        phonenumber: 666666666
      })
    ])
  )
  .then(() => console.log("database vinyl"))
  .catch(console.error);
