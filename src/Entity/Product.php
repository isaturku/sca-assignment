<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table("product")]
class Product
{
  #[Id]
  #[Column]
  public string $id;
  #[Column]
  public string $name;
  #[Column(name: "in_stock")]
  public bool $inStock;
  #[Column]
  public string $description;
  #[ManyToOne(inversedBy: "products")]
  public Category $category;
}
