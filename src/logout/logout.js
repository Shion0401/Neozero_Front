//ログアウト画面
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './logout.module.css'; // CSSモジュール(cssファイルかく)

const Logout = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handleTop = () => { //「トップページ」ボタン押下 
    navigate('/top'); // トップページ
  };

  const handleok = () => { //「 はい」ボタン押下 
    navigate('/login'); // はいのページ
  };

  const handleno = () => { //「いいえ」ボタン押下 
    navigate('/member'); // いいえ
  };


  return (
    <div className={styles.body}>
    <div className={styles.left}>
      <button className={styles.topButton} onClick={handleTop}>トップページへ戻る</button>
      <div className={styles.advertisement}>広告</div> 
    </div>

    <div className={styles.center}>
      <div className={styles.logout}>ログアウト</div>
      <div className={styles.white}>
        <p className={styles.message}>ログアウトするワン？</p>
        <button className={styles.okButton} onClick={handleok}>はい</button>
        <button className={styles.noButton} onClick={handleno}>いいえ</button>
      </div>
    </div>

    <div className={styles.right}>
    <div className={styles.advertisement2}>広告</div>
    </div>
  </div>
    );
};

export default Logout;
