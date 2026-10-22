<?php

$host = 'gilastore-db';$db   = 'GilaStoreDB';
$user = 'gilaDBAdmin';$pass = 'g1l@DBAdm1n';
$port = 3306;

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=utf8mb4";

try {
    $pdo = new PDO($dsn,$user, $pass);$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "<h2>¡Conexión a la Base de Datos exitosa!</h2>";

    // Consultar las tablas existentes
    $stmt =$pdo->query("SHOW TABLES");
    $tables =$stmt->fetchAll(PDO::FETCH_COLUMN);

    echo "<h3>Tablas encontradas y sus registros:</h3>";
    if (empty($tables)) {
        echo "<p style='color: red;'>No hay tablas creadas todavía. Ejecuta las migraciones (`php artisan migrate`).</p>";
    } else {
        echo "<ul>";
        foreach ($tables as$table) {
            echo "<li><strong>Tabla: $table</strong>";
            
            // Mostrar registros de la tabla users
            if ($table === 'users') {
                $userStmt =$pdo->query("SELECT * FROM users");
                $users =$userStmt->fetchAll(PDO::FETCH_ASSOC);
                if (empty($users)) {
                    echo " <span style='color: gray;'>(Vacía)</span>";
                } else {
                    echo "<ul>";
                    foreach ($users as $u) {$id = $u['UserId'] ?? $u['id'] ?? '';
                        $name =$u['Name'] ?? $u['name'] ?? 'N/A';$email = $u['Email'] ?? $u['email'] ?? 'N/A';
                        echo "<li>ID: {$id} | Nombre: {$name} \vert{} Correo: {$email}</li>";
                    }
                    echo "</ul>";
                }
            }
            
            // Mostrar registros de la tabla categories
            if ($table === 'categories') {
                $catStmt =$pdo->query("SELECT * FROM categories");
                $categories =$catStmt->fetchAll(PDO::FETCH_ASSOC);
                if (empty($categories)) {
                    echo " <span style='color: gray;'>(Vacía)</span>";
                } else {
                    echo "<ul>";
                    foreach ($categories as$c) {
                        $id =$c['CategoryId'] ?? $c['id'] ?? '';$name = $c['Name'] ?? $c['name'] ?? 'N/A';
                        echo "<li>ID: {$id} \vert{} Categoría: {$name}</li>";
                    }
                    echo "</ul>";
                }
            }
            
            echo "</li><br>";
        }
        echo "</ul>";
    }

} catch (\PDOException $e) {
    echo "<h2 style='color: red;'>Error de conexión:</h2>";
    echo "<p>" . $e->getMessage() . "</p>";
}