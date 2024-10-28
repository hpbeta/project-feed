import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType {
    id: number,
    author: Author,
    publishedAt: Date,
    content: Content[]
}

interface PostProps {
   post: PostType
}

export function Post({post}:PostProps) {

    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR } )

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([ ...comments, newCommentText ]) 
        setNewCommentText('')  
    }

    function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(e.target.value)
    }

    function onDeleteComment(commentToDelete: string) {

        const commentsWithouDeletedOne = comments.filter(comment => {
            return comment !==  commentToDelete
        })
       setComments(commentsWithouDeletedOne)
        
    }

    const isNewCommentEmpty = newCommentText.length === 0

    
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar  src={post.author.avatarUrl}  />
                    <div className={style.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
                {
                    post.content.map(line => {  
                        if(line.type === 'paragraph') {
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === 'link'){
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                  name='comment'
                  value={newCommentText}
                  onChange={handleNewCommentChange}
                  placeholder='Deixe um comentário' 
                   
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}> Publicar</button>
                </footer>
            </form>

            <div className={style.commentsList}>
               {
                comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={onDeleteComment} />
                })
               }
                
            </div>
        </article>
    )
}