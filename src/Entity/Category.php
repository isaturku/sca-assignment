<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table("category")]
class Category
{
  #[Id]
  #[Column, GeneratedValue]
  public int $id;
  #[Column]
  public string $name;
  #[OneToMany(targetEntity: Product::class, mappedBy: "category")]
  public Collection $products;
}
