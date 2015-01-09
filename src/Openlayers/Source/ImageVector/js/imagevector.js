Drupal.openlayers.pluginManager.register({
  fs: 'openlayers.source.internal.imagevector',
  init: function(data) {
    for (source in data.objects.sources) {
      if (source === data.opt.source) {
        data.opt.source = data.objects.sources[source];
        return new ol.source.ImageVector(data.opt);
      }
    }
  }
});
