import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'


interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment () {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }
    
    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/hpbeta.png" alt="" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                          <strong>João Lucas</strong>  
                          <time title='21 de Outubro ás 13:48' dateTime="2024-10-21 13:47:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}  title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}