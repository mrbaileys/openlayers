<?php
/**
 * @file
 * Interaction: DoubleClickZoom.
 */

namespace Drupal\openlayers\Interaction;
use Drupal\openlayers\Types\Interaction;

$plugin = array(
  'class' => '\\Drupal\\openlayers\\Interaction\\DoubleClickZoom',
  'arguments' => array('@module_handler', '@messenger', '@drupal7'),
);

/**
 * Class DoubleClickZoom.
 *
 * @package Drupal\openlayers\Interaction
 */
class DoubleClickZoom extends Interaction {

}
