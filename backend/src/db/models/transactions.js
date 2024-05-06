const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const transactions = sequelize.define(
    'transactions',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      transaction_date: {
        type: DataTypes.DATE,
      },

      status: {
        type: DataTypes.ENUM,

        values: ['Pending', 'Completed', 'Cancelled'],
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  transactions.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.transactions.belongsTo(db.users, {
      as: 'buyer',
      foreignKey: {
        name: 'buyerId',
      },
      constraints: false,
    });

    db.transactions.belongsTo(db.rackets, {
      as: 'racket',
      foreignKey: {
        name: 'racketId',
      },
      constraints: false,
    });

    db.transactions.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.transactions.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return transactions;
};
