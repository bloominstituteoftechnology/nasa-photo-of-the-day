export default (function (o, c, dayjs) {
  // locale needed later
  var proto = c.prototype;

  var localeData = function localeData() {
    var _this = this;

    return {
      months: function months(instance) {
        return instance.format('MMMM');
      },
      monthsShort: function monthsShort(instance) {
        return instance.format('MMM');
      },
      firstDayOfWeek: function firstDayOfWeek() {
        return _this.$locale().weekStart || 0;
      },
      weekdaysMin: function weekdaysMin(instance) {
        return instance.format('dd');
      },
      weekdaysShort: function weekdaysShort(instance) {
        return instance.format('ddd');
      }
    };
  };

  proto.localeData = function () {
    return localeData.bind(this)();
  };

  dayjs.localeData = function () {
    var localeObject = dayjs.Ls[dayjs.locale()];
    return {
      firstDayOfWeek: function firstDayOfWeek() {
        return localeObject.weekStart || 0;
      }
    };
  };
});