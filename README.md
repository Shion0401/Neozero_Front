ファイルは絶対に消去しない！！！！！！！！

どうしても消したい場合は要相談

・コード規約

◯ファイル名は小文字から始める

・gitの使い方

1. git使用の流れ
   
◯ git pull --rebase → gitの内容を自分のPCに反映

◯ git add <ファイル名> → <ファイル名>をgitに追加予定にする

◯ git commit -m <コメント> → 編集の記録

◯ git push → 追加予定のファイルをgitに追加

3. gitの状態確認

◯ git status

→ Changes to be committed
(変更後にgit addしたファイル/変更後にgit addしたけど、git commitもgit pushもしていない状態)

→ Changes not staged for commit
(変更後にgit addしていないファイル/変更後したけど、git addもしていない状態)

→ Untracked files
(Gitの管理下にないファイル/新しくファイルを作ったけど、git addもしていない状態)

4. gitにある状態に戻す

◯ git restore ファイル名

5. ファイル名変更

◯ git mv <今のファイル名> <新しいファイル名>

・CSSの順番

1. min-height/max-height/height

2. min-width/max-width/width

3. top/bottom/right/left

4. position

5.transform

6. text-align

7. font-size

→ 標準(medium)/input,button(large)/title(xx-large)

8. border
   
9. border-radius
    
10. color
    
11. background
    
12. padding
    
13. margin
    
14. cursor
    
15. display
