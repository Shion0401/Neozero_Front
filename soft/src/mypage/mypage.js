//  マイページ
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './mypage.module.css'; // CSSモジュール
import fontstyles from '../font/font.module.css';


const MyPage = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handleTop = () => { // 「トップページへ戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handlePet = () => { // 「ペット情報変更」ボタン押下
    navigate('/pet_change'); // ペット情報変更画面に移動
  };

  const handleNyakama = () => { // 「Nyakama」ボタン押下
    navigate('/nyakama'); // Nyakama画面に移動
  };

  const handleMember = () => { // 「会員情報選択」ボタン押下
    navigate('/member'); // 会員情報選択画面に移動
  };

  const handleFollow = () => { // 「フォロー」ボタン押下
  };

  const handleReport = () => { // 「通報」ボタン押下
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };


  return (
    <div className={fontstyles.fontFamily}>
    <div className={styles.body}>

      <div className={styles.left}>

        <button // 「トップページへ戻る」ボタン
          className={styles.topButton}
          onClick={handleTop}
          style={inputStyle}
        >
          トップページへ戻る
        </button>

        <button // 「ペット情報変更」ボタン
          className={styles.petButton}
          onClick={handlePet}
          style={inputStyle}
        >
          ペット情報変更
        </button>

        <button // 「Nyakama」ボタン
          className={styles.nyakamaButton}
          onClick={handleNyakama}
          style={inputStyle}
        >
          Nyakama
        </button>

        <button // 「会員情報選択」ボタン
          className={styles.memberButton}
          onClick={handleMember}
          style={inputStyle}
        >
          会員情報選択
        </button>

        <div className={styles.inquiry}>
          問い合わせは<br/>
          general@ml.kochi-tech.ac.jp<br/>
          まで
        </div>
      </div>

      <div className={styles.center}>

        <div className={styles.title}>マイページ</div>
        <div className={styles.media}>
            <div className={styles.white}>
              <div className={styles.post}>
                <div className={styles.picture}>画像</div>
                <div className={styles.info}>
                  <button
                    className={styles.followButton}
                    onClick={handleFollow}
                    style={inputStyle}
                  >
                    フォロー
                  </button>
                  <div className={styles.push}>
                    <div className={styles.good}>いいね</div>
                    <div className={styles.money}>スパチャ</div>
                  </div>
                  <div className={styles.comment}>コメント</div>
                  <button
                    className={styles.reportButton}
                    onClick={handleReport}
                    style={inputStyle}
                  >
                    通報
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.white}>
              <div className={styles.post}>
                <div className={styles.picture}>画像</div>
                <div className={styles.info}>
                  <button
                    className={styles.followButton}
                    onClick={handleFollow}
                    style={inputStyle}
                  >
                    フォロー
                  </button>
                  <div className={styles.push}>
                    <div className={styles.good}>いいね</div>
                    <div className={styles.money}>スパチャ</div>
                  </div>
                  <div className={styles.comment}>コメント</div>
                  <button
                    className={styles.reportButton}
                    onClick={handleReport}
                    style={inputStyle}
                  >
                    通報
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.white}>
              <div className={styles.post}>
                <div className={styles.picture}>画像</div>
                <div className={styles.info}>
                  <button
                    className={styles.followButton}
                    onClick={handleFollow}
                    style={inputStyle}
                  >
                    フォロー
                  </button>
                  <div className={styles.push}>
                    <div className={styles.good}>いいね</div>
                    <div className={styles.money}>スパチャ</div>
                  </div>
                  <div className={styles.comment}>コメント</div>
                  <button
                    className={styles.reportButton}
                    onClick={handleReport}
                    style={inputStyle}
                  >
                    通報
                  </button>
                </div>
              </div>
            </div>
            
          </div>

      </div>

      <div className={styles.right}>
        <div className={styles.advertisement}>広告</div>
      </div>

    </div>
    </div>
  );
};

export default MyPage;
