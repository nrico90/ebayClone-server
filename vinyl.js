const db = require("./db");
const Advertisement = require("./ads/model");

db.sync()
  .then(() =>
    Promise.all([
      Advertisement.create({
        title: "Thriller",
        description:
          "Thriller is one of the definitive albums of the 1980s. It has gone 29 times Platinum (according to RIAA). The album won a record-breaking eight Grammy Awards in 1984, including Album of the Year.",
        url: "https://images-na.ssl-images-amazon.com/images/I/81wfye0hsDL._SX522_.jpg"
          
          price: 28.0,
        email: "vynil@gmail.com",
        phonenumber: 666666666
      }),
      Advertisement.create({
        title: "Merry Christmas",
        description:
          "Remastered LP reissue of Bing Crosby's classic, Merry Christmas, album. Including the biggest selling single ever, White Christmas, along with other all-time seasonal favorites.",
        url:
          "https://images-na.ssl-images-amazon.com/images/I/71b702BjRuL._SX522_.jpg",
        price: 28.0,
        email: "vynil@gmail.com",
        phonenumber: 666666666
      }),
      Advertisement.create({
        title: "The Dark Side of the Moon",
        description: "Pink Floyd- The Dark Side Of the Moon LP. Side one1.",
        url:
          "https://images-na.ssl-images-amazon.com/images/I/61hw9WloObL._SX522_.jpg",
        price: 28.0,
        email: "vynil@gmail.com",
        phonenumber: 666666666
      })
    ])
  )
  .then(() => console.log("database vinyl"))
  .catch(console.error);
