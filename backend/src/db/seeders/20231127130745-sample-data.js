const db = require('../models');
const Users = db.users;

const Rackets = db.rackets;

const Reviews = db.reviews;

const Transactions = db.transactions;

const RacketsData = [
  {
    model: 'So I was walking Oscar',

    condition: 'Old',

    price: 21.32,

    description: 'Reckless he is. Matters are worse.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },

  {
    model: 'Contact the tower',

    condition: 'New',

    price: 89.14,

    description:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },

  {
    model: 'Come on now',

    condition: 'Used',

    price: 23.98,

    description:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },

  {
    model: 'I tell you what',

    condition: 'New',

    price: 71.92,

    description:
      'The dark side clouds everything. Impossible to see the future is.',

    // type code here for "images" field

    // type code here for "relation_one" field
  },
];

const ReviewsData = [
  {
    content: 'Difficult to see. Always in motion is the future...',

    rating: 2,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'You will find only what you bring in.',

    rating: 7,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'You will find only what you bring in.',

    rating: 7,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'You will find only what you bring in.',

    rating: 2,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TransactionsData = [
  {
    transaction_date: new Date('2023-09-30'),

    status: 'Cancelled',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    transaction_date: new Date('2023-08-10'),

    status: 'Cancelled',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    transaction_date: new Date('2023-11-06'),

    status: 'Pending',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    transaction_date: new Date('2023-09-06'),

    status: 'Cancelled',

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
