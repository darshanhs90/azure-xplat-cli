// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    name: 'Visual Studio Ultimate with MSDN',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"jobId\":\"6d95ab57-6398-4e98-bee6-2b55cded4ac7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:51:29.5317044+00:00\",\"startTime\":\"2017-03-13T23:51:52.9697019+00:00\",\"endTime\":\"2017-03-13T23:51:59.0167028+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"5b8f41fb-fe45-416f-8796-5048e2c3e261\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:52:03.8137+00:00\",\"endTime\":\"2017-03-13T23:52:04.5793481+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"99bfc47d-2dc1-4b3a-b33f-e4a2a36b2dbc\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:51:28.2347986+00:00\",\"startTime\":\"2017-03-13T23:51:59.0010788+00:00\",\"endTime\":\"2017-03-13T23:51:59.0167028+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '133b50c6-28c7-4ce2-bfe7-153e54246009',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"jobId\":\"6d95ab57-6398-4e98-bee6-2b55cded4ac7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:51:29.5317044+00:00\",\"startTime\":\"2017-03-13T23:51:52.9697019+00:00\",\"endTime\":\"2017-03-13T23:51:59.0167028+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"5b8f41fb-fe45-416f-8796-5048e2c3e261\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:52:03.8137+00:00\",\"endTime\":\"2017-03-13T23:52:04.5793481+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"99bfc47d-2dc1-4b3a-b33f-e4a2a36b2dbc\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:51:28.2347986+00:00\",\"startTime\":\"2017-03-13T23:51:59.0010788+00:00\",\"endTime\":\"2017-03-13T23:51:59.0167028+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '133b50c6-28c7-4ce2-bfe7-153e54246009',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs?$filter=submitTime%20ge%20datetimeoffset%272016-04-22%27&api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"jobId\":\"6d95ab57-6398-4e98-bee6-2b55cded4ac7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:51:29.5317044+00:00\",\"startTime\":\"2017-03-13T23:51:52.9697019+00:00\",\"endTime\":\"2017-03-13T23:51:59.0167028+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"5b8f41fb-fe45-416f-8796-5048e2c3e261\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:52:03.8137+00:00\",\"endTime\":\"2017-03-13T23:52:04.5793481+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"99bfc47d-2dc1-4b3a-b33f-e4a2a36b2dbc\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:51:28.2347986+00:00\",\"startTime\":\"2017-03-13T23:51:59.0010788+00:00\",\"endTime\":\"2017-03-13T23:51:59.0167028+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9e470151-1c44-4c66-862c-162097b36afb',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs?$filter=submitTime%20ge%20datetimeoffset%272016-04-22%27&api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"jobId\":\"6d95ab57-6398-4e98-bee6-2b55cded4ac7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:51:29.5317044+00:00\",\"startTime\":\"2017-03-13T23:51:52.9697019+00:00\",\"endTime\":\"2017-03-13T23:51:59.0167028+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"5b8f41fb-fe45-416f-8796-5048e2c3e261\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:52:03.8137+00:00\",\"endTime\":\"2017-03-13T23:52:04.5793481+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"99bfc47d-2dc1-4b3a-b33f-e4a2a36b2dbc\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:51:28.2347986+00:00\",\"startTime\":\"2017-03-13T23:51:59.0010788+00:00\",\"endTime\":\"2017-03-13T23:51:59.0167028+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9e470151-1c44-4c66-862c-162097b36afb',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs?$filter=submitTime%20lt%20datetimeoffset%272016-04-21%27&api-version=2016-11-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '12f87b65-7fdf-4c05-83b8-a9383d652618',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs?$filter=submitTime%20lt%20datetimeoffset%272016-04-21%27&api-version=2016-11-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '12f87b65-7fdf-4c05-83b8-a9383d652618',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:08 GMT',
  connection: 'close' });
 return result; }]];