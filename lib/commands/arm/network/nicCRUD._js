var __ = require('underscore');
var util = require('util');
var utils = require('../../../util/utils');
var $ = utils.getLocaleString;

function NicCRUD(cli, networkResourceProviderClient) {
  this.cli = cli;
  this.networkResourceProviderClient = networkResourceProviderClient;
}

__.extend(NicCRUD.prototype, {

  create: function (resourceGroupName, params, _) {
    var nic = this.get(resourceGroupName, params.name, _);
    if (nic) {
      throw new Error(util.format($('A network interface with name "%s" already exists in the resource group "%s"'), params.name, resourceGroupName));
    }

    var nicProfile = {
      properties: {
        ipConfigurations: [{
          name: params.ipAddressName,
          properties: {
            subnet: {
              id: params.subnetId
            }
          }
        }]
      },
      location: params.location
    };

    var progress = this.cli.interaction.progress(util.format($('Creating network interface "%s"'), params.name));
    try {
      this.networkResourceProviderClient.networkInterfaces.createOrUpdate(resourceGroupName, params.name, nicProfile,  _);
    } finally {
      progress.end();
    }
  },

  list: function (resourceGroupName, params, _) {
    var progress = this.cli.interaction.progress($('Getting the network interfaces'));
    var nics = null;
    try {
      nics = this.networkResourceProviderClient.networkInterfaces.list(resourceGroupName, _);
    } finally {
      progress.end();
    }

    var output = this.cli.output;
    this.cli.interaction.formatOutput(nics.networkInterfaces, function (outputData) {
      if (outputData.length === 0) {
        output.info($('No network interfaces found'));
      } else {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Location'), item.location);
          row.cell($('MAC Address'), item.properties.macAddress || '');
        });
      }
    });
  },

  show: function (resourceGroupName, params, _) {
    var nic = this.get(resourceGroupName, params.name, _);
    if (!nic) {
      throw new Error(util.format($('A network interface with name "%s" not found in the resource group "%s'), params.name, resourceGroupName));
    }

    var output = this.cli.output;
    this.cli.interaction.formatOutput(nic.networkInterface, function () {
      utils.logLineFormat(nic.networkInterface, output.data);
    });
  },

  get: function (resourceGroupName, name, _) {
    var progress = this.cli.interaction.progress(util.format($('Looking up the network interface "%s"'), name));
    try {
      var nic = this.networkResourceProviderClient.networkInterfaces.get(resourceGroupName, name, _);
      return nic;
    } catch (e) {
      if (e.code === 'ResourceNotFound') {
        return null;
      }
      throw e;
    } finally {
      progress.end();
    }
  },

  delete: function (resourceGroupName, params, _) {
    var nic = this.get(resourceGroupName, params.name, _);
    if (!nic) {
      throw new Error(util.format($('A network interface with name "%s" not found in the resource group "%s'), params.name, resourceGroupName));
    }

    if (!params.quiet && !this.cli.interaction.confirm(util.format($('Delete network interface "%s"? [y/n] '), params.name), _)) {
      return;
    }

    var progress = this.cli.interaction.progress(util.format($('Deleting network interface "%s"'), params.name));
    try {
      this.networkResourceProviderClient.networkInterfaces.deleteMethod(resourceGroupName, params.name, _);
    } finally {
      progress.end();
    }
  }

});

module.exports = NicCRUD;