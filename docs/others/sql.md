# sql常用命令总结
[[toc]]
## 连接
打开命令提示符，输入命令`mysql -u root -p`  或者 `mysql -u xupeng -p`  
连接到远程数据库服务器：`mysql -h 10.0.1.99 -u root -p`  
输入`exit`断开与MySQL Server的连接并返回到命令提示符。  


## 管理数据库
### 数据库操作
`SHOW DATABASES`列出所有数据库  
`CREATE DATABASE test`创建一个数据库  
`DROP DATABASE test`删除一个数据库  
`USE test`切换到某数据库  
`SHOW TABLES`显示所有的表  
`DESC students`查看表的结构  
`SHOW CREATE TABLE students`查看创建表的语句  
``` sql
CREATE TABLE 表名 (
     属性名 数据类型 [完整约束条件],
     属性名 数据类型 [完整约束条件],
      ...
      ...
     属性名 数据类型 [完整约束条件]
     )
```
* `UNSIGNED`(表示没有负数从零开始，应用于mysql的数值类型)
* `ZEROFILL`（当数值类型的数据长度不够时，会自动把0填充到数字前至数据的约定长度，自动添加UNSIGNED）
* `NOT NULL`(非空约束，插入不能给空值)													   
* `DEFAULT`(列的默认约束)
* `PRIMARY KEY`(主键,标识数据唯一性,不能重复自动禁止为空)
* `UNIQUE KEY`(唯一索引，一个表中可以有多个,同样的值不能重复，但是null除外)
* `AUTO_INCREMENT`(用于数值类型自动增长,默认从1开始)
* `FOREIGN KEY`(外键约束)
### 表操作
`DROP TABLE students`删除表  
`ALTER TABLE students ADD COLUMN birth VARCHAR(10) NOT NULL` 新增一列  
`ALTER TABLE students CHANGE COLUMN birth birthday VARCHAR(20) NOT NULL`修改列  
`ALTER TABLE students DROP COLUMN birthday`删除列  
`REPLACE INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99)`插入或替换  
`INSERT INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99) ON DUPLICATE KEY UPDATE name='小明', gender='F', score=99`插入或更新  
`INSERT IGNORE INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99)`插入或忽略  
`CREATE TABLE students_of_class1 SELECT * FROM students WHERE class_id=1`快照  
`ALTER TABLE students ADD UNIQUE INDEX uni_name (name)`唯一索引，name不能重复  
`ALTER TABLE students ADD CONSTRAINT uni_name UNIQUE (name)`唯一约束，name列没有索引，但仍然具有唯一性保证。  

## 增（INSERT）
`INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...)`  
如：`INSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80)`添加一条  
    `INSERT INTO students (class_id, name, gender, score) VALUES  (1, '大宝', 'M', 87),(2, '二宝', 'M', 81)`添加多条  
## 删（DELETE）
`DELETE FROM <表名> WHERE...`  
如：`DELETE FROM students WHERE id=1`  
    `DELETE FROM students`删除整个表的数据  
## 改（UPDATE）
`UPDATA <表名> 字段名1=字段值1,字段名2=字段值2 ...WHERE...`  
如：`UPDATE students SET score=score+10 WHERE score<80`  
## 查（SELECT）
### 基本查询
`SELECT * FROM <表名>    排序 ORDER BY score;ORDER BY score DESC;ORDER BY score DESC, gender`  
### 条件查询
`SELECT * FROM <表名> WHERE <条件表达式>`     条件运算按照NOT、AND、OR的优先级进行    使用LIKE判断相似  
### 投影查询
`SELECT 列1, 列2, 列3 FROM <表名> WHERE <条件表达式>`  
`SELECT 列1 别名1, 列2 别名2, 列3 别名3 FROM <表名> WHERE <条件表达式>`  
### 分页查询
`... LIMIT 3 OFFSET 5`从第5个开始显示，显示3条数据    `LIMIT 15 OFFSET 30`还可以简写成`LIMIT 30, 15`  
### 聚合查询
`SELECT COUNT(*) FROM students`查询一共有多少条记录  
`SELECT class_id, COUNT(*) num FROM students GROUP BY class_id`分组统计  
`SELECT class_id, gender, COUNT(*) num FROM students GROUP BY class_id, gender`多组统计  
`SUM`	计算某一列的合计值，该列必须为数值类型  
`AVG`	计算某一列的平均值，该列必须为数值类型  
`MAX`	计算某一列的最大值  
`MIN`	计算某一列的最小值  
### 多表查询
`SELECT * FROM students, classes`笛卡尔乘积  个数为表1的个数乘以表2的个数  
### 连接查询
`SELECT ... FROM <表1> INNER|RIGHT OUTER|LEFT OUTER|FULL OUTER JOIN <表2> ON 表1.字段1=表2.字段1 WHERE... ORDER BY...`  
