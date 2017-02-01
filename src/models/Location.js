import DataType from 'sequelize';
import Model from './sequelize';

const Location = Model.define('Location', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
  },

  slug: {
    type: DataType.STRING,
    unique: true,
  },

  name: {
    type: DataType.STRING,
    unique: true,
  },

  countryCode: {
    type: DataType.ENUM('PT', 'ES', 'FR', 'UK', 'DE', 'CH', 'BE', 'IE'), // List of countries we accept.
    unique: true,
    allowNull: false,
  },

}, {

  defaultScope: {
    limit: 20
  },

});

export default Location;
