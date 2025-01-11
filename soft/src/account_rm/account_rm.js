import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './account_rm.module.css'; // CSSモジュールを適用

const RmAccount = () => {
  const navigate = useNavigate(); // ページ遷移用
  const [email, setEmail] = useState(''); // メールアドレスの状態
  const [password, setPassword] = useState(''); // パスワードの状態
  const [errorMessage, setErrorMessage] = useState(''); // エラーメッセージ

  const handleOk = () => {
    if (!email || !password) {
      setErrorMessage('※間違っています。もう一度入力してください。');
      return;
    }

    if (email === 'admin@example.com' && password === 'password123') {
      navigate('/login'); // ログイン画面に遷移
    } else {
      setErrorMessage('※間違っています。もう一度入力してください。');
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <button onClick={() => navigate('/top')}>トップページへ戻る</button>
        <div className={styles.advertisement}>広告</div>
      </div>

      <div className={styles.center}>
        <div id="account">アカウント消去</div>
        {errorMessage && <p id="error-message" className={styles.error}>{errorMessage}</p>}
        <input
          type="email"
          id="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleOk}>OK</button>
      </div>

      <div className={styles.right}>
        <div className={styles.advertisement}>広告</div>
      </div>
    </div>
  );
};

export default RmAccount;
