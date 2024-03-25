export default function ButtonShare() {
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .catch((error) =>
          console.error('Ошибка при попытке поделиться ссылкой:', error)
        );
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <button type="button" className="tapbar_item" onClick={handleShareClick}>
      <span className="hidden">Поделиться</span>
      <img src="/share.svg" alt="Иконка поделиться" />
    </button>
  );
}
