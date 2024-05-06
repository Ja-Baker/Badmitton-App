const db = require('../models');
const Users = db.users;

const Rackets = db.rackets;

const Reviews = db.reviews;

const Transactions = db.transactions;

const RacketsData = [
  {
    model: 'I tell you what',

    condition: 'New',

    price: 91.41,

    description:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },

  {
    model: 'I tell you what',

    condition: 'Used',

    price: 87.76,

    description: 'Use your feelings, Obi-Wan, and find him you will.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },

  {
    model: "How 'bout them Cowboys",

    condition: 'Used',

    price: 67.76,

    description:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },

  {
    model: 'That damn Bill Stull',

    condition: 'Old',

    price: 22.22,

    description: 'Adventure. Excitement. A Jedi craves not these things.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },
];

const ReviewsData = [
  {
    content: 'That is why you fail.',

    rating: 6,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Reckless he is. Matters are worse.',

    rating: 8,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    rating: 9,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content:
      'Clear your mind must be, if you are to find the villains behind this plot.',

    rating: 6,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TransactionsData = [
  {
    transaction_date: new Date('2023-09-19'),

    status: 'Cancelled',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    transaction_date: new Date('2024-02-19'),

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    transaction_date: new Date('2023-06-13'),

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    transaction_date: new Date('2023-09-12'),

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

  const relatedSeller3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Racket3 = await Rackets.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Racket3?.setSeller) {
    await Racket3.setSeller(relatedSeller3);
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

  const relatedRacket3 = await Rackets.findOne({
    offset: Math.floor(Math.random() * (await Rackets.count())),
  });
  const Review3 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Review3?.setRacket) {
    await Review3.setRacket(relatedRacket3);
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

  const relatedAuthor3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Review3 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Review3?.setAuthor) {
    await Review3.setAuthor(relatedAuthor3);
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

  const relatedBuyer3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Transaction3 = await Transactions.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Transaction3?.setBuyer) {
    await Transaction3.setBuyer(relatedBuyer3);
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

  const relatedRacket3 = await Rackets.findOne({
    offset: Math.floor(Math.random() * (await Rackets.count())),
  });
  const Transaction3 = await Transactions.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Transaction3?.setRacket) {
    await Transaction3.setRacket(relatedRacket3);
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
