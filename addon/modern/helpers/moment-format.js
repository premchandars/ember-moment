import Ember from 'ember';
import moment from 'moment';
import computeFn from '../utils/compute-fn';

export default Ember.Helper.extend({
  globalOutputFormat: 'LLLL',
  globalAllowEmpty: false,

  compute: computeFn(function(params, hash) {
    const length = params.length;

    if (length > 3) {
      throw new TypeError('ember-moment: Invalid Number of arguments, expected at most 3');
    }

    let output;
    const args = [];

    args.push(params[0]);

    if (length === 1) {
      output = this.globalOutputFormat;
    } else if (length === 2) {
      output = params[1];
    } else if (length > 2) {
      args.push(params[2]);
      output = params[1];
    }

    let time = moment(...args);

    if (hash.locale) {
      time = time.locale(hash.locale);
    }

    return time.format(output);
  })
});
