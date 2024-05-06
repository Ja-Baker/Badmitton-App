const db = require('../models');
const Users = db.users;

const Rackets = db.rackets;

const Reviews = db.reviews;

const Transactions = db.transactions;

const RacketsData = [
  {
    model: "Y'all never listen to me",

    condition: 'Old',

    price: 62.52,

    description:
      'Like fire across the galaxy the Clone Wars spread. In league with the wicked Count Dooku, more and more planets slip. Against this threat, upon the Jedi Knights falls the duty to lead the newly formed army of the Republic. And as the heat of war grows, so, to, grows the prowess of one most gifted student of the Force.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },

  {
    model: 'That damn diabetes',

    condition: 'New',

    price: 60.61,

    description: 'Your weapons, you will not need them.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },

  {
    model: "C'mon Naomi",

    condition: 'Used',

    price: 50.49,

    description: 'Luminous beings are we - not this crude matter.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },
];

const ReviewsData = [
  {
    content:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',

    rating: 1,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Truly wonderful, the mind of a child is.',

    rating: 9,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Use your feelings, Obi-Wan, and find him you will.',

    rating: 5,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TransactionsData = [
  {
    transaction_date: new Date('2023-12-17'),

    status: 'Pending',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    transaction_date: new Date('2024-03-10'),

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    transaction_date: new Date('2023-12-27'),

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

// Similar logic for "relation_many"

async function associateRacketWithSeller() {
  const relatedSeller0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Racket0 = await Rackets.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Racket0?.setSeller) {
    await Racket0.setSeller(relatedSeller0);
  }

  const relatedSeller1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Racket1 = await Rackets.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Racket1?.setSeller) {
    await Racket1.setSeller(relatedSeller1);
  }

  const relatedSeller2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Racket2 = await Rackets.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Racket2?.setSeller) {
    await Racket2.setSeller(relatedSeller2);
  }
}

async function associateReviewWithRacket() {
  const relatedRacket0 = await Rackets.findOne({
    offset: Math.floor(Math.random() * (await Rackets.count())),
  });
  const Review0 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Review0?.setRacket) {
    await Review0.setRacket(relatedRacket0);
  }

  const relatedRacket1 = await Rackets.findOne({
    offset: Math.floor(Math.random() * (await Rackets.count())),
  });
  const Review1 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Review1?.setRacket) {
    await Review1.setRacket(relatedRacket1);
  }

  const relatedRacket2 = await Rackets.findOne({
    offset: Math.floor(Math.random() * (await Rackets.count())),
  });
  const Review2 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Review2?.setRacket) {
    await Review2.setRacket(relatedRacket2);
  }
}

async function associateReviewWithAuthor() {
  const relatedAuthor0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Review0 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Review0?.setAuthor) {
    await Review0.setAuthor(relatedAuthor0);
  }

  const relatedAuthor1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Review1 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Review1?.setAuthor) {
    await Review1.setAuthor(relatedAuthor1);
  }

  const relatedAuthor2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Review2 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Review2?.setAuthor) {
    await Review2.setAuthor(relatedAuthor2);
  }
}

async function associateTransactionWithBuyer() {
  const relatedBuyer0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Transaction0 = await Transactions.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Transaction0?.setBuyer) {
    await Transaction0.setBuyer(relatedBuyer0);
  }

  const relatedBuyer1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Transaction1 = await Transactions.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Transaction1?.setBuyer) {
    await Transaction1.setBuyer(relatedBuyer1);
  }

  const relatedBuyer2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Transaction2 = await Transactions.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Transaction2?.setBuyer) {
    await Transaction2.setBuyer(relatedBuyer2);
  }
}

async function associateTransactionWithRacket() {
  const relatedRacket0 = await Rackets.findOne({
    offset: Math.floor(Math.random() * (await Rackets.count())),
  });
  const Transaction0 = await Transactions.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Transaction0?.setRacket) {
    await Transaction0.setRacket(relatedRacket0);
  }

  const relatedRacket1 = await Rackets.findOne({
    offset: Math.floor(Math.random() * (await Rackets.count())),
  });
  const Transaction1 = await Transactions.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Transaction1?.setRacket) {
    await Transaction1.setRacket(relatedRacket1);
  }

  const relatedRacket2 = await Rackets.findOne({
    offset: Math.floor(Math.random() * (await Rackets.count())),
  });
  const Transaction2 = await Transactions.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Transaction2?.setRacket) {
    await Transaction2.setRacket(relatedRacket2);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Rackets.bulkCreate(RacketsData);

    await Reviews.bulkCreate(ReviewsData);

    await Transactions.bulkCreate(TransactionsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateRacketWithSeller(),

      await associateReviewWithRacket(),

      await associateReviewWithAuthor(),

      await associateTransactionWithBuyer(),

      await associateTransactionWithRacket(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rackets', null, {});

    await queryInterface.bulkDelete('reviews', null, {});

    await queryInterface.bulkDelete('transactions', null, {});
  },
};
