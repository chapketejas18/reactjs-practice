import { useEffect, useState } from 'react'
import './styles.css'
import useLocalStorage from './useLocalStorage'
const setting = {
  theme: 'dark',
  language: 'english',
}

const UserPreference = () => {
  const [preference, setPreference] = useState(setting)
  const [getItem, removeItem, setItem] = useLocalStorage()
  const [currentPreference, setCurrentPreference] = useState(preference)

  const handlePreferenceChange = (key, value) => {
    preference[key] = value
    const updatedPreference = preference
    setPreference(updatedPreference)
  }

  useEffect(() => {
    setCurrentPreference(getItem('userData'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const handleButtonClick = (e) => {
    if (e === 'set') {
      setItem('userData', preference)
    } else {
      removeItem('userData')
    }
    setCurrentPreference(getItem('userData'))
  }

  return (
    <div className="preference">
      <section>
        <p>Please select your prefered Theme:</p>
        <div>
          <input
            type="radio"
            name="theme"
            value="dark"
            onChange={() => handlePreferenceChange('theme', 'dark')}
          />
          <label htmlFor="dark">DARK</label>
          <input
            type="radio"
            name="theme"
            value="light"
            onChange={() => handlePreferenceChange('theme', 'light')}
          />
          <label htmlFor="light">LIGHT</label>
        </div>
        <br />
        <p>Please select your prefered Language:</p>
        <div>
          <input
            type="radio"
            name="language"
            value="english"
            onChange={() => handlePreferenceChange('language', 'english')}
          />
          <label htmlFor="english">ENGLISH</label>
          <input
            type="radio"
            name="language"
            value="spanish"
            onChange={() => handlePreferenceChange('language', 'spanish')}
          />
          <label htmlFor="spanish">Spanish</label>
        </div>
        <button onClick={() => handleButtonClick('set')}>
          Submit Preference
        </button>
        <button onClick={() => handleButtonClick('')}>Remove Preference</button>
      </section>
      <div
        className={
          currentPreference && currentPreference.theme === 'dark'
            ? 'dark'
            : 'light'
        }
      >
        {currentPreference && currentPreference.language === 'english' ? (
          <>
            272/2 by Kolkata Knight Riders is the second-highest total in IPL and the seventh-highest in all T20 cricket. The only higher total in IPL was exactly a week ago by Sunrisers Hyderabad against Mumbai Indians in Hyderabad when they smashed 277/3.
          </>
        ) : (
          <>
            272/2 de Kolkata Knight Riders es el segundo total más alto en IPL y el séptimo más alto en todo el cricket T20. El único total más alto en IPL fue hace exactamente una semana entre los Sunrisers Hyderabad contra los indios de Mumbai en Hyderabad cuando aplastaron 277/3.
          </>
        )}
      </div>
    </div>
  )
}

export default UserPreference