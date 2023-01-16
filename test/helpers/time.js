const { time } = require("@nomicfoundation/hardhat-network-helpers");

async function increase(duration) {
  // advance time by one hour and mine a new block
  await helpers.time.increase(duration);

  // mine a new block with timestamp `newTimestamp`
  await helpers.time.increaseTo(newTimestamp);

  // set the timestamp of the next block but don't mine a new block
  await helpers.time.setNextBlockTimestamp(newTimestamp);
}

const duration = {
  seconds: function (val) {
    return val;
  },
  minutes: function (val) {
    return val * this.seconds(60);
  },
  hours: function (val) {
    return val * this.minutes(60);
  },
  days: function (val) {
    return val * this.hours(24);
  },
};

module.exports = {
  increase,
  duration,
};
