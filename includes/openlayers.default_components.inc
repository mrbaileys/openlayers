<?php

function openlayers_default_components() {
  $export = array();

  $component = new stdClass;
  $component->api_version = 1;
  $component->machine_name = 'component_bootstrapjs_popup';
  $component->name = 'Bootstrap JS popup';
  $component->description = 'Bootstrap JS popup component is a component who allows you to display popup when clicking on a feature. It requires the bootstrapjs module to work.';
  $component->class = 'openlayers_component_bootstrapjs_popup';
  $component->options = array();
  $export['component_bootstrapjs_popup'] = $component;

  return $export;
}