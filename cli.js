#!/bin/sh
const googleTrends = require('google-trends-api');

googleTrends
  .interestByRegion({
    keyword: 'Ford Raptor',
    startTime: new Date('2017-11-01'),
    resolution: 'COUNTRY'
  })
  .then(res => {
    const filteredResult = filterResult(JSON.parse(res));
    console.log(filteredResult);
  })
  .catch(err => {
    console.log(err);
  });

function filterResult(result) {
  const filteredResult = result.default.geoMapData.filter(
    country => country.value[0] > 0
  );
  return filteredResult.slice(0, 5);
}
