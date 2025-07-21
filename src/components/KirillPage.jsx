import React from "react";

export default function KirillCard() {
  const article = {
    title: "Алексей",
    description: "Пишет на реакторе",
    img: "https://system-informatics.iis.nsk.su/files/author/zubarevau.jpg",
    category: "Мастер",
    _created: "2025-05-05T12:12:12",
    _by: "Алексей",
  };

  const { title, description, img, category, _created, _by } = article;

  const formatDate = (ts) => {
    const date = new Date(ts);
    console.log(date, ts)
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-96 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-transform duration-200">
      <img
        src={
          img ||
          "https://dummyimage.com/720x400/ccc/000.png&text=No+Image"
        }
        alt="Image"
        className="w-full rounded-t-xl"
      />

      <div className="p-5">
        <div className="text-sm text-blue-600 font-medium">{category}</div>
        <div className="text-xl font-bold mt-1 mb-2">{title}</div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex justify-between text-sm text-gray-500 items-center">
          <div>
            👤 { _by } · { formatDate(_created) }
          </div>
          {/* <div className="flex gap-3">
            <span>👁 1488</span>
            <span className="text-gray-300">|</span>
            <span>💬 75</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
