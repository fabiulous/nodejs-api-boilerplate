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

  // No need to normalize the DB too much for data that will hardly ever change:
  contractType: {
    type: DataType.ENUM('EA', 'EP', 'PS', 'CT', 'CST'),
  },

  scheduleType: {
    type: DataType.ENUM('PT', 'FT'), // PT: Part-Time; FT: Full-Time
  },

}, {

  defaultScope: {
    limit: 20
  },

});

export default JobOffer;
