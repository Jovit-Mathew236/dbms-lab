CREATE TABLE customer_details(cust_id int unique,cust_name varchar(20),address varchar(50));
Table created.


CREATE TABLE emp_details(empid int unique,empname varchar(20),salary int);
Table created.


CREATE TABLE cust_count(count_row int);
Table created.


SQL> SET SERVEROUTPUT ON
SQL> CREATE OR REPLACE TRIGGER tgr AFTER INSERT ON customer_details
  2  BEGIN
  3  DBMS_OUTPUT.PUT_LINE('data inserted on customer_details');
  4  END;
  5  /
Trigger created.


SQL> SET SERVEROUTPUT ON
SQL> CREATE OR REPLACE TRIGGER tgr1 AFTER INSERT ON emp_details FOR EACH ROW WHEN(NEW.salary>2000)
  2  BEGIN
  3  DBMS_OUTPUT.PUT_LINE('The salray is reater than 2000');
  4  END;
  5  /
Trigger created.

SQL> SET SERVEROUTPUT ON
SQL> CREATE OR REPLACE TRIGGER tgrcreate AFTER INSERT ON customer_details
  2  BEGIN
  3  UPDATE cust_count SET count_row = count_row + 1;
  4  END;
  5  /

Trigger created.

SQL> SET SERVEROUTPUT ON
SQL> CREATE OR REPLACE TRIGGER tgrdelete AFTER DELETE ON customer_details
  2  BEGIN
  3  UPDATE cust_count SET count_row = count_row - 1;
  4  END;
  5  /

Trigger created.

SQL> INSERT INTO customer_details values(1,'Jovit','sjcet');
data inserted on customer_details

1 row created.

SQL> INSERT INTO emp_details values(2,'Jovit',3000);
The salray is reater than 2000

1 row created.

SQL> select * from cust_count;

 COUNT_ROW
----------
         1

SQL> DELETE FROM customer_details WHERE(cust_id=1);

1 row deleted.

SQL> select * from cust_count;

 COUNT_ROW
----------
         0
