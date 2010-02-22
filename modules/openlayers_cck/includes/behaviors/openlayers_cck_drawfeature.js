// $Id$

/**
 * @file
 * Main JS file for openlayers_cck
 *
 * @ingroup openlayers_cck
 */

// Declare global variable
openlayers_cck_drawfeature_wkt_field = null;

function update(features) {
  WktWriter = new OpenLayers.Format.WKT();
  for(var i in features.object.features) {
    features.object.features[i].geometry = features.object.features[i].geometry.transform(
      features.object.map.projection,
      new OpenLayers.Projection("EPSG:4326")
    );
  }
  wkt_value = WktWriter.write(features.object.features);
  openlayers_cck_drawfeature_wkt_field.text(wkt_value);
}

Drupal.behaviors.openlayers_cck_drawfeature = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors['openlayers_cck_drawfeature']) {
    // Add control
    openlayers_cck_drawfeature_wkt_field = 
      $("#"+data.map.behaviors['openlayers_cck_drawfeature'].wkt_field_id);

    var data_layer = new OpenLayers.Layer.Vector("Data Layer",
      {
        projection: new OpenLayers.Projection('EPSG:4326')
      }
    );

    data.openlayers.addLayer(data_layer);

    if (openlayers_cck_drawfeature_wkt_field.text() != '') {
      var wktFormat = new OpenLayers.Format.WKT();
      wkt = openlayers_cck_drawfeature_wkt_field.text();
      features = wktFormat.read(wkt);
      for(var i in features) {
        features[i].geometry = features[i].geometry.transform(
          new OpenLayers.Projection('EPSG:4326'),
          data.openlayers.projection
        );
      }
      data_layer.addFeatures(features);
    }

    // registering events late, because adding data
    // would result in a reprojection loop
    data_layer.events.register('featureadded', null, update);
    data_layer.events.register('featureremoved', null, update);
    data_layer.events.register('featuremodified', null, update);
    
    var control = new OpenLayers.Control.EditingToolbar(data_layer);
    data.openlayers.addControl(control);
    control.activate();
  }
};
