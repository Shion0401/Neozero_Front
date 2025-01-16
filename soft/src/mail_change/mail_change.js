//メールアドレス変更
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './mail_change.module.css';
import fontstyles from '../font/font.module.css';
import samplePet1Img from '../image/samplePet1.png'; //259:550
import samplePet2Img from '../image/samplePet2.png'; //259:750


const MailChange = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    currentEmail: '',
    newEmail: '',
    currentPassword: ''
  });

  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleTop = () => {
    navigate('/top');
  };

  const handleOk = () => {
    const { currentEmail, newEmail, currentPassword } = formData;

    if (!currentEmail) {
      setErrorMessage('※現在のメールアドレスを入力してください。');
      return;
    }

    if (!newEmail) {
      setErrorMessage('※新しいメールアドレスを入力してください。');
      return;
    }

    if (!currentPassword) {
      setErrorMessage('※パスワードを入力してください。');
      return;
    }

    if (!validatePassword(currentPassword)) {
      setErrorMessage('※パスワードは半角英数字8～16文字で入力してください。');
      return;
    }

    navigate('/change_info');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
    <div className={styles.body}>
      <div className={styles.left}>
        <button
          className={styles['main-button']}
          style={inputStyle}
          onClick={handleTop}
        >
          トップページへ戻る
        </button>
        <div className={styles.advertisement}>
          <img
            src={samplePet1Img} // 広告サンプル
            alt="samplePet1Img" // 代替テキスト
          />
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.mail}>メールアドレス変更</div>
        <p className={styles.p}>{errorMessage}</p>
        <input
          type="email"
          name="currentEmail"
          className={styles.input}
          placeholder="今のメールアドレス"
          value={formData.currentEmail}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="newEmail"
          className={styles.input}
          placeholder="新しいメールアドレス"
          value={formData.newEmail}
          style={inputStyle}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="currentPassword"
          className={styles.input}
          placeholder="今のパスワード"
          value={formData.currentPassword}
          onChange={handleInputChange}
        />
         <span className={styles.passwordHint}>※半角英数字8～16文字</span>
        <button
          className={styles.ok}
          onClick={handleOk}
          style={inputStyle}
        >
          OK
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.advertisement2}>
          <img
            src={samplePet2Img} // 広告サンプル
            alt="samplePet2Img" // 代替テキスト
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MailChange;