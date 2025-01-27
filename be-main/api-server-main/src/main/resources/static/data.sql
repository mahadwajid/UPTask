--data.sql
INSERT INTO node(name, public_Key, ethereum_address, p2p_port, rcp_port, regsitered)
VALUES
('Node1', 'publicKey1', 'ethereumAddress1', 4443, 8080, true),
('Node2', 'publicKey2', 'ethereumAddress2', 4444, 8081, false);

INSERT INTO Model(name, hash_wb)
VALUES
('Model1', 'hashWB1'),
 ('Model2', 'hashWB2');
