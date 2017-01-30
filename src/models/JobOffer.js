import DataType from 'sequelize';
import Model from './sequelize';

const JobOffer = Model.define('JobOffer', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
  },

  slug: {
    type: DataType.STRING,
  },

  date: {
    type: DataType.DATE,
  },

  value: {
    type: DataType.RANGE(DataType.INTEGER),
  },

  description: {
    type: DataType.TEXT,
  },

  email: {
    type: DataType.STRING,
    validate: {
      isEmail: true,
    },
  },

}, {

  defaultScope: {
    limit: 20
  },

});

export default JobOffer;
