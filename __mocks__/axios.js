let currentId = 2;

module.exports = {
  get: url => {
    return Promise.resolve({
      data: [
        {
          id: 2,
          title: "Another test meetup",
          details: "Yet another test meetup. Hope it works too.",
          creator: 1,
          location: "Some venue somewhere",
          happening_on: "2019-02-27",
          created_on: "2019-02-20",
          tags: "new, test",
          image: "https://ipsum-media.netlify.com/img/05.jpg"
        },
        {
          id: 3,
          title: "Yet another test meetup",
          details: "Yet another test meetup. Hope it works too.",
          creator: 1,
          location: "Some venue somewhere",
          happening_on: "2019-02-28",
          created_on: "2019-02-20",
          tags: "new, test",
          image: "https://ipsum-media.netlify.com/img/06.jpg"
        },
        {
          id: 4,
          title: "Small scale farming: Value chain",
          details:
            "Abstract/Descrincreasingly strict product standards, and the farmers’ aversion to risk.",
          creator: 1,
          location: "Kisumu-Kenya",
          happening_on: "2019-03-29",
          created_on: "2019-03-23",
          tags: "Farming, small scale, market",
          image: "/home/richard/Desktop/cat.jpg"
        }
      ]
    });
  },
  post: url => {
    return Promise.resolve({
      data: {
        task: {
          name: currentId,
          id: currentId++
        }
      }
    });
  }
};
