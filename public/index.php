<?php

use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;

require_once __DIR__ . '/../vendor/autoload.php';

$config = ORMSetup::createAttributeMetadataConfiguration(
  paths: [__DIR__ . '../Entity/'],
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
  'host'     => $env['DB_HOST'],
  'user'     => $env['DB_USER'],
  'password' => $env['DB_PASS'],
  'dbname'   => $env['DB_DATABASE'],
  'driver'   => $env['DB_DRIVER'] ?? 'pdo_mysql',
], $config);

// obtaining the entity manager
$entityManager = new EntityManager($connection, $config);
$dispatcher = FastRoute\simpleDispatcher(function (FastRoute\RouteCollector $r) {
  $r->post('/graphql', [App\Controller\GraphQL::class, 'handle']);
});




$routeInfo = $dispatcher->dispatch(
  $_SERVER['REQUEST_METHOD'],
  $_SERVER['REQUEST_URI']
);

switch ($routeInfo[0]) {
  case FastRoute\Dispatcher::NOT_FOUND:
    // ... 404 Not Found
    break;
  case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
    $allowedMethods = $routeInfo[1];
    // ... 405 Method Not Allowed
    break;
  case FastRoute\Dispatcher::FOUND:
    $handler = $routeInfo[1];
    $vars = $routeInfo[2];
    echo $handler($vars);
    break;
}
