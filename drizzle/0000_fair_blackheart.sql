CREATE TABLE `bookings` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`time` text NOT NULL,
	`service_id` text NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`cancel_hash` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `booking_slot_unique` ON `bookings` (`date`,`time`);--> statement-breakpoint
CREATE UNIQUE INDEX `booking_cancel_unique` ON `bookings` (`cancel_hash`);