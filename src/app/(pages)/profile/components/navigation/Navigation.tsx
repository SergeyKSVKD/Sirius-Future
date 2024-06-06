'use client'

import styles from './navigation.module.scss'
import cn from 'classnames'
import Logo from './icon/logo.svg'
import Home from './icon/home.svg'
import Schedule from './icon/schedule.svg'
import Payment from './icon/payment.svg'
import Achievements from './icon/achievements.svg'
import Puzzle from './icon/puzzle.svg'
import Folder from './icon/folder.svg'
import Support from './icon/support.svg'
import Settings from './icon/settings.svg'
import Question from './icon/question.svg'
import { memo, useState } from 'react'
import Marketing from '../marketing/Marketing'

const menu = [
    {
        menu: 'Главная',
        icon: Home,
    },
    {
        menu: 'Расписание',
        icon: Schedule,
    },
    {
        menu: 'Оплата',
        icon: Payment,
    },
    {
        menu: 'Достижения',
        icon: Achievements,
    },
    {
        menu: 'Тренажеры',
        icon: Puzzle,
    },
    {
        menu: 'Библиотека',
        icon: Folder,
    },
    {
        menu: 'Проверка связи',
        icon: Support,
    },
    {
        menu: 'Настройки',
        icon: Settings,
    },
    {
        menu: 'Вопросы',
        icon: Question,
    },
]

const Navigation = () => {
    const [activeMenu, setActiveMenu] = useState<string>('Главная')

    return <nav>
        <div className={styles.container}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.menu_container}>
                {menu.map(menu => {
                    const Icon = menu.icon
                    return <span key={menu.menu} className={cn(styles.menu, {
                        [styles.active]: menu.menu === activeMenu
                    })}
                        onClick={() => setActiveMenu(menu.menu)}
                    ><Icon />{menu.menu}</span>
                })}
            </div>
            <Marketing />
        </div>
    </nav>
}

export default memo(Navigation)