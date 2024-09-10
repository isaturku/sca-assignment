<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\DiscriminatorColumn;
use Doctrine\ORM\Mapping\DiscriminatorMap;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\InheritanceType;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table("attribute")]
#[InheritanceType('SINGLE_TABLE')]
#[DiscriminatorColumn(name: 'discr', type: 'string')]
#[DiscriminatorMap(['attribute' => Attribute::class, 'color' => Color::class, 'size' => Size::class, 'capacity' => Capacity::class])]
class Attribute
{
  #[Id]
  #[Column]
  public string $id;
  #[Column]
  public string $value;
  #[Column(name: "display_value")]
  public string $displayValue;
  #[ManyToOne(inversedBy: "attributes")]
  public Product $product;
}
