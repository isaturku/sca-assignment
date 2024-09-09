<?php

declare(strict_types=1);

namespace App\Type;

use App\Type\PictureType;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ProductType extends ObjectType
{

  public function __construct()
  {
    parent::__construct([
      "name" => "Product",
      "fields" => [
        "id" => Type::string(),
        "name" => Type::string(),
        "inStock" => Type::boolean(),
        "description" => Type::string(),
        "category" => Type::string(),
        "gallery" => Type::listOf(TypeRegistry::type(PictureType::class)),
        "brand" => Type::string(),
        "attributes" => Type::listOf(TypeRegistry::type(AttributeType::class)),
      ]
    ]);
  }
}
