// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .get('/storageclitest3?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>sharepolicy01</Id><AccessPolicy><Start>2015-05-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 14 Feb 2017 06:23:36 GMT',
  etag: '"0x8D454A20214CA81"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a5523722-001a-0016-0f8a-865799000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .get('/storageclitest3?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>sharepolicy01</Id><AccessPolicy><Start>2015-05-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 14 Feb 2017 06:23:36 GMT',
  etag: '"0x8D454A20214CA81"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a5523722-001a-0016-0f8a-865799000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitest3?restype=share&comp=acl', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:08 GMT',
  etag: '"0x8D454A21516B4BB"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '08a33b1c-001a-000b-698a-868e73000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitest3?restype=share&comp=acl', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:08 GMT',
  etag: '"0x8D454A21516B4BB"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '08a33b1c-001a-000b-698a-868e73000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .get('/storageclitest3?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>sharepolicy01</Id><AccessPolicy><Start>2015-05-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>sharepolicy02</Id><AccessPolicy><Start>2015-05-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 14 Feb 2017 06:24:08 GMT',
  etag: '"0x8D454A21516B4BB"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '887300bf-001a-0012-168b-86a21b000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .get('/storageclitest3?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>sharepolicy01</Id><AccessPolicy><Start>2015-05-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>sharepolicy02</Id><AccessPolicy><Start>2015-05-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 14 Feb 2017 06:24:08 GMT',
  etag: '"0x8D454A21516B4BB"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '887300bf-001a-0012-168b-86a21b000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:38 GMT',
  connection: 'close' });
 return result; }]];