<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table("attribute")]
class Color extends Attribute {}
