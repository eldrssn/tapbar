export default function ButtonUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button type="button" className="tapbar_item" onClick={scrollToTop}>
      <span className="hidden">На верх страницы</span>
      <img src="/up.svg" alt="Иконка наверх" />
    </button>
  );
}
