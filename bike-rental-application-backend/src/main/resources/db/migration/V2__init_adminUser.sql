-- Admin User
insert into users(id, name, email, password_hash, role, phone, created_at, updated_at) 
values(1, 'admin', 'bikeadmin@gmail.com', '$2a$10$DHIIuiaHrc1V2A5/3HR3Duq37ZHDhzSjfNFBz88IjhVHLyBUTzopW', 'ADMIN', '9876543217', NOW(), NOW()
)