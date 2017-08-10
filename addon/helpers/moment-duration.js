import { get } from '@ember/object';
import moment from 'moment';

import BaseHelper from './-base';

export default BaseHelper.extend({

  disableInterval: true,

  compute(params, { locale, timeZone }) {
    this._super(...arguments);
    const momentService = get(this, 'moment');

    if (!params || params && params.length > 2) {
      throw new TypeError('ember-moment: Invalid Number of arguments, at most 2');
    }

    const result = momentService.moment(moment.duration(...params));
    return this.morphMoment(result._i, { locale, timeZone }).humanize();
  }
});
