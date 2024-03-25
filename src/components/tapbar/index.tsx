import './styles.css';
import ButtonShare from './button-share';
import ButtonUp from './button-up';
import ButtonComment from './button-comment';
import ButtonLike from './button-like';
import useScroll from '../../hooks/useScroll';

export default function Tapbar() {
  const { isShow } = useScroll();

  return (
    <aside className={`tapbar ${isShow ? 'show' : ''}`}>
      <ButtonShare />
      <ButtonUp />
      <ButtonComment />
      <ButtonLike />
    </aside>
  );
}
