# API REST - YourFinance.io

## Database Model

![App Screenshot](https://github.com/RenanFrancaDev/yourfinance.io_api/blob/main/assets/model_db.png)

## Install

### MySQL database tables

```mysql
CREATE TABLE `users` (
	`id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`created_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=7
;
```

```mysql
CREATE TABLE `categories` (
	`id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`user_id` BIGINT(20) UNSIGNED NULL DEFAULT NULL,
	`created_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `categories_user_id_foreign` (`user_id`) USING BTREE,
	CONSTRAINT `categories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=6
;

```

```mysql
CREATE TABLE `goals` (
	`id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	`description` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`amount` INT(10) NULL DEFAULT NULL,
	`date` DATE NULL DEFAULT NULL,
	`user_id` BIGINT(20) UNSIGNED NULL DEFAULT NULL,
	`created_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `goals_user_id_foreign` (`user_id`) USING BTREE,
	CONSTRAINT `goals_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=7
;

```

```mysql
CREATE TABLE `categories` (
	`id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`user_id` BIGINT(20) UNSIGNED NULL DEFAULT NULL,
	`created_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `categories_user_id_foreign` (`user_id`) USING BTREE,
	CONSTRAINT `categories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=6
;

```

