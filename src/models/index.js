/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from './sequelize';
import Module from './Module';

// You can define relations here.
// =============================================================================

// // USER
// User.Posts = User.hasMany(Post, {
//   foreignKey: 'userId',
//   as: 'posts',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });
//
// // POST
// Post.User = Post.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'owner',
// });


function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { Module };
