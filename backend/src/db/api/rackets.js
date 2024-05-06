const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class RacketsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const rackets = await db.rackets.create(
      {
        id: data.id || undefined,

        model: data.model || null,
        condition: data.condition || null,
        price: data.price || null,
        description: data.description || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await rackets.setSeller(data.seller || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.rackets.getTableName(),
        belongsToColumn: 'images',
        belongsToId: rackets.id,
      },
      data.images,
      options,
    );

    return rackets;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const racketsData = data.map((item, index) => ({
      id: item.id || undefined,

      model: item.model || null,
      condition: item.condition || null,
      price: item.price || null,
      description: item.description || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const rackets = await db.rackets.bulkCreate(racketsData, { transaction });

    // For each item created, replace relation files

    for (let i = 0; i < rackets.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.rackets.getTableName(),
          belongsToColumn: 'images',
          belongsToId: rackets[i].id,
        },
        data[i].images,
        options,
      );
    }

    return rackets;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const rackets = await db.rackets.findByPk(id, {}, { transaction });

    await rackets.update(
      {
        model: data.model || null,
        condition: data.condition || null,
        price: data.price || null,
        description: data.description || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await rackets.setSeller(data.seller || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.rackets.getTableName(),
        belongsToColumn: 'images',
        belongsToId: rackets.id,
      },
      data.images,
      options,
    );

    return rackets;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const rackets = await db.rackets.findByPk(id, options);

    await rackets.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await rackets.destroy({
      transaction,
    });

    return rackets;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const rackets = await db.rackets.findOne({ where }, { transaction });

    if (!rackets) {
      return rackets;
    }

    const output = rackets.get({ plain: true });

    output.reviews_racket = await rackets.getReviews_racket({
      transaction,
    });

    output.transactions_racket = await rackets.getTransactions_racket({
      transaction,
    });

    output.images = await rackets.getImages({
      transaction,
    });

    output.seller = await rackets.getSeller({
      transaction,
    });

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.users,
        as: 'seller',
      },

      {
        model: db.file,
        as: 'images',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.model) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('rackets', 'model', filter.model),
        };
      }

      if (filter.description) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('rackets', 'description', filter.description),
        };
      }

      if (filter.priceRange) {
        const [start, end] = filter.priceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            price: {
              ...where.price,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            price: {
              ...where.price,
              [Op.lte]: end,
            },
          };
        }
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.condition) {
        where = {
          ...where,
          condition: filter.condition,
        };
      }

      if (filter.seller) {
        var listItems = filter.seller.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          sellerId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.rackets.count({
            where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.rackets.findAndCountAll({
          where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('rackets', 'model', query),
        ],
      };
    }

    const records = await db.rackets.findAll({
      attributes: ['id', 'model'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['model', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.model,
    }));
  }
};
