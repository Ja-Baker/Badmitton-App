const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const rackets = sequelize.define(
    'rackets',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      model: {
        type: DataTypes.TEXT,
      },

      condition: {
        type: DataTypes.ENUM,

        values: ['New', 'Used', 'Old'],
      },

      price: {
        type: DataTypes.DECIMAL,
      },

      description: {
        type: DataTypes.TEXT,
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

  rackets.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.rackets.hasMany(db.reviews, {
      as: 'reviews_racket',
      foreignKey: {
        name: 'racketId',
      },
      constraints: false,
    });

    db.rackets.hasMany(db.transactions, {
      as: 'transactions_racket',
      foreignKey: {
        name: 'racketId',
      },
      constraints: false,
    });

    //end loop

    db.rackets.belongsTo(db.users, {
      as: 'seller',
      foreignKey: {
        name: 'sellerId',
      },
      constraints: false,
    });

    db.rackets.hasMany(db.file, {
      as: 'images',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.rackets.getTableName(),
        belongsToColumn: 'images',
      },
    });

    db.rackets.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.rackets.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return rackets;
};
