import mysql.connector
from mysql.connector import Error


    # Подключение к базе данных
connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="test_db"
    )

if connection.is_connected():
        print("Успешно подключено к базе данных")

    # Выполнение запроса на добавление
cursor = connection.cursor()

    # Получение всех данных (fetchall)
fetch_all_query = "SELECT * FROM users"
cursor.execute(fetch_all_query)
result_all = cursor.fetchall()
print("Все данные:")
for row in result_all:
        print(row)

    # добавляем новые данные
insert_query = "INSERT INTO users (name, email) VALUES (%s, %s)"
data_to_insert = ('John Doe', 'john@gmail.com')
cursor.execute(insert_query, data_to_insert)
connection.commit()
print("Добавлено")

    # Выполнение запроса на удаление
delete_query = "DELETE FROM users WHERE name = %s"
data_to_delete = ('John Doe',)
cursor.execute(delete_query, data_to_delete)
connection.commit()
print("Удалено")

    # Выполнение запроса на выборку одного результата
select_query = "SELECT * FROM users WHERE name = %s"
data_to_select = ('John Doe',)
cursor.execute(select_query, data_to_select)
result = cursor.fetchone()
print(f'Результат - {result}')

connection.close()
print("Соединение закрыто")