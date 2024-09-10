<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table("product")]
class Product
{
  #[Id]
  #[Column(length: 255)]
  public string $id;
  #[Column]
  public string $name;
  #[Column(name: "in_stock")]
  public bool $inStock;
  #[Column(type: "text")]
  public string $description;
  #[Column]
  public string $category;
  #[OneToMany(targetEntity: Picture::class, mappedBy: "product", cascade: ["persist"])]
  public Collection $gallery;
  #[Column]
  public string $brand;
  #[ManyToMany(targetEntity: Attribute::class, mappedBy: "product")]
  public Collection $attributes;
  #[Column]
  public float $price;
  #[Column]
  public string $currency;
}
