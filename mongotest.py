from pymongo import MongoClient



    # Создаем подключение
client = MongoClient(host='localhost', port=27017)
print("Подключение к MongoDB успешно выполнено!")

    # Выбор базы данных
db = client['test_db']  # Название базы данных

    # Выбор коллекции
collection = db['users']  # Название коллекции

    # Добавление документа в коллекцию
user_data = {
        "name": "John Doe",
        "age": 30,
        "email": "johndoe@gmail.com"
    }
result = collection.insert_one(user_data)  # Вставка одного документа
print(f"Добавлен документ с ID: {result.inserted_id}")

delete_result = collection.delete_one({"name": "John oe"})  # Удаление одного документа
if delete_result.deleted_count > 0:
        print("Пользователь удалён.")
else:
        print("Пользователь не найден для удаления.")

    # Выполнение простого запроса
user = collection.find_one({"name": "John De"})
if delete_result.deleted_count > 0:
        print(f"Найден пользователь - {user}")
else:
        print("Пользователь не найден для получения.")



    # Закрытие подключения
client.close()
print("Подключение к MongoDB закрыто.")