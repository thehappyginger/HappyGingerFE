/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Minecraft from './Minecraft';

const title = 'Minecraft Server Moniter/Console';

export default {

  path: '/minecraft',

  action() {
    return {
      title,
      component: <Layout><Minecraft title={title} /></Layout>,
    };
  },

};
