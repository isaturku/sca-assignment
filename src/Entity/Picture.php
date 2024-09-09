<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table("picture")]
class Picture
{
  #[Id]
  #[Column]
  public string $link;
  #[ManyToOne(inversedBy: "gallery")]
  public Product $product;
}
