<?php
/**
 * @file
 * Control: Attribution.
 */

/**
 * Plugin definition.
 */
function openlayers_zoom_openlayers_control() {
  return array(
    'handler' => array(
      'class' => '\\Drupal\\openlayers\\Control\\zoom',
    ),
  );
}