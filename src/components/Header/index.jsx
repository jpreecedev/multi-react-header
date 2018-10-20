import * as React from 'react'
import { StateConsumer } from '@jpreecedev/multi-react-global'
import styles from './styles.module.scss'
import logo from '../../img/logo.png'

function Header() {
  return (
    <div className={styles.header}>
      <a
        className={styles.link}
        href="https://www.developerhandbook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.image} src={logo} alt="DeveloperHandbook.com" />
      </a>
      <StateConsumer>
        {({ globalState }) => <p>{`Hello, from ${globalState.name}`}</p>}
      </StateConsumer>
    </div>
  )
}

export default Header
