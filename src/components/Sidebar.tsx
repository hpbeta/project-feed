import { Avatar } from './Avatar'
import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
       <aside className={style.sidebar}>
         <img className={style.cover} src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

         <div className={style.profile}>

            <Avatar hasBorder src="https://github.com/hpbeta.png" />
           
            <strong>João Lucas</strong>
            <span>Web Developer</span>
         </div>

         <footer>
            <a href="#">
                <PencilLine size={20} />
                Edite seu perfil</a>
         </footer>
       </aside> 
    )
}