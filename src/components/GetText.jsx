//Файл Саши Байкова для его страницы
import React, { useState } from 'react';

const TextInputForm = () => {
  const [inputValue, setInputValue] = useState('');   // Хранит текущее значение поля ввода
  const [tekst, setTekst] = useState(null);           // Переменная для сохранения текста

  // Обработчик нажатия кнопки Submit
  const handleSubmit = (event) => {
    event.preventDefault();                         // Предотвращаем перезагрузку страницы
    if(inputValue.trim() !== '') {                   // Проверяем, что поле не пустое
      setTekst(inputValue);                          // Сохраняем введённый текст
      setInputValue('');                             // Очищаем поле ввода
    }
  };

  // Обработчик изменения поля ввода
  const handleChange = (event) => {
    setInputValue(event.target.value);               // Записываем новое значение поля
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Введите текст:</label><br/>
      <input id="text-input"
             type="text"
             placeholder="Ваш текст здесь..."
             value={inputValue}
             onChange={handleChange}/><br/><br/>

      <button type="submit">Отправить</button>

      {tekst && (                           // Если tekst существует (не null)
        <p>Записано: "{tekst}"</p>
      )}
    </form>
  );
};

export default TextInputForm;