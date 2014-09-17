<?php

class Common {

  public static function boolCheck($value){
    if (isset($value)) {
      return $value == "1" || $value == "true" ? "1" : "0";
    } else {
      return "0";
    }
  }

}
