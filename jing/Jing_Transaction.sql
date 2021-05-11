create table jing_transaction (
id INT NOT NULL AUTO_INCREMENT primary key,
original_token varchar(20) unique key, 
current_token varchar(20) unique key,  
status int)


create table transaction_status (
id INT NOT NULL AUTO_INCREMENT primary key,
status_code varchar(50))

insert into transaction_status (status_code) values('transferred to seller')
insert into transaction_status (status_code) values('validation failed')
insert into transaction_status (status_code) values('pending')

