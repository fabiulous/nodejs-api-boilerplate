import DataType from 'sequelize';
import Model from './sequelize';

const Company = Model.define('Company', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
  },

  slug: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },

  name: {
    type: DataType.STRING,
    allowNull: false,
  },

  logo: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },

  website: {
    type: DataType.STRING,
    validate: {
      isUrl: true,
    },
  },

  email: {
    type: DataType.STRING,
    validate: {
      isEmail: true,
    },
  },

  address: {
    type: DataType.TEXT,
  },

  description: {
    type: DataType.TEXT,
  },

}, {

  defaultScope: {
    limit: 20
  },

});

export default Company;
