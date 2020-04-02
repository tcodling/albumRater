
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, rating: 8, comment: 'This album is somehow hardwired to my body, whenever I hear it my body just starts moving!!', album_id: '8'},
        {id: 2, rating: 7, comment: 'I love the way each song on this album blends into the next!!', album_id: '9'},
        {id: 3, rating: 10, comment: 'This masterpiece was in the billboard top 100 albums every week for 17 and a half years!!', album_id: '7'},
        {id: 4, rating: 3, comment: 'OK boomer - this album is so over rated.', album_id: '7'},
        {id: 5, rating: 8, comment: 'Every time I hear Great Gig in the Sky it just makes my soul feel like it\'s flying.', album_id: '7'},
        {id: 6, rating: 9, comment: 'Gotta love a little bit of the Dogg', album_id: '6'},
        {id: 7, rating: 7, comment: 'These songs are gorgeously produced and this album is insanely listenable!', album_id: '7'},
        {id: 8, rating: 8, comment: 'Oh yes ... there is still hope for music. Fresh and abrasive, will become a masterpiece in time... Dope cover art!', album_id: '5'},
        {id: 9, rating: 8, comment: 'One of the most interesting and exciting house albums of all time.', album_id: '7'},
        {id: 10, rating: 7, comment: 'Some groovy as tunes on this one', album_id: '4'},
        {id: 11, rating: 7, comment: 'The magical mystery tour is coming to take ME away! :P', album_id: '4'},
        {id: 12, rating: 10, comment: 'Cried so many times to this album <3', album_id: '1'}
      ]);
    });
};
