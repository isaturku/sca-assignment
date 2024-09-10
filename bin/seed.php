<?php

use App\Entity\Category;
use App\Entity\Picture;
use App\Entity\Product;
use Doctrine\ORM\Tools\Console\ConsoleRunner;
use Doctrine\ORM\Tools\Console\EntityManagerProvider\SingleManagerProvider;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;
use Doctrine\Common\Collections\ArrayCollection;
use Dotenv\Dotenv;

require_once "vendor/autoload.php";

$dotenv = Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

$config = ORMSetup::createAttributeMetadataConfiguration(
  paths: [dirname(__DIR__) . "/src/Entity"],
  isDevMode: true,
);
// or if you prefer XML
// $config = ORMSetup::createXMLMetadataConfiguration(
//    paths: [__DIR__ . '/config/xml'],
//    isDevMode: true,
//);

// configuring the database connection
$connection = DriverManager::getConnection([
  'driver' => 'pdo_mysql',
  'host'     => $_ENV['DB_HOST'],
  'user'     => $_ENV['DB_USER'],
  'password' => $_ENV['DB_PASS'],
  'dbname'   => $_ENV['DB_DATABASE'],
], $config);

// obtaining the entity manager
$entityManager = new EntityManager($connection, $config);

$json = file_get_contents(__DIR__ . "/products.json");
$json_data = json_decode($json, true);

$batchSize = 20;

$i = 0;

foreach ($json_data["data"]["products"] as $product) {
  $i++;
  $productEntity = new Product();
  $productEntity->id = $product["id"];
  $productEntity->name = $product["name"];
  $productEntity->category = $product["category"];
  $productEntity->description = $product["description"];
  $productEntity->inStock = $product["inStock"];
  $productEntity->brand = $product["brand"];
  $productEntity->price = $product["prices"][0]["amount"];
  $productEntity->currency = $product["prices"][0]["currency"]["symbol"];
  $gallery = array();
  foreach ($product["gallery"] as $photo) {
    $pic = new Picture();
    $pic->link = $photo;
    $gallery = array();
    foreach ($product["gallery"] as $photo) {
      $pic = new Picture();
      $pic->link = $photo;
      $pic->product = $productEntity;
      array_push($gallery, $pic);
    }
    $productEntity->gallery = new ArrayCollection($gallery);
    $entityManager->persist($productEntity);
    if (($i % $batchSize) === 0) {
      $entityManager->flush();
      $entityManager->clear(); // Detaches all objects from Doctrine!
    }
  }
}

$entityManager->flush();
$entityManager->clear();
