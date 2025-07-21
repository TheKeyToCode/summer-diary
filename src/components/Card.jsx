import React from 'react';

export default function ArticleCard({ article }) {
  const { title, description, img, _created, _by } = article;

  const formatDate = (ts) => {
    const date = new Date(ts * 1000);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '16px',
      maxWidth: '600px'
    }}>
      {img?.path && (
        <img src={img.path} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      )}
      <h2>{title}</h2>
      <p><strong>Описание:</strong> {description || 'Нет описания'}</p>
      <p><strong>Категория:</strong> Тестовая категория</p>
      <p><strong>Дата:</strong> {formatDate(_created)}</p>
      <p><strong>Автор:</strong> {_by}</p>
    </div>
  );
}
