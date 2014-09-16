<?php

function openlayers_openlayers_control_mouseposition_openlayers_control() {
  return array(
    'handler' => array(
      'class' => 'openlayers_control_mouseposition',
    )
  );
}

class openlayers_control_mouseposition extends openlayers_control {

  function options_form() {
    return array(
      'target' => array(
        '#type' => 'textfield',
        '#title' => t('ID of the element.'),
        '#default_value' => $this->getOption('target'),
        '#description' => t(''),
      ),
      'undefinedHTML' => array(
        '#type' => 'textfield',
        '#title' => t('undefinedHTML'),
        '#default_value' => $this->getOption('undefinedHTML'),
        '#description' => t('Markup for undefined coordinates. Default is an empty string.'),
      ),
    );
  }

}