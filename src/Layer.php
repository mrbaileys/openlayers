<?php
/**
 * @file
 * Class openlayers_layer.
 */

namespace Drupal\openlayers;

/**
 * Class openlayers_layer.
 */
abstract class Layer extends Object implements LayerInterface {

  protected $attached = array();

  public function getSource() {
    if ($source = $this->getOption('source')) {
      return openlayers_object_load('source', $this->getOption('source'));
    }
    return FALSE;
  }

  public function getStyle() {
    if ($style = $this->getOption('style')) {
      return openlayers_object_load('style', $this->getOption('style'));
    }
    return FALSE;
  }

  public function develop() {
    if ($data = $this->getSource()) {
      $this->setOption('source', $data);
    }
  }
  public function getType() {
    return 'Layer';
  }
}
