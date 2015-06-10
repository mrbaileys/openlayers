<?php
/**
 * @file
 * Style: Style.
 */

namespace Drupal\openlayers\Style;
use Drupal\openlayers\Types\Style;

$plugin = array(
  'class' => '\\Drupal\\openlayers\\Style\\OLStyle',
  'arguments' => array('@module_handler', '@messenger', '@drupal7'),
);

/**
 * Class OLStyle.
 */
class OLStyle extends Style {

}
