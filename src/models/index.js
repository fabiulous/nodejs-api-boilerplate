/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from './sequelize';
import Location from './Location';
import Company from './Company';
import JobOffer from './JobOffer';
import Category from './Category';
import Tag from './Tag';

// You can define relations here.
// =============================================================================

// Location
Location.JobOffers = Location.belongsToMany(JobOffer, {
  foreignKey: 'jobOfferId',
  through: 'JobOffer_Location',
  as: 'offers',
  foreignKey: {
      allowNull: false
  },
});

// Company
Company.Offers = Company.hasMany(JobOffer, {
  foreignKey: 'companyId',
  as: 'offers',
});

// Job Offer
JobOffer.Locations = JobOffer.belongsToMany(Location, {
  foreignKey: 'locationId',
  through: 'JobOffer_Location',
  as: 'locations',
  foreignKey: {
      allowNull: false
  },
});

JobOffer.Company = JobOffer.belongsTo(Company, {
  foreignKey: 'companyId',
  as: 'company',
  foreignKey: {
      allowNull: false
  },
});

JobOffer.Category = JobOffer.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category',
  foreignKey: {
      allowNull: false
  },
});

JobOffer.Tags = JobOffer.belongsToMany(Tag, {
  foreignKey: 'tagId',
  through: 'JobOffer_Tag',
  as: 'tags',
});

// Category
Category.JobOffers = Category.hasMany(JobOffer, {
  foreignKey: 'categoryId',
  as: 'offers',
});

// Tag
Tag.Offers = Tag.belongsToMany(JobOffer, {
  foreignKey: 'jobOfferId',
  through: 'JobOffer_Tag',
  as: 'offers',
});


function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export {
  Location,
  Company,
  JobOffer,
  Category,
  Tag,
 };
