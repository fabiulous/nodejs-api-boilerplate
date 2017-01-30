import DataType from 'sequelize';
import Model from './sequelize';

const ScheduleType = Model.define('ScheduleType', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING,
    unique: true,
  },

}, {

  defaultScope: {
    limit: 20
  },

});

export default ScheduleType;
