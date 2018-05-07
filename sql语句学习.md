# sql 语句

## 登陆

mysql -uroot -p

use douban;

## 增加

1. 库

CREATE DATABASE 数据库名;

2. 表

```sql
-- 创建学生表
CREATE TABLE Student
(
  Id INT NOT NULL UNIQUE PRIMARY KEY,
  Name VARCHAR(20) NOT NULL,
  Age INT NULL,
  Gender VARCHAR(4) NULL
);
```

3. 数据

```sql
-- 插入不存在的数据
INSERT INTO <表名> [(字段名[,字段名]…)] VALUES (常量[,常量]…);
-- 将查询的数据插入到数据表中
INSERT INTO <表名> [(字段名[,字段名]…)] SELECT 查询语句;
--
-- 插入不存在的数据
INSERT INTO Student (Name,Age,Gender) VALUES ('Andy',30,'女');
-- 将查询的数据插入到数据表中
INSERT INTO Student (Name,Age,Gender)
  SELECT Name,Age,Gender FROM Student_T WHERE Id >10;
```

```sql

```

4. 索引

```sql
CREATE [UNIQUE] [CLUSTER] INDEX <索引名> ON <表名>(<列名>[<次序>][,<列名>[<次序>]]…);
-- 建立学生表索引：单一字段Id索引倒序
CREATE UNIQUE INDEX INDEX_SId ON Student (Id DESC);
-- 建立学生表索引：多个字段Id、Name索引倒序
CREATE UNIQUE INDEX INDEX_SId_SName ON Student (Id DESC,Name DESC);
```

5. 视图

> 查询子句：子查询可以是任何SELECT语句，但是常不允许含有ORDER BY子句和DISTINCT短语；
> WITH CHECK OPTION：表示对UPDATE、INSERT、DELETE操作时要保证更新。

```sql
CREATE VIEW <视图名>
  AS SELECT 查询子句
  [WITH CHECK OPTION]

CREATE VIEW VIEW_Stu_Man
AS SELECT * FROM Student WHERE Gender = '男'
WITH CHECK OPTION
```

## 查询

1. 库

show databases;

2. 表

select table_name from information_schema.tables where table_schema='database_name' and table_type='base table';

3. 数据

```sql
SELECT [ALL|DISTINCT] <目标列表达式>[,<目标列表达式>]…
  FROM <表名或视图名>[,<表名或视图名>]…
  [WHERE <条件表达式>]
  [GROUP BY <列名> [HAVING <条件表达式>]]
  [ORDER BY <列名> [ASC|DESC]…]
```

```sql
SELECT * FROM Student
  WHERE Id>10
  GROUP BY Age HAVING AVG(Age) > 20
  ORDER BY Id DESC
```


```sql

```

## 修改

1. 库


2. 表

```sql
-- 添加列
ALTER TABLE <表名> [ADD <新列名> <数据类型>[列级完整性约束条件]]
-- 删除列
ALTER TABLE <表名> [DROP COLUMN <列名>]
-- 修改列
ALTER TABLE <表名> [MODIFY COLUMN <列名> <数据类型> [列级完整性约束条件]]

--
-- 添加学生表`Phone`列
ALTER TABLE Student ADD Phone VARCHAR(15) NULL;
-- 删除学生表`Phone`列
ALTER TABLE Student DROP COLUMN Phone;
-- 修改学生表`Phone`列
ALTER TABLE Student MODIFY Phone VARCHAR(13) NULL;
```

3. 数据

```sql
UPDATE <表名> SET 列名=值表达式[,列名=值表达式…]
  [WHERE 条件表达式]
--
-- 将Id在(10,100)的Age加1
UPDATE Student SET Age= Age+1 WHERE Id>10 AND Id<100
```

## 清空

2. 表

TRUNCATE TABLE <表名>;

## 删除

1. 库

DROP DATABASE db;

2. 表

DROP TABLE <表名>;

3. 数据

```sql
DELETE FROM <表名> [WHERE 条件表达式]
-- 删除Id小于10的数据记录
DELETE FROM Student WHERE Id<10;
```

4. 索引

```sql
DROP INDEX <索引名>;
-- 删除学生表索引 INDEX_SId
DROP INDEX INDEX_SId;
```

5. 视图

```sql
DROP VIEW <视图名>;

DROP VIEW VIEW_Stu_Man;
```

## 授权

```sql
-- 1.授权
GRANT <权限>[,<权限>]…
  [ON <对象类型> <对象名>]
  TO <用户>[,<用户>]…
  [WITH GRANT OPTION]
-- 2.收回授权
REVOKE <权限>[,<权限>]…
  [ON <对象类型> <对象名>]
  FROM <用户>[,<用户>]…

-- 授权
GRANT SELECT,INSERT,UPDATE ON TABLE TO USER_Admin WITH GRANT OPTION
-- 收回授权
REVOKE SELECT,INSERT,UPDATE ON TABLE FROM USER_Admin
```

> WITH GRANT OPTION：若指定此子句，表示该用户可以将权限赋给其他用户