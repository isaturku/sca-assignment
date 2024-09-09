<?php

declare(strict_types=1);

namespace App\Type;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeType extends ObjectType
{

  public function __construct()
  {
    parent::__construct([
      "name" => "Picture",
      "fields" => [
        "link" => Type::string(),
      ]
    ]);
  }
}
